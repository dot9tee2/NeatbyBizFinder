export const rcSolutions = {
  name: 'RC Solutions LLC',
  phone: '(321) 481 9611',
  phoneHref: 'tel:+13214819611',
  email: 'jonathan@rcsolutionsusa.org',
  serviceArea: 'Sanford Area',
  about:
    'At RC Solutions LLC our motto is Honesty, Integrity and Reliability. We help homeowners save money by educating on rebates and incentives. Many homeowners can qualify for up to $8,000 for a new HVAC system. We offer no payments and no interest for 24 months for qualified customers. Our CPAs will guide you at the end of the year to file the proper forms for rebates and tax credits.',
  services: [
    {
      slug: 'ac',
      title: 'AC Installation & Repair',
      desc: 'Residential & Commercial HVAC installs, repairs, seasonal tune-ups, and maintenance plans.'
    },
    {
      slug: 'drywall',
      title: 'Drywall, Painting & Repair',
      desc: 'Seamless drywall fixes, texture/finishing, interior and exterior painting, and general repairs.'
    },
    {
      slug: 'water-heaters',
      title: 'Water Heaters — Install & Repair',
      desc: 'Tank & tankless, gas/electric, rapid replacements, diagnostics, and annual service.'
    }
  ],
  faqs: [
    {
      q: 'Do I qualify for HVAC rebates?',
      a: 'Many homeowners qualify for up to $8,000 in rebates. We help verify eligibility and file paperwork.'
    },
    {
      q: 'Do you offer financing?',
      a: 'Yes — $0 down, no payments, and no interest for 24 months for qualified customers.'
    },
    {
      q: 'Do you service commercial properties?',
      a: 'Yes — AC and water heater services are available for both residential and commercial properties.'
    },
    {
      q: 'Do you offer emergency service?',
      a: 'Call us 24/7. We prioritize no-cool calls and water heater failures.'
    }
  ],
  cities: [
    { name: 'Sanford', slug: '' },
    { name: 'Orlando', slug: 'orlando' },
    { name: 'Daytona Beach', slug: 'daytona-beach' },
    { name: 'Palm Coast', slug: 'palm-coast' },
    { name: 'Deland', slug: 'deland' }
  ],
  imagesBase: '/rc-solutions'
};

export type RcCity = '' | 'orlando' | 'daytona-beach' | 'palm-coast' | 'deland';

export function getCityName(slug: RcCity): string {
  switch (slug) {
    case 'orlando':
      return 'Orlando';
    case 'daytona-beach':
      return 'Daytona Beach';
    case 'palm-coast':
      return 'Palm Coast';
    case 'deland':
      return 'Deland';
    default:
      return 'Sanford';
  }
}

export function cityImage(base: string, citySlug: RcCity, file: string): string {
  const slug = citySlug === '' ? 'sanford' : citySlug;
  return `${base}/${slug}/${file}`;
}



