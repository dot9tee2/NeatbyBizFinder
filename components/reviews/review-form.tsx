'use client';

import { useState } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewFormProps {
    businessSlug: string;
    onReviewSubmitted: () => void;
}

export default function ReviewForm({ businessSlug, onReviewSubmitted }: ReviewFormProps) {
    const [reviewerName, setReviewerName] = useState('');
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    businessSlug,
                    reviewerName,
                    rating,
                    reviewText,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit review');
            }

            setSuccess(true);
            setReviewerName('');
            setRating(5);
            setReviewText('');
            onReviewSubmitted();

            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Leave a Review</h3>

            {success && (
                <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700">
                    Thank you! Your review has been submitted successfully.
                </div>
            )}

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Name Input */}
                <div>
                    <label htmlFor="reviewerName" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="reviewerName"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="John Smith"
                        required
                        maxLength={100}
                    />
                </div>

                {/* Star Rating */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Rating
                    </label>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setRating(i + 1)}
                                onMouseEnter={() => setHoverRating(i + 1)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="p-1 transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`h-8 w-8 ${i < (hoverRating || rating)
                                            ? 'text-emerald-400 fill-current'
                                            : 'text-slate-300'
                                        } transition-colors`}
                                />
                            </button>
                        ))}
                        <span className="ml-2 text-slate-600">{rating} / 5</span>
                    </div>
                </div>

                {/* Review Text */}
                <div>
                    <label htmlFor="reviewText" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Review
                    </label>
                    <textarea
                        id="reviewText"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                        placeholder="Share your experience with us..."
                        rows={4}
                        required
                        minLength={10}
                        maxLength={1000}
                    />
                    <p className="text-sm text-slate-500 mt-1">
                        {reviewText.length}/1000 characters
                    </p>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-semibold rounded-lg transition-all"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        'Submit Review'
                    )}
                </Button>
            </div>
        </form>
    );
}
