'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Sarah M.",
        role: "Homeowner — East Wichita",
        text: "Locked myself out at 2 AM near Kellogg. Tech arrived in 14 minutes and had me back inside in seconds. Absolute lifesavers — worth every penny!",
        rating: 5
    },
    {
        name: "David T.",
        role: "Business Owner — Downtown Wichita",
        text: "Replaced all our office locks on Douglas Ave with high-security smart systems. Professional, fast, and priced way better than anyone else I called.",
        rating: 5
    },
    {
        name: "Emily R.",
        role: "Car Lockout — Derby, KS",
        text: "Thought I was stranded with my baby in the car off Rock Road. They prioritized my call and got to me in under 20 minutes. I was in tears — thank you so much.",
        rating: 5
    },
    {
        name: "Michael B.",
        role: "Property Manager — West Wichita",
        text: "A&J handles all our tenant re-keys across three properties in Wichita. Always on time, always professional. Our go-to locksmith without question.",
        rating: 5
    },
    {
        name: "Jessica K.",
        role: "Homeowner — Andover, KS",
        text: "Had a broken ignition at 10 PM. Called four locksmiths — A&J was the only one who picked up and actually showed up. Fixed on the spot, no dealership needed.",
        rating: 5
    },
    {
        name: "Ron D.",
        role: "Contractor — Maize, KS",
        text: "Needed a master key system set up for a commercial build in Maize. These guys knew exactly what they were doing. Fair price, zero drama.",
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
                duration: 40,
                ease: "none",
            })
        }, scrollerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="py-24 bg-[#05070a] relative overflow-hidden" aria-label="Customer reviews for A&J Locksmith Wichita KS">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-10">
                <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-3">5-Star Reviews</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Wichita Neighbors <span className="text-[#f7be32]">Trust Us</span>
                </h2>
                <p className="text-gray-400">Real stories from customers across Wichita and surrounding communities.</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05070a] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05070a] to-transparent z-20 pointer-events-none" />

                <div className="flex w-[200%] gap-8" ref={scrollerRef}>
                    <div className="flex gap-8 w-1/2 justify-around">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </div>
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
        <div className="w-[420px] flex-shrink-0 bg-[#f7be32]/5 border border-[#f7be32]/10 p-8 rounded-3xl backdrop-blur-sm relative group hover:bg-[#f7be32]/10 transition-colors">
            <Quote className="absolute top-6 right-6 text-[#f7be32]/20 w-12 h-12" />
            <div className="flex gap-1 mb-4" aria-label="5 stars">
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
