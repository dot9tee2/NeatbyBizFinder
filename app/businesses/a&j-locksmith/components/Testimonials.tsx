'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Sarah M.",
        role: "Homeowner",
        text: "Locked myself out at 2 AM. Tech arrived in 15 minutes and popped the lock in seconds. Lifesavers!",
        rating: 5
    },
    {
        name: "David T.",
        role: "Business Owner",
        text: "Replaced all our office locks with high-security smart systems. Professional, fast, and great pricing.",
        rating: 5
    },
    {
        name: "Emily R.",
        role: "Car Lockout",
        text: "thought I was stranded with my baby in the car. They prioritized my call and got here so fast. Thank you!",
        rating: 5
    },
    {
        name: "Michael B.",
        role: "Apartment Manager",
        text: "A&J is our go-to for all tenant re-keys. Always reliable and easy to work with.",
        rating: 5
    }
]

export default function Testimonials() {
    const scrollerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scroller = scrollerRef.current
            if (!scroller) return

            gsap.to(scroller.children, {
                xPercent: -100,
                repeat: -1,
                duration: 30,
                ease: "none",
            })
        }, scrollerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="py-24 bg-[#05070a] relative overflow-hidden">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Recent <span className="text-[#f7be32]">Saves</span>
                </h2>
                <p className="text-gray-400">Real stories from your neighbors.</p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-sides">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05070a] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05070a] to-transparent z-20 pointer-events-none" />

                <div className="flex w-[200%] gap-8" ref={scrollerRef}>
                    {/* Original Set */}
                    <div className="flex gap-8 w-1/2 justify-around">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </div>
                    {/* Duplicate Set (will be rendered by map again in reality, but purely visual here, actually let's just render the component list twice here to avoid complexity in ref logic) */}
                    <div className="flex gap-8 w-1/2 justify-around">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={`clone-${i}`} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
    return (
        <div className="w-[400px] flex-shrink-0 bg-[#f7be32]/5 border border-[#f7be32]/10 p-8 rounded-3xl backdrop-blur-sm relative group hover:bg-[#f7be32]/10 transition-colors">
            <Quote className="absolute top-6 right-6 text-[#f7be32]/20 w-12 h-12" />
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#f7be32] text-[#f7be32]" />
                ))}
            </div>
            <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
            <div>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-[#f7be32] text-sm font-medium">{testimonial.role}</p>
            </div>
        </div>
    )
}
