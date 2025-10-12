import Link from 'next/link';
import OptimizedImage from '@/components/ui/optimized-image';
import { Phone, Mail, Globe, MapPin, Clock, Star } from 'lucide-react';

type ThemeKey = 'orange' | 'amber' | 'green' | 'blue' | 'slate';
const THEMES: Record<ThemeKey, {
  linkHover: string;
  gradient: string;
  ctaBtn: string;
  ctaBtnHover: string;
}> = {
  orange: { linkHover: 'hover:text-orange-400', gradient: 'from-orange-600 to-orange-500', ctaBtn: 'bg-white text-orange-600', ctaBtnHover: 'hover:bg-gray-100' },
  amber:  { linkHover: 'hover:text-amber-400',  gradient: 'from-amber-600 to-amber-500',   ctaBtn: 'bg-white text-amber-600',  ctaBtnHover: 'hover:bg-gray-100' },
  green:  { linkHover: 'hover:text-green-400',  gradient: 'from-green-600 to-green-500',   ctaBtn: 'bg-white text-green-600',  ctaBtnHover: 'hover:bg-gray-100' },
  blue:   { linkHover: 'hover:text-blue-400',   gradient: 'from-blue-600 to-blue-500',     ctaBtn: 'bg-white text-blue-600',   ctaBtnHover: 'hover:bg-gray-100' },
  slate:  { linkHover: 'hover:text-slate-300',  gradient: 'from-slate-700 to-slate-600',   ctaBtn: 'bg-white text-slate-800',  ctaBtnHover: 'hover:bg-gray-100' },
};
import NMConcreteLogo from './nm-concrete-logo';

interface NMConcreteFooterProps {
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessAddress?: string;
  businessCity?: string;
  businessState?: string;
  businessZipCode?: string;
  businessHours?: string;
  businessRating?: number;
  businessReviewCount?: number;
  serviceAreas?: string[];
  theme?: ThemeKey;
  topStripe?: boolean;
  ctaBanner?: {
    title: string;
    subtitle?: string;
    buttonText: string;
  };
}

export default function NMConcreteFooter({
  businessName,
  businessPhone,
  businessEmail,
  businessWebsite,
  businessAddress,
  businessCity,
  businessState,
  businessZipCode,
  businessHours,
  businessRating,
  businessReviewCount,
  serviceAreas = [],
  theme = 'orange',
  topStripe = false,
  ctaBanner
}: NMConcreteFooterProps) {
  const t = THEMES[theme];
  return (
    <footer className="bg-gray-900 text-white">
      {topStripe && (
        <div className={`h-1 w-full bg-gradient-to-r ${t.gradient}`} />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {ctaBanner && (
          <div className={`mb-10 rounded-2xl p-8 text-center text-white bg-gradient-to-r ${t.gradient}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{ctaBanner.title}</h2>
            {ctaBanner.subtitle && (
              <p className="text-sm sm:text-base opacity-90 mb-4">{ctaBanner.subtitle}</p>
            )}
            <a href={`tel:${businessPhone}`} className={`inline-flex items-center justify-center px-5 py-3 rounded-lg ${t.ctaBtn} ${t.ctaBtnHover} font-semibold transition-colors`}>
              {ctaBanner.buttonText}
            </a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <NMConcreteLogo 
              variant="footer" 
              width={50} 
              height={50} 
              showText={true}
              className="text-white"
            />
            <p className="text-gray-400 text-sm">
              Professional concrete coating services with over a decade of experience serving Albuquerque and surrounding areas.
            </p>
            {businessRating && businessReviewCount && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  {businessRating} ({businessReviewCount} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href={`tel:${businessPhone}`} className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  {businessPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href={`mailto:${businessEmail}`} className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  {businessEmail}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-gray-400" />
                <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  Visit Our Website
                </a>
              </li>
              {businessAddress && (
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                  <span className="text-gray-400">
                    {businessAddress}<br />
                    {businessCity}, {businessState} {businessZipCode}
                  </span>
                </li>
              )}
              {businessHours && (
                <li className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">{businessHours}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Service Areas */}
          {serviceAreas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-gray-400">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  NearbyBizFinder Home
                </Link>
              </li>
              <li>
                <Link href="/search/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link href="/categories/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <OptimizedImage
              src="/logo.png"
              alt="NearbyBizFinder logo"
              width={24}
              height={24}
              className="h-6 w-6"
              quality={90}
            />
            <p className="text-gray-400 text-sm">
              Powered by NearbyBizFinder
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
              Privacy Policy
            </Link>
            <Link href="/terms/" className={`text-gray-400 ${t.linkHover} transition-colors`}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
