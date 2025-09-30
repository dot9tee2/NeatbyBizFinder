import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Clock, Star, Zap, Award } from 'lucide-react';

interface LouisvilleFooterProps {
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

export default function LouisvilleFooter({
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
}: LouisvilleFooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">{businessName}</span>
                <p className="text-yellow-300 text-sm font-medium">Louisville Main Location</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional electrical services with a commitment to quality and customer satisfaction. 
              Serving Louisville and surrounding areas since 2008.
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
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400" />
                <a href={`tel:${businessPhone}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {businessPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <a href={`mailto:${businessEmail}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {businessEmail}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-yellow-400" />
                <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Visit Our Website
                </a>
              </li>
              {businessAddress && (
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                  <span className="text-gray-300">
                    {businessAddress}<br />
                    {businessCity}, {businessState} {businessZipCode}
                  </span>
                </li>
              )}
              {businessHours && (
                <li className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-300">{businessHours}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Service Areas */}
          {serviceAreas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-gray-300 flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-yellow-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Our Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Our Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/businesses/superior-electric-service/" className="text-white hover:text-yellow-400 transition-colors font-medium">
                  Louisville Main Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/prospect/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Prospect Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/hill-view/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Hill View Location
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-700">
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  NearbyBizFinder Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
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
            <Link href="/privacy/" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
