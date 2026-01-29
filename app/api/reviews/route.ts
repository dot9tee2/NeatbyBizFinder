import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Rate limiting: Track submissions per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REVIEWS_PER_WINDOW = 3; // Max 3 reviews per hour per IP

function getRateLimitKey(ip: string): string {
    return `review_${ip}`;
}

function isRateLimited(ip: string): boolean {
    const key = getRateLimitKey(ip);
    const now = Date.now();
    const record = rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= MAX_REVIEWS_PER_WINDOW) {
        return true;
    }

    record.count++;
    return false;
}

// GET: Fetch approved reviews for a business
export async function GET(request: NextRequest) {
    try {
        if (!supabaseUrl || !supabaseServiceKey) {
            return NextResponse.json(
                { error: 'Supabase not configured' },
                { status: 500 }
            );
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { searchParams } = new URL(request.url);
        const businessSlug = searchParams.get('businessSlug');

        if (!businessSlug) {
            return NextResponse.json(
                { error: 'businessSlug is required' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('business_slug', businessSlug)
            .eq('is_approved', true)
            .order('created_at', { ascending: false })
            .limit(20);

        if (error) {
            console.error('Error fetching reviews:', error);
            return NextResponse.json(
                { error: 'Failed to fetch reviews' },
                { status: 500 }
            );
        }

        return NextResponse.json({ reviews: data || [] });
    } catch (err) {
        console.error('Reviews GET error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST: Submit a new review
export async function POST(request: NextRequest) {
    try {
        if (!supabaseUrl || !supabaseServiceKey) {
            return NextResponse.json(
                { error: 'Supabase not configured' },
                { status: 500 }
            );
        }

        // Get client IP for rate limiting
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded?.split(',')[0]?.trim() ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many reviews submitted. Please try again later.' },
                { status: 429 }
            );
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const body = await request.json();

        const { businessSlug, reviewerName, rating, reviewText } = body;

        // Validate required fields
        if (!businessSlug || !reviewerName || !rating || !reviewText) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate rating
        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            );
        }

        // Validate text lengths
        if (reviewerName.length > 100) {
            return NextResponse.json(
                { error: 'Name is too long' },
                { status: 400 }
            );
        }

        if (reviewText.length > 1000) {
            return NextResponse.json(
                { error: 'Review text is too long (max 1000 characters)' },
                { status: 400 }
            );
        }

        if (reviewText.length < 10) {
            return NextResponse.json(
                { error: 'Review text is too short (min 10 characters)' },
                { status: 400 }
            );
        }

        // Insert review (auto-approved)
        const { data, error } = await supabase
            .from('reviews')
            .insert({
                business_slug: businessSlug,
                reviewer_name: reviewerName.trim(),
                rating: Math.round(rating),
                review_text: reviewText.trim(),
                is_approved: true,
            })
            .select()
            .single();

        if (error) {
            console.error('Error inserting review:', error);
            return NextResponse.json(
                { error: 'Failed to submit review' },
                { status: 500 }
            );
        }

        return NextResponse.json({ review: data, success: true });
    } catch (err) {
        console.error('Reviews POST error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
