import Link from 'next/link';
import OptimizedImage from '@/components/ui/optimized-image';
import { Phone, Mail, Globe, MapPin, Clock, Star } from 'lucide-react';

type ThemeKey = 'blue' | 'orange' | 'green' | 'amber' | 'slate';
const THEMES: Record<ThemeKey, {
  logoGradient: string;
  linkHover: string;
}> = {
  blue:   { logoGradient: 'from-blue-600 to-blue-800',     linkHover: 'hover:text-white' },
  orange: { logoGradient: 'from-orange-500 to-orange-600', linkHover: 'hover:text-orange-300' },
  green:  { logoGradient: 'from-green-600 to-green-700',   linkHover: 'hover:text-green-300' },
  amber:  { logoGradient: 'from-amber-600 to-amber-700',   linkHover: 'hover:text-amber-300' },
  slate:  { logoGradient: 'from-slate-700 to-slate-900',   linkHover: 'hover:text-slate-200' },
};

interface LocationPage {
  name: string;
  href: string;
}

interface BusinessFooterProps {
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
  locationPages?: LocationPage[];
  theme?: ThemeKey;
  layout?: 'classic' | 'centered' | 'split';
  topStripe?: boolean;
  logoShape?: 'rounded' | 'circle';
  ctaBanner?: {
    title: string;
    subtitle?: string;
    buttonText: string;
  };
}

export default function BusinessFooter({
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
  locationPages = [],
  theme = 'blue',
  layout = 'classic',
  topStripe = false,
  logoShape = 'rounded',
  ctaBanner
}: BusinessFooterProps) {
  const t = THEMES[theme];
  
  // Function to get URL for a service area
  const getServiceAreaUrl = (area: string): string | null => {
    // Create a map from locationPages if provided
    const areaMap = new Map<string, string>();
    locationPages.forEach(loc => {
      // Map variations of area names
      const areaName = loc.name.toLowerCase();
      if (areaName.includes('albuquerque')) {
        areaMap.set('albuquerque', loc.href);
        areaMap.set('albuquerque, nm', loc.href);
      } else if (areaName.includes('edgewood')) {
        areaMap.set('edgewood', loc.href);
        areaMap.set('edgewood, nm', loc.href);
      } else if (areaName.includes('los lunas')) {
        areaMap.set('los lunas', loc.href);
        areaMap.set('los lunas, nm', loc.href);
      } else if (areaName.includes('rio rancho')) {
        areaMap.set('rio rancho', loc.href);
        areaMap.set('rio rancho, nm', loc.href);
      } else if (areaName.includes('santa fe')) {
        areaMap.set('santa fe', loc.href);
        areaMap.set('santa fe, nm', loc.href);
      }
    });
    
    const areaKey = area.toLowerCase();
    return areaMap.get(areaKey) || null;
  };
  return (
    <footer className="bg-gray-900 text-white">
      {topStripe && (
        <div className={`h-1 w-full bg-gradient-to-r ${t.logoGradient}`} />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {ctaBanner && (
          <div className={`mb-10 rounded-2xl p-8 text-center text-white bg-gradient-to-r ${t.logoGradient}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{ctaBanner.title}</h2>
            {ctaBanner.subtitle && (
              <p className="text-sm sm:text-base opacity-90 mb-4">{ctaBanner.subtitle}</p>
            )}
            <a href={`tel:${businessPhone}`} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/90 text-gray-900 font-semibold hover:bg-white transition-colors">
              {ctaBanner.buttonText}
            </a>
          </div>
        )}
        <div className={`${layout === 'centered' ? 'grid grid-cols-1 gap-10 text-center' : layout === 'split' ? 'grid grid-cols-1 lg:grid-cols-3 gap-8' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}`}>
          {/* Business Info */}
          <div className={`space-y-4 ${layout === 'centered' ? 'mx-auto' : ''}`}>
            <div className={`flex items-center ${layout === 'centered' ? 'justify-center' : ''} space-x-3`}>
              <div className={`w-10 h-10 bg-gradient-to-br ${t.logoGradient} ${logoShape === 'circle' ? 'rounded-full' : 'rounded-lg'} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">
                  {businessName.charAt(0)}
                </span>
              </div>
              <span className="text-xl font-bold">{businessName}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional services with a commitment to quality and customer satisfaction.
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
          <div className={`${layout === 'centered' ? 'mx-auto' : ''}`}>
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
            <div className={`${layout === 'centered' ? 'mx-auto' : ''}`}>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, index) => {
                  const areaUrl = getServiceAreaUrl(area);
                  return (
                    <li key={index} className="relative z-10">
                      {areaUrl ? (
                        <Link 
                          href={areaUrl} 
                          className={`text-gray-400 ${t.linkHover} transition-colors relative z-10`}
                        >
                          {area}
                        </Link>
                      ) : (
                        <span className="text-gray-400">{area}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Quick Links */}
          <div className={`${layout === 'centered' ? 'mx-auto' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            {layout === 'split' ? (
              <div className={`rounded-xl p-6 bg-gradient-to-br ${t.logoGradient} text-white`}> 
                <p className="text-sm opacity-90 mb-3">Speak with our team</p>
                <a href={`tel:${businessPhone}`} className="inline-flex items-center px-4 py-2 rounded-md bg-white/90 text-gray-900 font-medium hover:bg-white transition-colors">Call Now</a>
              </div>
            ) : (
              <ul className={`space-y-2 text-sm ${layout === 'centered' ? 'inline-block text-left' : ''}`}>
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
            )}
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
