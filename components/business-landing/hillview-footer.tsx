import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Clock, Star, Mountain, TreePine } from 'lucide-react';

interface HillViewFooterProps {
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
}

export default function HillViewFooter({
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
  serviceAreas = []
}: HillViewFooterProps) {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-emerald-700 to-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">{businessName}</span>
                <p className="text-green-200 text-sm font-medium">Hill View Location</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Specialized rural electrical services for Hill View and surrounding agricultural areas. 
              Expert in off-grid systems, farm electrical, and rural installations.
            </p>
            {businessRating && businessReviewCount && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-green-100">
                  {businessRating} ({businessReviewCount} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-300" />
                <a href={`tel:${businessPhone}`} className="text-green-100 hover:text-green-300 transition-colors">
                  {businessPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-300" />
                <a href={`mailto:${businessEmail}`} className="text-green-100 hover:text-green-300 transition-colors">
                  {businessEmail}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-green-300" />
                <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-green-300 transition-colors">
                  Visit Our Website
                </a>
              </li>
              {businessAddress && (
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-green-300 mt-1" />
                  <span className="text-green-100">
                    {businessAddress}<br />
                    {businessCity}, {businessState} {businessZipCode}
                  </span>
                </li>
              )}
              {businessHours && (
                <li className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-green-300" />
                  <span className="text-green-100">{businessHours}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Service Areas */}
          {serviceAreas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-green-100 flex items-center space-x-2">
                    <TreePine className="h-3 w-3 text-green-300" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Our Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Our Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/businesses/superior-electric-service/" className="text-green-100 hover:text-green-300 transition-colors">
                  Louisville Main Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/prospect/" className="text-green-100 hover:text-green-300 transition-colors">
                  Prospect Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/hill-view/" className="text-white hover:text-green-300 transition-colors font-medium">
                  Hill View Location
                </Link>
              </li>
              <li className="pt-2 border-t border-green-300/20">
                <Link href="/" className="text-green-200 hover:text-green-300 transition-colors">
                  NearbyBizFinder Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-300/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="NearbyBizFinder logo"
              width={24}
              height={24}
              className="h-6 w-6"
              quality={90}
            />
            <p className="text-green-200 text-sm">
              Powered by NearbyBizFinder
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy/" className="text-green-200 hover:text-green-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-green-200 hover:text-green-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
