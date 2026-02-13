'use client'

import React, { useState, useEffect } from 'react'

import LiveTicker from './LiveTicker'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300">
            <div className="w-full">
                <LiveTicker />
            </div>

            <div className={`w-full max-w-7xl mt-4 transition-all duration-300`}>
                <div className="flex items-center justify-between rounded-full bg-[#f7be32]/95 backdrop-blur-xl border border-black/5 shadow-2xl transition-all duration-300">
                    {/* Logo */}
                    <div className="flex items-center gap-3 pl-2">
                        <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-lg overflow-hidden shadow-sm">
                            <img src="/aj-locksmith/logo.png" alt="A&J Locksmith" className="object-contain w-full h-full" />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic transition-colors duration-300 text-black">
                            A&J <span className="text-[#660000]">LOCKSMITH</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Services', 'Emergency', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium transition-colors text-neutral-800 hover:text-[#660000]"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="tel:3168693892"
                            className="px-6 py-2 text-sm font-bold rounded-full transition-colors shadow-lg bg-black text-white hover:bg-[#660000]"
                        >
                            (316) 869-3892
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden pr-2">
                        <a
                            href="tel:3168693892"
                            className="px-4 py-2 text-sm font-bold rounded-lg bg-black text-white"
                        >
                            CALL
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
