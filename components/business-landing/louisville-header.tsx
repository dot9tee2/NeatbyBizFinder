'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Menu, X, Zap, MapPin } from 'lucide-react';
import { useState } from 'react';

interface LouisvilleHeaderProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessCategory?: string;
}

export default function LouisvilleHeader({ 
  businessName, 
  businessPhone, 
  businessEmail, 
  businessWebsite,
  businessCategory 
}: LouisvilleHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 backdrop-blur supports-[backdrop-filter]:bg-gray-900/95 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Business Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-gray-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">{businessName}</span>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-yellow-300">Louisville Main</span>
              </div>
            </div>
          </Link>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4 text-yellow-400" />
              <a href={`tel:${businessPhone}`} className="hover:text-yellow-400 transition-colors">
                {businessPhone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4 text-yellow-400" />
              <a href={`mailto:${businessEmail}`} className="hover:text-yellow-400 transition-colors">
                Email Us
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe className="h-4 w-4 text-yellow-400" />
              <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                Website
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-lg font-semibold"
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
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  <a href={`tel:${businessPhone}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {businessPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <a href={`mailto:${businessEmail}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {businessEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-yellow-400" />
                  <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold"
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
