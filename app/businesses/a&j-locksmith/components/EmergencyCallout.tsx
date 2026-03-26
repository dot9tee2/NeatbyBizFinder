'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function EmergencyCallout() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="emergency"
            ref={sectionRef}
            className="py-20 px-6 relative z-10"
            aria-label="Emergency locksmith services Wichita KS"
        >
            <div
                ref={contentRef}
                className="max-w-5xl mx-auto bg-gradient-to-br from-[#660000] to-black rounded-[3rem] p-12 text-center shadow-[0_20px_50px_rgba(247,190,50,0.3)] border border-[#f7be32]/30 overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <h2 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-4">
                    Stranded in Wichita? Don't Panic.
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    24/7 Emergency <br className="hidden md:block" /> Lockout Services
                </h3>
                <p className="text-yellow-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                    Our Wichita technicians are stationed across the city and surrounding areas —
                    Derby, Andover, Maize &amp; Goddard included. Average arrival is just{' '}
                    <span className="font-bold underline">15–20 minutes</span>.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="tel:3168693892"
                        className="text-3xl md:text-4xl font-black text-white hover:text-[#f7be32] transition-colors"
                        aria-label="Call A&J Locksmith Wichita"
                    >
                        (316) 869-3892
                    </a>
                    <span className="hidden md:block text-white/30 text-4xl">|</span>
                    <p className="text-white font-medium">Licensed, Bonded &amp; Insured — Wichita, KS</p>
                </div>
            </div>
        </section>
    )
}
