'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.set([titleRef.current, subRef.current, ctaRef.current], { opacity: 0 })

            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
                clearProps: 'all'
            })
                .from(subRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'all'
                }, '-=0.6')
                .from(ctaRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'all'
                }, '-=0.4')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="hero-section"
            className="h-screen flex flex-col items-start justify-center text-left px-6 md:px-24 relative z-10 pointer-events-none"
        >
            <div className="max-w-2xl pointer-events-auto">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 uppercase"
                >
                    Locked Out? <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        We're on the way.
                    </span>
                </h1>
                <p
                    ref={subRef}
                    className="text-xl md:text-2xl text-gray-300 mb-10 font-light"
                >
                    Serving the community within a 60-mile radius.
                    Emergency response within 20 minutes.
                </p>
                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row gap-4 justify-start items-center"
                >
                    <a
                        href="tel:3168693892"
                        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                        CALL (316) 869-3892
                    </a>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                        OUR SERVICES
                    </button>
                </div>
            </div>
        </section>
    )
}
