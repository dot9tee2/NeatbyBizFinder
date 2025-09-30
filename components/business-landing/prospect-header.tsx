'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, Menu, X, Zap, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';

interface ProspectHeaderProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessCategory?: string;
}

export default function ProspectHeader({ 
  businessName, 
  businessPhone, 
  businessEmail, 
  businessWebsite,
  businessCategory 
}: ProspectHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Business Logo and Name */}
          <Link href="/businesses/superior-electric-service/prospect/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">{businessName}</span>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-cyan-500" />
                <span className="text-xs text-cyan-600 font-medium">Prospect Location</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              <Link href="/businesses/superior-electric-service/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Louisville
              </Link>
              <Link href="/businesses/superior-electric-service/prospect/" className="text-gray-900 hover:text-cyan-600 transition-colors font-medium">
                Prospect
              </Link>
              <Link href="/businesses/superior-electric-service/hill-view/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Hill View
              </Link>
            </nav>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-cyan-500" />
              <a href={`tel:${businessPhone}`} className="hover:text-cyan-600 transition-colors font-medium">
                {businessPhone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-cyan-500" />
              <a href={`mailto:${businessEmail}`} className="hover:text-cyan-600 transition-colors font-medium">
                Email Us
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="h-4 w-4 text-cyan-500" />
              <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors font-medium">
                Website
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg font-semibold rounded-full"
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
            className="md:hidden text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-3 pb-4 border-b border-gray-200">
                <Link href="/businesses/superior-electric-service/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Louisville Main
                </Link>
                <Link href="/businesses/superior-electric-service/prospect/" className="text-gray-900 hover:text-cyan-600 transition-colors font-medium">
                  Prospect Location
                </Link>
                <Link href="/businesses/superior-electric-service/hill-view/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Hill View Location
                </Link>
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-cyan-500" />
                  <a href={`tel:${businessPhone}`} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                    {businessPhone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-cyan-500" />
                  <a href={`mailto:${businessEmail}`} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                    {businessEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-cyan-500" />
                  <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-full"
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
