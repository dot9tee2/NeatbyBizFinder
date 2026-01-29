'use client';

import { Star } from 'lucide-react';

interface ReviewCardProps {
    reviewerName: string;
    rating: number;
    reviewText: string;
    createdAt: string;
}

export default function ReviewCard({ reviewerName, rating, reviewText, createdAt }: ReviewCardProps) {
    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-lg font-semibold text-slate-900">{reviewerName}</h4>
                    <p className="text-sm text-slate-500">{formattedDate}</p>
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < rating ? 'text-emerald-400 fill-current' : 'text-slate-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
            <p className="text-slate-600 leading-relaxed">{reviewText}</p>
        </div>
    );
}
