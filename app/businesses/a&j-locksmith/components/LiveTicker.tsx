'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LiveTicker() {
    const tickerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const content = tickerRef.current?.firstElementChild
            if (!content) return

            // Clone content for seamless loop
            const clone = content.cloneNode(true)
            tickerRef.current?.appendChild(clone)

            const totalWidth = content.scrollWidth

            gsap.to(tickerRef.current, {
                x: -totalWidth,
                duration: 20,
                ease: 'none',
                repeat: -1
            })
        }, tickerRef)

        return () => ctx.revert()
    }, [])

    const items = [
        "⚡ Current Avg Response: 14 Mins",
        "👨‍🔧 Technician Active in Wichita",
        "🔐 24/7 Emergency Support Online",
        "🚗 Roadside Assistance Available Now",
        "⭐  Check our 5-Star Reviews!"
    ]

    return (
        <div className="bg-black text-[#f7be32] py-2 overflow-hidden border-b border-[#f7be32]/20 relative z-[60]">
            <div ref={tickerRef} className="flex whitespace-nowrap w-fit">
                <div className="flex gap-12 px-6">
                    {items.map((item, index) => (
                        <span key={index} className="text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
