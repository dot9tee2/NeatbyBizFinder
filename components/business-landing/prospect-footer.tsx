import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Clock, Star, Building2, Award } from 'lucide-react';

interface ProspectFooterProps {
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

export default function ProspectFooter({
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
}: ProspectFooterProps) {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-cyan-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">{businessName}</span>
                <p className="text-cyan-600 text-sm font-medium">Prospect Location</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium electrical services for Prospect's upscale residential and commercial properties. 
              Specializing in solar installations and smart home systems.
            </p>
            {businessRating && businessReviewCount && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {businessRating} ({businessReviewCount} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-600">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-500" />
                <a href={`tel:${businessPhone}`} className="text-gray-600 hover:text-cyan-600 transition-colors">
                  {businessPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-500" />
                <a href={`mailto:${businessEmail}`} className="text-gray-600 hover:text-cyan-600 transition-colors">
                  {businessEmail}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-cyan-500" />
                <a href={businessWebsite} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Visit Our Website
                </a>
              </li>
              {businessAddress && (
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-cyan-500 mt-1" />
                  <span className="text-gray-600">
                    {businessAddress}<br />
                    {businessCity}, {businessState} {businessZipCode}
                  </span>
                </li>
              )}
              {businessHours && (
                <li className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-cyan-500" />
                  <span className="text-gray-600">{businessHours}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Service Areas */}
          {serviceAreas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-600">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-gray-600 flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-cyan-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Our Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-600">Our Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/businesses/superior-electric-service/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Louisville Main Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/prospect/" className="text-gray-900 hover:text-cyan-600 transition-colors font-medium">
                  Prospect Location
                </Link>
              </li>
              <li>
                <Link href="/businesses/superior-electric-service/hill-view/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Hill View Location
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <Link href="/" className="text-gray-500 hover:text-cyan-600 transition-colors">
                  NearbyBizFinder Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="NearbyBizFinder logo"
              width={24}
              height={24}
              className="h-6 w-6"
              quality={90}
            />
            <p className="text-gray-500 text-sm">
              Powered by NearbyBizFinder
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy/" className="text-gray-500 hover:text-cyan-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-gray-500 hover:text-cyan-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
