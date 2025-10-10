'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import NMConcreteLogo from './nm-concrete-logo';

interface NMConcreteHeaderProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessCategory?: string;
}

export default function NMConcreteHeader({ 
  businessName, 
  businessPhone, 
  businessEmail, 
  businessWebsite,
  businessCategory 
}: NMConcreteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Business Logo and Name */}
          <Link href="/" className="flex items-center">
            <NMConcreteLogo 
              variant="header" 
              width={40} 
              height={40} 
              showText={true}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href={`tel:${businessPhone}`} className="hover:text-orange-600 transition-colors">
                {businessPhone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${businessEmail}`} className="hover:text-orange-600 transition-colors">
                Email Us
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                Website
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
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
                  <a href={`tel:${businessPhone}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                    {businessPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <a href={`mailto:${businessEmail}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                    {businessEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-orange-600 transition-colors">
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Button 
                size="sm" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
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
