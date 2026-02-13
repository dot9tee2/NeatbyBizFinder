'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactForm() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 md:px-20 relative z-10"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Request a <span className="text-[#f7be32]">Quote</span>
                    </h2>
                    <p className="text-gray-400">
                        Non-emergency? Send us a message. We cover a 60-mile radius around the city.
                    </p>
                </div>

                <form
                    ref={formRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md shadow-2xl"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#f7be32] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#f7be32] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Service Needed</label>
                        <select className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#f7be32] transition-colors appearance-none">
                            <option className="bg-slate-900">Residential Lockout</option>
                            <option className="bg-slate-900">Commercial Service</option>
                            <option className="bg-slate-900">Auto Key Replacement</option>
                            <option className="bg-slate-900">Safe Opening</option>
                            <option className="bg-slate-900">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about your locksmith needs..."
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#f7be32] transition-colors resize-none"
                        />
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <button className="w-full py-5 bg-[#f7be32] hover:bg-[#d9a528] text-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(247,190,50,0.3)]">
                            SEND REQUEST
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
