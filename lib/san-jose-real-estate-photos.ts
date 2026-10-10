import type { Metadata } from 'next';

export const SJREP = {
  name: 'San Jose Real Estate Photos',
  site: 'https://sanjoserealestatephotos.com/',
  booking: 'https://order.sanjoserealestatephotos.com/booking/new',
  pricing: 'https://sanjoserealestatephotos.com/real-estate-media-pricing',
  portfolio: 'https://sanjoserealestatephotos.com/portfolio',
  checklist: 'https://sanjoserealestatephotos.com/checklist',
  terms: 'https://sanjoserealestatephotos.com/terms',
  privacy: 'https://sanjoserealestatephotos.com/privacy-policy',
  phone: '408-483-0688',
  phoneHref: 'tel:+14084830688',
  email: 'info@sanjoserealestatephotos.com',
  emailHref: 'mailto:info@sanjoserealestatephotos.com',
  gbp: 'https://share.google/pugARm4Me4n7rrdQH',
  socialLaunchpad: 'https://sanjoserealestatephotos.com/social_launchpad',
  socialStrategyCall:
    'https://api.leadconnectorhq.com/widget/bookings/social-launchpad-strategy-call',
  // Swap for a dedicated GoHighLevel form or calendar once one exists for MiniDocs.
  minidocInquiry:
    'mailto:info@sanjoserealestatephotos.com?subject=MiniDoc%20inquiry&body=Property%20address%3A%0AListing%20agent%3A%0ATarget%20launch%20date%3A%0AThe%20story%20behind%20the%20listing%3A%0A',
} as const;

export interface SjrepMinidoc {
  youtubeId: string;
  title: string;
  place: string;
  length: string;
  poster: string;
  summary: string;
}

export const SJREP_MINIDOCS: SjrepMinidoc[] = [
  {
    youtubeId: 'qBWkYwN12n0',
    title: '6035 Whitehaven Court',
    place: 'Silver Creek, San Jose',
    length: '6:14',
    poster: '/san-jose-real-estate-photos/minidoc-whitehaven.webp',
    summary:
      'The home, the Silver Creek setting and the lifestyle around it, told together with the agent behind the launch.',
  },
  {
    youtubeId: 'Ws-TPajkDl4',
    title: '10620 Glenview Avenue',
    place: 'Cupertino',
    length: '10:49',
    poster: '/san-jose-real-estate-photos/minidoc-glenview.webp',
    summary:
      'A seller returns to a home tied to his family since 1961, while the listing agent shares the work of preparing it for its next chapter.',
  },
];

const routeBase = '/businesses/san-jose-real-estate-photos';
const publisherUrl = 'https://nearbybizfinder.com';

export const SJREP_ROUTES = {
  sanJose: `${routeBase}/san-jose/`,
  santaClara: `${routeBase}/santa-clara/`,
  milpitas: `${routeBase}/milpitas/`,
} as const;

export interface SjrepFaq {
  q: string;
  a: string;
}

export function sjrepMetadata(
  city: string,
  slug: string,
  description: string,
  image: string,
): Metadata {
  const canonical = `${publisherUrl}${routeBase}/${slug}/`;
  const title = `Real Estate Photography & Media in ${city}, CA | SJREP`;
  return {
    title,
    description,
    keywords: [
      `real estate photography ${city}`,
      `real estate videography ${city}`,
      `property media ${city}`,
      `3D property tours ${city}`,
      `real estate drone photography ${city}`,
      SJREP.name,
    ],
    alternates: { canonical, languages: { 'en-US': canonical } },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title,
      description,
      url: canonical,
      siteName: 'NearbyBizFinder',
      images: [{ url: `${publisherUrl}${image}`, alt: `${SJREP.name} property media portfolio` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${publisherUrl}${image}`],
    },
  };
}

export function sjrepStructuredData(
  city: string,
  slug: string,
  description: string,
  faqs: SjrepFaq[],
) {
  const canonical = `${publisherUrl}${routeBase}/${slug}/`;
  const providerId = `${SJREP.site}#business`;
  const propertyServiceNames = [
    'Real estate photography',
    'Cinematic property video',
    'Drone photography and video',
    '3D property tours and floor plans',
    'Property websites',
    'Social reels and agent content',
    'Virtual twilight, staging and decluttering',
    'Listing launch marketing',
  ];
  const serviceOffers = [
    { name: 'MiniDocs listing mini-documentaries', url: SJREP.minidocInquiry },
    ...propertyServiceNames.map((name) => ({ name, url: SJREP.booking })),
    { name: 'Social Launchpad ongoing agent content', url: SJREP.socialStrategyCall },
  ];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': providerId,
        name: SJREP.name,
        url: SJREP.site,
        telephone: '+1-408-483-0688',
        email: SJREP.email,
        image: `${publisherUrl}/san-jose-real-estate-photos/logo.png`,
        areaServed: ['San Jose', 'Santa Clara', 'Milpitas'].map((name) => ({
          '@type': 'City',
          name,
          containedInPlace: { '@type': 'State', name: 'California' },
        })),
        sameAs: [
          SJREP.gbp,
          'https://www.instagram.com/sanjoserealestatephotos',
          'https://www.youtube.com/@SanJoseRealEstatePhotos',
          'https://www.linkedin.com/in/sanjoserealestatephotos',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: `Real Estate Media in ${city}, CA | ${SJREP.name}`,
        description,
        inLanguage: 'en-US',
        isPartOf: { '@type': 'WebSite', name: 'NearbyBizFinder', url: `${publisherUrl}/` },
        about: { '@id': `${canonical}#service` },
        breadcrumb: { '@id': `${canonical}#breadcrumbs` },
      },
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: `Real Estate Media in ${city}, California`,
        serviceType: serviceOffers.map(({ name }) => name),
        description,
        url: canonical,
        provider: { '@id': providerId },
        areaServed: {
          '@type': 'City',
          name: city,
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Property media and listing marketing services',
          itemListElement: serviceOffers.map(({ name, url }) => ({
            '@type': 'Offer',
            url,
            itemOffered: { '@type': 'Service', name, provider: { '@id': providerId } },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${publisherUrl}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Businesses',
            item: `${publisherUrl}/businesses/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Real Estate Media — ${city}`,
            item: canonical,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };
}
