'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

type ThemeKey = 'blue' | 'orange' | 'green' | 'amber' | 'slate';
const THEMES: Record<ThemeKey, {
  logoGradient: string;
  linkHover: string;
  ctaBg: string;
  ctaBgHover: string;
}> = {
  blue:   { logoGradient: 'from-blue-600 to-blue-800',   linkHover: 'hover:text-blue-600',   ctaBg: 'bg-blue-600',   ctaBgHover: 'hover:bg-blue-700' },
  orange: { logoGradient: 'from-orange-500 to-orange-600', linkHover: 'hover:text-orange-600', ctaBg: 'bg-orange-500', ctaBgHover: 'hover:bg-orange-600' },
  green:  { logoGradient: 'from-green-600 to-green-700',   linkHover: 'hover:text-green-600',  ctaBg: 'bg-green-600',  ctaBgHover: 'hover:bg-green-700' },
  amber:  { logoGradient: 'from-amber-600 to-amber-700',   linkHover: 'hover:text-amber-600',  ctaBg: 'bg-amber-600',  ctaBgHover: 'hover:bg-amber-700' },
  slate:  { logoGradient: 'from-slate-700 to-slate-900',   linkHover: 'hover:text-slate-600',  ctaBg: 'bg-slate-700',  ctaBgHover: 'hover:bg-slate-800' },
};

interface BusinessHeaderProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessCategory?: string;
  theme?: ThemeKey;
}

export default function BusinessHeader({ 
  businessName, 
  businessPhone, 
  businessEmail, 
  businessWebsite,
  businessCategory,
  theme = 'blue'
}: BusinessHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = THEMES[theme];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Business Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${t.logoGradient} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">
                {businessName.charAt(0)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">{businessName}</span>
              {businessCategory && (
                <span className="text-xs text-gray-500">{businessCategory}</span>
              )}
            </div>
          </Link>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href={`tel:${businessPhone}`} className={`${t.linkHover} transition-colors`}>
                {businessPhone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${businessEmail}`} className={`${t.linkHover} transition-colors`}>
                Email Us
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className={`${t.linkHover} transition-colors`}>
                Website
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className={`${t.ctaBg} ${t.ctaBgHover} text-white shadow-lg`}
              asChild
            >
              <a href={`tel:${businessPhone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <a href={`tel:${businessPhone}`} className={`text-gray-700 ${t.linkHover} transition-colors`}>
                    {businessPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <a href={`mailto:${businessEmail}`} className={`text-gray-700 ${t.linkHover} transition-colors`}>
                    {businessEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className={`text-gray-700 ${t.linkHover} transition-colors`}>
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Button 
                size="sm" 
                className={`w-full ${t.ctaBg} ${t.ctaBgHover} text-white`}
                asChild
              >
                <a href={`tel:${businessPhone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
