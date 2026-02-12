'use client'

import React, { useState, useEffect } from 'react'

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between rounded-full transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
                {/* Logo */}
                <div className="flex items-center gap-2 py-2">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                        🔑
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter uppercase italic">
                        A&J <span className="text-cyan-400">LOCKSMITH</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Emergency', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="tel:3168693892"
                        className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors"
                    >
                        (316) 869-3892
                    </a>
                </div>

                {/* Mobile Button - simplified for demo */}
                <div className="md:hidden">
                    <a
                        href="tel:3168693892"
                        className="px-4 py-2 bg-cyan-500 text-black text-sm font-bold rounded-lg"
                    >
                        CALL
                    </a>
                </div>
            </div>
        </nav>
    )
}
