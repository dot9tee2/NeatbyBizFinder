'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-[#05070a] pt-20 pb-10 overflow-hidden border-t border-white/10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-cyan-400">A&J</span> LOCKSMITH
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted partner for residential, commercial, and automotive security. Available 24/7 for all your emergency needs.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-cyan-400 block" /> Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-400" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-cyan-400 block" /> Services
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
                                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-400" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-cyan-400 block" /> Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                                    <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors font-medium">
                                        (555) 123-4567
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Email Address</p>
                                    <a href="mailto:info@ajlocksmith.com" className="text-white hover:text-cyan-400 transition-colors font-medium">
                                        info@ajlocksmith.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Service Area</p>
                                    <p className="text-white font-medium">
                                        Greater Metro Area (60-mile radius)
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Hours</p>
                                    <p className="text-white font-medium">
                                        24 Hours / 7 Days a Week
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} A & J Mobile Locksmith. Licensed & Insured. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                        <div className="flex items-center gap-2 text-cyan-400/80 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-900/50">
                            <ShieldCheck size={14} />
                            <span className="text-xs font-medium">Verified Business</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
