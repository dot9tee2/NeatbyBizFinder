'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.set([titleRef.current, subRef.current, badgeRef.current, ctaRef.current], { opacity: 0 })

            tl.to(titleRef.current, {
                y: 0, opacity: 1, duration: 1, ease: 'power4.out', clearProps: 'all'
            })
                .from(subRef.current, {
                    y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
                }, '-=0.6')
                .from(badgeRef.current, {
                    y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all'
                }, '-=0.4')
                .from(ctaRef.current, {
                    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
                }, '-=0.4')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="hero-section"
            className="h-screen flex flex-col items-start justify-center text-left px-6 md:px-24 relative z-10 pointer-events-none"
            aria-label="A&J Locksmith — 24/7 emergency locksmith Wichita KS"
        >
            <div className="max-w-2xl pointer-events-auto mt-32 md:mt-40">
                {/* Trust badge */}
                <div
                    ref={badgeRef}
                    className="inline-flex items-center gap-2 bg-[#f7be32]/10 border border-[#f7be32]/30 rounded-full px-4 py-2 mb-6"
                >
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[#f7be32] text-sm font-bold tracking-wider uppercase">
                        Wichita's #1 24/7 Locksmith · Est. 2018
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-[#fff9e6] mb-6 uppercase"
                >
                    Locked Out? <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7be32] to-[#660000]">
                        We're on the way.
                    </span>
                </h1>
                <p
                    ref={subRef}
                    className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
                >
                    Wichita's fastest emergency locksmith — averaging just{' '}
                    <span className="text-[#f7be32] font-semibold">14 minutes</span> from call to arrival.
                    Serving Wichita, Derby, Andover, Maize &amp; beyond.
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row gap-4 justify-start items-center mt-8"
                >
                    <a
                        href="tel:3168693892"
                        className="px-8 py-4 bg-[#f7be32] hover:bg-[#d9a528] text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(247,190,50,0.4)]"
                        aria-label="Call A&J Locksmith Wichita 24/7"
                    >
                        CALL (316) 869-3892
                    </a>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        OUR SERVICES
                    </button>
                </div>
            </div>
        </section>
    )
}
