'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        title: 'Master Technicians',
        description: 'Serving you since 2018 with expertise in high-security systems and emergency lockouts.',
        icon: '👨‍🔧'
    },
    {
        title: 'Transparent Pricing',
        description: 'No hidden fees. We provide clear, upfront estimates before any work begins.',
        icon: '💰'
    },
    {
        title: 'Fully Licensed',
        description: 'Peace of mind guaranteed. We are a fully licensed, bonded, and insured local business covering a 60-mile radius.',
        icon: '📜'
    }
]

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const itemsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 90%'
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            itemsRef.current.forEach((item, index) => {
                if (!item) return
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%'
                    },
                    x: index % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out'
                })
            })

            // Animate Stats
            const stats = sectionRef.current?.querySelectorAll('.stat-value')
            stats?.forEach((stat) => {
                const value = parseInt(stat.getAttribute('data-value') || '0')
                gsap.to(stat, {
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    },
                    innerText: value,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: 'power1.out'
                })
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 md:px-20 relative z-10"
        >
            <div className="max-w-6xl mx-auto">
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Residents <span className="text-[#f7be32]">Trust Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#f7be32] mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => { itemsRef.current[index] = el }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-[#f7be32]/10 border border-[#f7be32]/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-[0_0_20px_rgba(247,190,50,0.15)] backdrop-blur-sm">
                                <span className="drop-shadow-[0_0_8px_rgba(247,190,50,0.5)]">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
                    {[
                        { value: 500, suffix: '+', label: 'Unlocks This Year' },
                        { value: 15, suffix: 'm', label: 'Avg Arrival Time' },
                        { value: 24, suffix: '/7', label: 'Availability' },
                        { value: 100, suffix: '%', label: 'Satisfaction' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-[#f7be32] mb-2 flex justify-center items-center">
                                <span className="stat-value" data-value={stat.value}>0</span>{stat.suffix}
                            </div>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
