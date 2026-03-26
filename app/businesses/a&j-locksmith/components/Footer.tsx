'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-[#f7be32] pt-20 pb-10 overflow-hidden border-t border-black/5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eeb018]/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 relative rounded-lg overflow-hidden shadow-sm">
                                <img src="/aj-locksmith/logo.png" alt="A&J Locksmith Wichita KS" className="object-contain w-full h-full" />
                            </div>
                            <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                                <span className="text-[#660000]">A&J</span> LOCKSMITH
                            </h2>
                        </div>
                        <p className="text-neutral-800 leading-relaxed font-medium">
                            Wichita's trusted 24/7 locksmith for residential, commercial, and automotive security. Serving Wichita, Derby, Andover, Maize, Goddard & Haysville since 2018.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:bg-black hover:text-[#f7be32] transition-all duration-300"
                                    aria-label="Social media"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-black font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-black block" /> Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-800 hover:text-[#660000] transition-colors flex items-center gap-2 group font-medium">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#660000]" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-black font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-black block" /> Services
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Residential Locksmith',
                                'Commercial Security',
                                'Automotive Keys',
                                'Emergency Lockouts',
                                'Roadside Assistance'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-800 hover:text-[#660000] transition-colors flex items-center gap-2 group font-medium">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#660000]" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-black font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-black block" /> Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 text-[#660000]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-neutral-800 text-sm mb-1 font-semibold">24/7 Emergency Line</p>
                                    <a href="tel:3168693892" className="text-black hover:text-[#660000] transition-colors font-bold">
                                        (316) 869-3892
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 text-[#660000]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-neutral-800 text-sm mb-1 font-semibold">Email Address</p>
                                    <a href="mailto:info@ajlocksmith.com" className="text-black hover:text-[#660000] transition-colors font-bold">
                                        info@ajlocksmith.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 text-[#660000]">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-neutral-800 text-sm mb-1 font-semibold">Service Area</p>
                                    <p className="text-black font-bold">
                                        Wichita, KS &amp; 60-Mile Radius
                                    </p>
                                    <p className="text-neutral-700 text-sm mt-1">Derby · Andover · Maize · Goddard · Haysville · Valley Center</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 text-[#660000]">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-neutral-800 text-sm mb-1 font-semibold">Hours</p>
                                    <p className="text-black font-bold">
                                        24 Hours / 7 Days a Week
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-800 text-sm text-center md:text-left font-medium">
                        © {currentYear} A &amp; J Mobile Locksmith — Wichita, KS. Licensed &amp; Insured. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-neutral-800 hover:text-black text-sm transition-colors font-medium">Privacy Policy</a>
                        <a href="#" className="text-neutral-800 hover:text-black text-sm transition-colors font-medium">Terms of Service</a>
                        <div className="flex items-center gap-2 text-[#660000] bg-black/5 px-3 py-1 rounded-full border border-black/5">
                            <ShieldCheck size={14} />
                            <span className="text-xs font-bold">Licensed &amp; Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
