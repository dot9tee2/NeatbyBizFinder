import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Jeff's Appliance Repair | Fast, Reliable Service in Buffalo, MN",
  description: "Expert appliance, HVAC, and furnace repair in Buffalo, MN. Serving Wright County since 2000. Call (612) 393-2529 for same-day service.",
  keywords: [
    "Appliance Repair Buffalo MN",
    "HVAC Repair 55362",
    "Furnace Service Buffalo",
    "Water Heater Repair MN",
    "Jeff's Appliance Repair",
    "Household Repair Service",
    "Wright County MN",
    "Monticello Appliance Repair",
    "Elk River Furnace Service"
  ],
  alternates: {
    canonical: 'https://nearbybizfinder.com/businesses/jeffs-appliance-repair',
  },
  openGraph: {
    title: "Jeff's Appliance Repair | Fast, Reliable Service in Buffalo, MN",
    description: "Trusted local appliance and HVAC repair. Serving Buffalo and a 40-mile radius. Fast diagnostics and master craftsmanship since 2000.",
    url: 'https://nearbybizfinder.com/businesses/jeffs-appliance-repair',
    siteName: "Jeff's Appliance Repair",
    images: [
      {
        url: '/jeffs-appliance-repair/hero-technician.png',
        width: 1200,
        height: 630,
        alt: "Jeff's Appliance Repair Technician at Work in Buffalo, MN",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeff's Appliance Repair | Buffalo, MN",
    description: "Expert appliance and HVAC repair in Buffalo. Same-day service available.",
    images: ['/jeffs-appliance-repair/hero-technician.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function JeffsApplianceRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="ld-json-local-business" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: "Jeff's Appliance Repair",
          image: 'https://nearbybizfinder.com/jeffs-appliance-repair/hero-technician.png',
          telePhone: '(612) 393-2529',
          email: 'jpl52312@gmail.com',
          url: 'https://nearbybizfinder.com/businesses/jeffs-appliance-repair',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Buffalo',
            addressRegion: 'MN',
            postalCode: '55362',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '45.1722',
            longitude: '-93.8747',
          },
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '45.1722',
              longitude: '-93.8747',
            },
            geoRadius: '64373', // 40 miles in meters
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
              ],
              opens: '08:00',
              closes: '20:00',
            }
          ],
          sameAs: [],
          priceRange: '$$',
        })}
      </Script>
      {children}
    </>
  );
}
