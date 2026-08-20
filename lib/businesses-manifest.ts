export type BusinessManifest = Record<string, string[]>;

export interface BusinessLocation {
  /** Route segment under the business slug, e.g. `poconos`. */
  slug: string;
  /** Human-readable label shown in the directory. */
  label: string;
}

export interface BusinessListing {
  /** Directory name under `app/businesses/`. */
  slug: string;
  name: string;
  /** Category label — also drives the directory filter chips. */
  category: string;
  /** Primary city/region the landing page targets. */
  location: string;
  /** One-line pitch used on the directory card. */
  tagline: string;
  /** Extra service areas that have their own landing page. */
  locations?: BusinessLocation[];
}

// Authoritative list of business landing pages.
// Keep this in sync with `app/businesses/*` — it powers /businesses.
export const BUSINESS_LISTINGS: BusinessListing[] = [
  {
    slug: 'a&j-locksmith',
    name: 'A&J Locksmith',
    category: 'Locksmith & Security',
    location: 'Wichita, KS',
    tagline:
      "Wichita's 24/7 locksmith for car lockouts, key replacement, rekeying, and smart locks — averaging a 14-minute response.",
  },
  {
    slug: 'american-gutter-guards',
    name: 'American Gutter Guards',
    category: 'Roofing & Gutters',
    location: 'Chesapeake, VA',
    tagline:
      'Custom-fit metal mesh gutter guards, gutter cleaning, and seamless gutter installation, backed by a free inspection.',
  },
  {
    slug: 'ark-appliance-services',
    name: 'Ark Appliance Services LLC',
    category: 'Appliance & HVAC',
    location: 'Mandarin, Jacksonville, FL',
    tagline:
      'Refrigerator, washer/dryer, oven, dishwasher & microwave repair for Mandarin homeowners within a 25-mile radius.',
    locations: [{ slug: 'st-johns-fruit-cove', label: 'St. Johns & Fruit Cove, FL' }],
  },
  {
    slug: 'clear-choice-cleaning',
    name: 'Clear Choice Cleaning',
    category: 'Cleaning',
    location: 'Las Vegas, NV',
    tagline:
      'Residential and commercial cleaning with eco-friendly products, experienced cleaners, and flexible scheduling.',
  },
  {
    slug: 'daniels-garage-doors',
    name: "Daniel's Garage Doors",
    category: 'Garage Doors',
    location: 'San Bernardino, CA',
    tagline:
      'Residential garage door repair, spring replacement, and new installs across San Bernardino, Riverside, and 30 miles around.',
  },
  {
    slug: 'drywall-painting-pro',
    name: 'Drywall and Painting Pro',
    category: 'Painting & Drywall',
    location: 'Cedar Park, TX',
    tagline:
      'Drywall, interior and exterior painting, water damage restoration, pipe work, and full remodeling.',
    locations: [
      { slug: 'cedar-park', label: 'Cedar Park, TX' },
      { slug: 'georgetown', label: 'Georgetown, TX' },
    ],
  },
  {
    slug: 'jeffs-appliance-repair',
    name: "Jeff's Appliance Repair",
    category: 'Appliance & HVAC',
    location: 'Buffalo, MN',
    tagline:
      'Appliance, HVAC, and furnace repair serving Wright County since 2000, with same-day service available.',
  },
  {
    slug: 'lazy-grass',
    name: 'Lazy Grass',
    category: 'Landscaping & Turf',
    location: 'Woodstock, GA',
    tagline:
      'Family-owned artificial turf, pet-safe turf systems, and backyard putting greens — grading and drainage done right.',
    locations: [
      { slug: 'woodstock', label: 'Woodstock, GA' },
      { slug: 'cummings', label: 'Cumming, GA' },
      { slug: 'rosewell', label: 'Roswell, GA' },
      { slug: 'sandy-springs', label: 'Sandy Springs, GA' },
    ],
  },
  {
    slug: 'nm-concrete-coating-pros',
    name: 'NM Concrete Coating Pros',
    category: 'Concrete & Flooring',
    location: 'Albuquerque, NM',
    tagline:
      'Epoxy, metallic, and polyaspartic floor coatings for homes and businesses — UV-stable systems with a lifetime warranty.',
    locations: [
      { slug: 'santa-fe', label: 'Santa Fe, NM' },
      { slug: 'rio-rancho', label: 'Rio Rancho, NM' },
      { slug: 'los-lunas', label: 'Los Lunas, NM' },
      { slug: 'edgewood', label: 'Edgewood, NM' },
    ],
  },
  {
    slug: 'rc-solutions',
    name: 'RC Solutions LLC',
    category: 'Appliance & HVAC',
    location: 'Sanford, FL',
    tagline:
      'Heating, cooling, water heater, and drywall work — including 24-hour emergency HVAC service.',
    locations: [
      { slug: 'orlando', label: 'Orlando, FL' },
      { slug: 'daytona-beach', label: 'Daytona Beach, FL' },
      { slug: 'palm-coast', label: 'Palm Coast, FL' },
      { slug: 'deland', label: 'DeLand, FL' },
    ],
  },
  {
    slug: 'she-wrote-me-a-letter',
    name: 'She Wrote Me a Letter',
    category: 'Curb Appeal',
    location: 'Cape Coral, FL',
    tagline:
      'Mailbox installation and replacement — custom brick, stone, and USPS-compliant designs built for the coast.',
  },
  {
    slug: 'superior-electric-service',
    name: 'Superior Electric Service',
    category: 'Electrical',
    location: 'Louisville, KY',
    tagline:
      'Licensed electrical installation, repair, and maintenance for homes and businesses around Louisville.',
    locations: [
      { slug: 'prospect', label: 'Prospect, KY' },
      { slug: 'hill-view', label: 'Hill View, KY' },
    ],
  },
  {
    slug: 'sv-renovations',
    name: 'S&V Renovations, LLC',
    category: 'Foundation & Renovation',
    location: 'North Little Rock, AR',
    tagline:
      'Foundation repair, drainage, and full home renovation — licensed, insured, and backed by a 30-day warranty.',
    locations: [
      { slug: 'hot-springs', label: 'Hot Springs, AR' },
      { slug: 'conway', label: 'Conway, AR' },
    ],
  },
  {
    slug: 'woodys-concrete-and-masonry-construction',
    name: "Woody's Concrete & Masonry",
    category: 'Concrete & Masonry',
    location: 'Lehigh Valley, PA',
    tagline:
      'Poured concrete patios, walkways, footings, and retaining walls built to pass inspection the first time.',
    locations: [{ slug: 'poconos', label: 'Poconos, PA' }],
  },
  {
    slug: 'ziva-appliance-repair',
    name: 'Ziva Appliance Repair',
    category: 'Appliance & HVAC',
    location: 'McKinney, TX',
    tagline:
      'Residential repair for refrigerators, dishwashers, ovens, washers, dryers, and garbage disposals within 35 miles.',
  },
];

/** Distinct category labels, alphabetised — used for the directory filter. */
export const BUSINESS_CATEGORIES: string[] = Array.from(
  new Set(BUSINESS_LISTINGS.map((business) => business.category))
).sort();

/** Every landing page route under /businesses, including per-location pages. */
export const TOTAL_LANDING_PAGES: number = BUSINESS_LISTINGS.reduce(
  (total, business) => total + 1 + (business.locations?.length ?? 0),
  0
);

/** Legacy shape: business slug -> location slugs. */
export const BUSINESS_MANIFEST: BusinessManifest = Object.fromEntries(
  BUSINESS_LISTINGS.map((business) => [
    business.slug,
    (business.locations ?? []).map((location) => location.slug),
  ])
);
