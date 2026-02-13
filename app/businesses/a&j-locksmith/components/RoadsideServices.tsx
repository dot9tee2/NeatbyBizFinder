'use client'

import React, { useRef, useEffect } from 'react'
import { Car, Battery, Zap, Key, Lock, ShieldCheck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roadsideServices = [
    {
        icon: <Car className="w-10 h-10 text-[#f7be32]" />,
        title: 'Spare Tire Install',
        description: 'Flat tire? We’ll come to your location and install your spare tire quickly and safely to get you back on the road.',
    },
    {
        icon: <Battery className="w-10 h-10 text-[#f7be32]" />,
        title: 'Battery Jump Start',
        description: 'Dead battery? We provide professional jump starts for all vehicle makes and models. No need to wait for a tow.',
    },
    {
        icon: <Zap className="w-10 h-10 text-[#f7be32]" />,
        title: 'Battery Replacement',
        description: 'If your battery is beyond saving, we can deliver and install a fresh, high-quality new battery on the spot.',
    },
    {
        icon: <Lock className="w-10 h-10 text-[#f7be32]" />,
        title: 'Car Lockouts',
        description: 'Locked your keys inside? Our non-destructive entry methods will get you back in your vehicle without damage.',
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-[#f7be32]" />,
        title: 'Key Fob Replacement',
        description: 'Lost or broken fob? We program and cut new key fobs for most vehicles on-site, often cheaper than the dealership.',
    },
]

export default function RoadsideServices() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.roadside-card') as HTMLElement[]

            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 bg-[#080a0e] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#660000]/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-3">Emergency Services</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Roadside <span className="text-[#f7be32]">Assistance</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We don't just handle locks. Our mobile units are equipped to handle common roadside emergencies to get you moving again.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roadsideServices.map((service, index) => (
                        <div
                            key={index}
                            className="roadside-card group p-8 rounded-2xl bg-[#f7be32]/5 border border-[#f7be32]/20 hover:border-[#f7be32] hover:bg-[#f7be32]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(247,190,50,0.1)]"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-[#f7be32]/10 w-fit group-hover:bg-[#f7be32]/20 transition-colors shadow-[0_0_15px_rgba(247,190,50,0.1)]">
                                {/* We need to clone the React element to change the color in the icon prop, but here it's hardcoded in the array above. 
                                    Since we can't easily change the array definition in this block without replacing the whole file,
                                    we will assume the icon's color is controlled by parent text color if using currentColor, 
                                    OR we have to replace the array definition too. 
                                    
                                    The array definition uses `text-cyan-400`. I should replace that too.
                                */}
                                {React.cloneElement(service.icon as any, { className: 'w-10 h-10 text-[#f7be32] drop-shadow-[0_0_8px_rgba(247,190,50,0.5)]' })}
                            </div>
                            <h3 className="text-xl font-bold text-[#f7be32] mb-3 group-hover:text-[#ffda7c] transition-colors">
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
