'use client';

import { useState, useEffect, useCallback } from 'react';
import { Loader2, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ReviewCard from './review-card';
import ReviewForm from './review-form';

interface Review {
    id: string;
    reviewer_name: string;
    rating: number;
    review_text: string;
    created_at: string;
}

interface ReviewsSectionProps {
    businessSlug: string;
    businessName: string;
    accentColor?: string;
}

export default function ReviewsSection({ businessSlug, businessName, accentColor = 'emerald' }: ReviewsSectionProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchReviews = useCallback(async () => {
        try {
            const response = await fetch(`/api/reviews?businessSlug=${encodeURIComponent(businessSlug)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch reviews');
            }

            setReviews(data.reviews || []);
            setError(null);
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setError('Unable to load reviews at this time');
        } finally {
            setIsLoading(false);
        }
    }, [businessSlug]);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    // Handle deep linking scroll
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#reviews') {
            // Small delay to ensure layout stability (e.g. hero video loading)
            const timer = setTimeout(() => {
                const element = document.getElementById('reviews');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleReviewSubmitted = () => {
        // Refresh reviews after submission
        fetchReviews();
    };

    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : null;

    return (
        <section id="reviews" className="py-20 bg-slate-50 scroll-mt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <Badge className={`mb-4 bg-${accentColor}-100 text-${accentColor}-800 border-${accentColor}-200`}>
                        Customer Reviews
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Read reviews from customers who have used {businessName}&apos;s services.
                    </p>
                    {averageRating && (
                        <div className={`mt-4 inline-flex items-center gap-2 text-${accentColor}-600`}>
                            <span className="text-3xl font-bold">{averageRating}</span>
                            <span className="text-lg">/ 5 from {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
                        </div>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Reviews List */}
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                            <MessageSquare className={`h-6 w-6 text-${accentColor}-500`} />
                            Recent Reviews
                        </h3>

                        {isLoading ? (
                            <div className="flex items-center justify-center py-12">
                                <Loader2 className={`h-8 w-8 animate-spin text-${accentColor}-500`} />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12 text-slate-500">
                                {error}
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                                <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500">No reviews yet. Be the first to leave a review!</p>
                            </div>
                        ) : (
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                {reviews.map((review) => (
                                    <ReviewCard
                                        key={review.id}
                                        reviewerName={review.reviewer_name}
                                        rating={review.rating}
                                        reviewText={review.review_text}
                                        createdAt={review.created_at}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Review Form */}
                    <div>
                        <ReviewForm
                            businessSlug={businessSlug}
                            onReviewSubmitted={handleReviewSubmitted}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
