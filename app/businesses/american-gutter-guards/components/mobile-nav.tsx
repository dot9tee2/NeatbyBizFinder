'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
    businessName: string;
    phoneE164: string;
    phone: string;
}

export default function MobileNav({ businessName, phoneE164, phone }: MobileNavProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
            >
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-slate-800">
                    <nav className="flex flex-col space-y-4">
                        <a href="#home" className="text-slate-200 hover:text-emerald-400 transition-colors">Home</a>
                        <a href="#problem" className="text-slate-200 hover:text-emerald-400 transition-colors">Problem</a>
                        <a href="#services" className="text-slate-200 hover:text-emerald-400 transition-colors">Services</a>
                        <a href="#about" className="text-slate-200 hover:text-emerald-400 transition-colors">Why Us</a>
                        <a href="#pricing" className="text-slate-200 hover:text-emerald-400 transition-colors">Pricing</a>
                        <a href="#service-areas" className="text-slate-200 hover:text-emerald-400 transition-colors">Areas</a>
                        <a href="#contact" className="text-slate-200 hover:text-emerald-400 transition-colors">Contact</a>
                        <div className="flex flex-col space-y-2 pt-4">
                            <Button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                asChild
                            >
                                <a href={`tel:${phoneE164}`}>
                                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Book Now
                                </a>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
