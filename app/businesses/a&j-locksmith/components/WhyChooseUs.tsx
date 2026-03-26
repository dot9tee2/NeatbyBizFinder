'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        title: 'Master Technicians',
        description: 'Serving Wichita since 2018. Our certified technicians handle everything from emergency lockouts to high-security commercial systems — background-checked and fully trained.',
        icon: '👨‍🔧'
    },
    {
        title: 'Upfront Pricing',
        description: 'No bait-and-switch. No surprise bills. We give you a clear quote before any work starts. What we say is what you pay — guaranteed.',
        icon: '💰'
    },
    {
        title: 'Licensed & Insured',
        description: 'Fully licensed, bonded, and insured to operate in Kansas. Covering Wichita and a 60-mile radius — including Derby, Andover, Maize, and Goddard.',
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
                scrollTrigger: { trigger: titleRef.current, start: 'top 90%' },
                y: 30, opacity: 0, duration: 1, ease: 'power3.out'
            })

            itemsRef.current.forEach((item, index) => {
                if (!item) return
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: 'top 90%' },
                    x: index % 2 === 0 ? -50 : 50,
                    opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out'
                })
            })

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
            id="about"
            className="py-24 px-6 md:px-20 relative z-10"
            aria-label="Why choose A&J Locksmith in Wichita KS"
        >
            <div className="max-w-6xl mx-auto">
                <div ref={titleRef} className="text-center mb-20">
                    <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-3">Why Wichita Chooses Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Wichita's Most <span className="text-[#f7be32]">Trusted Locksmith</span>
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
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats — animated counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
                    {[
                        { value: 500, suffix: '+', label: 'Unlocks This Year' },
                        { value: 14, suffix: 'm', label: 'Avg Arrival Time' },
                        { value: 24, suffix: '/7', label: 'Availability' },
                        { value: 100, suffix: '%', label: 'Satisfaction' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-[#f7be32] mb-2 flex justify-center items-baseline">
                                <span className="stat-value" data-value={stat.value}>0</span>
                                <span>{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
