'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Menu, X, Zap, MapPin, Mountain, TreePine } from 'lucide-react';
import { useState } from 'react';

interface HillViewHeaderProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessCategory?: string;
}

export default function HillViewHeader({ 
  businessName, 
  businessPhone, 
  businessEmail, 
  businessWebsite,
  businessCategory 
}: HillViewHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 backdrop-blur supports-[backdrop-filter]:bg-green-800/95 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Business Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">{businessName}</span>
              <div className="flex items-center space-x-1">
                <TreePine className="h-3 w-3 text-green-300" />
                <span className="text-xs text-green-200">Hill View Location</span>
              </div>
            </div>
          </Link>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-green-100">
              <Phone className="h-4 w-4 text-green-300" />
              <a href={`tel:${businessPhone}`} className="hover:text-green-300 transition-colors">
                {businessPhone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-green-100">
              <Mail className="h-4 w-4 text-green-300" />
              <a href={`mailto:${businessEmail}`} className="hover:text-green-300 transition-colors">
                Email Us
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-green-100">
              <Globe className="h-4 w-4 text-green-300" />
              <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                Website
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white shadow-lg font-semibold"
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
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-300/20 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-green-300" />
                  <a href={`tel:${businessPhone}`} className="text-green-100 hover:text-green-300 transition-colors">
                    {businessPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-green-300" />
                  <a href={`mailto:${businessEmail}`} className="text-green-100 hover:text-green-300 transition-colors">
                    {businessEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-green-300" />
                  <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-green-300 transition-colors">
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold"
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
