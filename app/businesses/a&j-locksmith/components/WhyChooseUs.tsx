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
                        Why Residents <span className="text-cyan-400">Trust Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => { itemsRef.current[index] = el }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl backdrop-blur-sm">
                                {feature.icon}
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
            </div>
        </section>
    )
}
