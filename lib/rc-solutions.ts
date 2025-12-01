export const rcSolutions = {
  name: 'RC Solutions LLC',
  phone: '(321) 481 9611',
  phoneHref: 'tel:+13214819611',
  email: 'jonathan@rcsolutionsusa.org',
  serviceArea: 'Sanford Area',
  about:
    'We are a recognized HVAC company that proudly serves Sanford residents with dependable heating, cooling, and drywall repair and installation services. With great experience, we are able to provide the best HVAC services in Sanford; we deliver fast, high-quality services you can rely on. Our skilled technicians are always available to provide emergency HVAC services for you. From quick HVAC repairs to new system installations and top-notch drywall work, we keep Sanford homes comfortable, efficient, and looking fantastic all year. Because providing your home comfort is our first job.',
  services: [
    {
      slug: 'ac',
      title: 'AC Installation & Repair',
      desc: 'Experts guarantee the precise, secure, and quick installation of your new air conditioning system. We offer dependable, high-quality service in Sanford whether you are installing a new unit or replacing an old one. We provide an expert installation to your home, which gives your home a comfortable view and relaxing moments, because your comfort is our priority.'
    },
    {
      slug: 'drywall',
      title: 'Drywall, Painting & Repair',
      desc: 'We provide the best drywall services in Sanford. We offer cheaper and quicker services than any other company. Whether it is a small job or weather it is a full room repair, our team with years of experience makes your home beautiful and charming.'
    },
    {
      slug: 'water-heaters',
      title: 'Water Heaters — Install & Repair',
      desc: 'We provide the best water heater services to the owners of homes in Sanford, which includes quick repairs, maintenance, and installations. If you are looking for a reliable water heater service near me, our crew is prepared to provide prompt and skilled assistance. We ensure that your home has consistent hot water by correcting leaks and installing efficient new systems.'
    },
    {
      slug: 'furnace',
      title: 'Furnace Installation & Repair',
      desc: 'If you are looking for furnace repair near me. Our team is available 24 hours to provide remarkable services in Sanford with quick and reliable heating solutions. We solve all furnace difficulties, from minor repairs to serious breakdowns, so your home stays comfortable and safe. With quick responses to our customers, we show curiosity to make your homes cozy and warm in winter.'
    },
    {
      slug: 'heat-pump',
      title: 'Heat Pump Installation and Repair',
      desc: 'We offer expert and the best heatpump repair and installation services to keep your house comfortable and warm. Our skilled experts handle everything from diagnosing system problems to installing dependable new systems. Whether your heat pump need a short repair or a complete replacement. We provide Cheaper trustworthy service to ensure pleasant heating and cooling in your home.'
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



