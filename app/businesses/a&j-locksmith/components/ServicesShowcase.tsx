'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: 'Residential Locksmith',
        subtitle: 'Home Security Experts',
        description: 'Secure your home with high-security locks, rekeying, and smart lock installations. We handle everything from simple lock changes to complete home security overhauls.',
        features: ['Lock Installation & Repair', 'Rekeying Services', 'Home Lockouts', 'Security Upgrades'],
        icon: '🏠',
        keyColor: '#e0c9a6', // Gold
    },
    {
        title: 'Commercial Services',
        subtitle: 'Business-Grade Security',
        description: 'Complete security solutions for businesses, including master key systems, exit devices, and high-security commercial locks for offices and retail.',
        features: ['Master Key Systems', 'Access Control', 'Exit Device Installation', 'Safe Services'],
        icon: '🏢',
        keyColor: '#c0c0c0', // Silver
    },
    {
        title: 'Automotive Help',
        subtitle: 'All Makes & Models',
        description: 'Car lockout assistance, key replacement, key fob replacements, and ignition repair. We cover every vehicle brand with mobile service that comes to you.',
        features: ['Car Lockouts', 'Key Fob Replacements', 'Transponder Programming', 'Ignition Repair'],
        icon: '🚗',
        keyColor: '#b87333', // Copper
    },
    {
        title: 'Roadside Assistance',
        subtitle: 'More Than Just Locks',
        description: 'Stranded? Don\'t panic. We help with spare tires, battery jumps, and replacements to get you back on the road. Fast response across our 60-mile service area.',
        features: ['Spare Tires', 'Battery Jumps', 'Battery Replacements', 'Car Lockouts'],
        icon: '🚨',
        keyColor: '#ff6b6b', // Red
    },
    {
        title: 'Smart Lock Setup',
        subtitle: 'Future-Proof Security',
        description: 'Upgrade to keyless entry. We install and configure the latest smart home security systems, from fingerprint locks to app-controlled deadbolts.',
        features: ['Keyless Entry Systems', 'App-Controlled Locks', 'Fingerprint Readers', 'Integration Setup'],
        icon: '🔑',
        keyColor: '#6ba3ff', // Blue-steel
    },
]

interface ServicesShowcaseProps {
    onServiceChange?: (index: number, color: string) => void
    onExitToWhyChooseUs?: () => void
    onReturnToHero?: () => void
}

export default function ServicesShowcase({ onServiceChange, onExitToWhyChooseUs, onReturnToHero }: ServicesShowcaseProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<(HTMLDivElement | null)[]>([])
    const progressDotsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            const totalSlides = services.length

            // Pin the section for the duration of all slides
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: `+=${totalSlides * 100}%`,
                    pin: true,
                    scrub: 0.8,
                    onUpdate: (self) => {
                        const progress = self.progress
                        const rawIndex = progress * totalSlides
                        const activeIndex = Math.min(Math.floor(rawIndex), totalSlides - 1)

                        // Update active dot
                        progressDotsRef.current.forEach((dot, i) => {
                            if (!dot) return
                            if (i === activeIndex) {
                                dot.classList.add('bg-[#f7be32]', 'scale-125')
                                dot.classList.remove('bg-white/30')
                            } else {
                                dot.classList.remove('bg-[#f7be32]', 'scale-125')
                                dot.classList.add('bg-white/30')
                            }
                        })

                        // Notify parent of service change
                        onServiceChange?.(activeIndex, services[activeIndex].keyColor)
                    },
                    onLeaveBack: () => {
                        onReturnToHero?.()
                    },
                },
            })

            // Animate each slide transition
            slidesRef.current.forEach((slide, i) => {
                if (!slide || i === 0) return // first slide starts visible

                const prevSlide = slidesRef.current[i - 1]
                if (!prevSlide) return

                // Exit previous slide
                tl.to(prevSlide, {
                    opacity: 0,
                    y: -40,
                    duration: 0.3,
                    ease: 'power2.in',
                })

                // Enter current slide
                tl.fromTo(slide,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
                )

                // Hold for reading time
                tl.to(slide, { duration: 0.4 })
            })

            // At the very end, signal transition to Why Choose Us
            tl.call(() => {
                onExitToWhyChooseUs?.()
            })

        }, containerRef)

        return () => ctx.revert()
    }, [onServiceChange, onExitToWhyChooseUs])

    return (
        <section
            ref={containerRef}
            id="services-showcase"
            className="relative z-10 h-screen"
        >
            {/* Section Title */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none">
                <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-2">Our Expertise</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Comprehensive <span className="text-[#f7be32]">Solutions</span>
                </h2>
            </div>

            {/* Progress Dots */}
            <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                {services.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => { progressDotsRef.current[i] = el }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#f7be32] scale-125' : 'bg-white/30'}`}
                    />
                ))}
            </div>

            {/* Slides */}
            {services.map((service, i) => (
                <div
                    key={i}
                    ref={(el) => { slidesRef.current[i] = el }}
                    className={`absolute inset-0 flex items-center px-6 md:px-16 lg:px-24 ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left: Icon + Title */}
                        <div className="text-left md:text-right space-y-4">
                            <div className="text-6xl md:text-7xl md:text-right">{service.icon}</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-[#f7be32] font-medium text-lg tracking-wide">
                                {service.subtitle}
                            </p>
                        </div>

                        {/* Center: Empty space for 3D key (rendered by Scene behind) */}
                        <div className="hidden md:block" />

                        {/* Right: Description + Features */}
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-gray-200">
                                        <span className="w-2 h-2 bg-[#f7be32] rounded-full flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
