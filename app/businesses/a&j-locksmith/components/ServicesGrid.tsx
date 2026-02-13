'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: 'Residential Locksmith',
        description: 'Secure your home with high-security locks, rekeying, and smart lock installations.',
        icon: '🏠'
    },
    {
        title: 'Commercial Services',
        description: 'Complete security solutions for businesses, including master key systems and exit devices.',
        icon: '🏢'
    },
    {
        title: 'Automotive Help',
        description: 'Car lockout assistance, key replacement, and ignition repair for all makes and models.',
        icon: '🚗'
    },
    {
        title: 'Emergency Response',
        description: '24/7 lockout service. We promise a fast arrival to get you back inside safely.',
        icon: '🚨'
    },
    {
        title: 'Smart Lock Setup',
        description: 'Upgrade to keyless entry. We install and configure the latest smart home security.',
        icon: '🔑'
    },
    {
        title: 'Security Audits',
        description: 'Comprehensive evaluation of your property to identify and fix security vulnerabilities.',
        icon: '🛡️'
    }
]

export default function ServicesGrid() {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return

                // Initial state
                gsap.set(card, { y: 60, opacity: 0 })

                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: (index % 3) * 0.1,
                    ease: 'power3.out',
                    clearProps: 'transform,opacity'
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="services"
            ref={containerRef}
            className="py-24 px-6 md:px-20 relative z-10"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Comprehensive <span className="text-[#f7be32]">Security Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        From emergency lockouts to complex master key systems, our expert team
                        is equipped to handle any challenge with precision and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => { cardsRef.current[index] = el }}
                            className="group p-8 rounded-3xl bg-[#f7be32]/5 border border-[#f7be32]/20 backdrop-blur-sm hover:bg-[#f7be32]/10 hover:border-[#f7be32] hover:shadow-[0_0_30px_rgba(247,190,50,0.15)] transition-all duration-500"
                        >
                            <div className="text-4xl mb-6 text-[#f7be32] group-hover:scale-110 group-hover:text-[#ffda7c] transition-all duration-500 origin-left drop-shadow-[0_0_10px_rgba(247,190,50,0.3)]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f7be32] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
