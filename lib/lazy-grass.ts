export const lazyGrass = {
    name: 'Lazy Grass',
    phone: '(678) 234 1734',
    phoneHref: 'tel:+16782341734',
    email: 'justinblastick@gmail.com',
    serviceArea: 'Woodstock Area',
    about:
      'Founded in 2018 by a construction and hardscaping professional, Lazy Grass grew from a vision to bring superior artificial turf installation to the North Atlanta region. What started as a specialized service has evolved into Woodstock go-to artificial turf company. Operating full-time since 2020, we have built our business through word-of-mouth referrals and the trust of homeowners and businesses who value quality workmanship. Our foundation in construction ensures every installation includes proper grading and drainage systems. From Woodstock rolling hills to Sandy Springs established neighborhoods, we understand how North Georgias clay soil and seasonal weather patterns affect turf installation. This local knowledge helps us deliver installations that look beautiful and perform flawlessly year-round. As a family-owned business, we are proud to serve communities throughout the North Atlanta region, helping property owners enjoy low-maintenance, beautiful lawns. Get to know our experienced team and proven approach today.',
    services: [
      {
        slug: 'Artificial Turf Installation',
        title: 'Artificial Turf Installation',
        desc: 'Our flagship service. We install high-quality, realistic artificial turf for lawns, play areas, and commercial properties, complete with proper grading.'
      },
      {
        slug: 'Backyard Putting Greens',
        title: 'Backyard Putting Greens',
        desc: 'Perfect your short game with a professional-grade putting green, custom-designed and installed to fit your space.'
      },    
      {
        slug: 'Pet-Safe Turf Systems',
        title: 'Pet-Safe Turf Systems',
        desc: 'Durable, easy-to-clean turf solutions designed to handle pets, with specialized infill and drainage to keep your yard fresh.'
      }
      ,
      {
        slug: 'Grading & Drainage',
        title: 'Grading & Drainage',
        desc: 'Our construction background ensures every project starts right. We solve drainage issues and perfectly grade the site *before* laying turf.'
      }, 
    ],
    faqs: [
      {
        q: 'Are you licensed and insured?',
        a: 'Yes, we are fully licensed and insured for all turf installations, protecting both you and our team throughout every project.'
      },
      {
        q: 'What areas do you serve?',
        a: 'We primarily serve the North Atlanta region, including Woodstock, Sandy Springs, and surrounding communities. If you are in the area, give us a call!'
      },
      {
        q: 'What is your experience level?',
        a: 'Our founder has been in construction and hardscaping since 2018. The Lazy Grass team has been operating full-time since 2020, specializing exclusively in artificial turf.'
      },
      {
        q: 'What types of turf do you install?',
        a: 'We install a wide variety of high-quality, durable artificial turf, including pet-safe systems, realistic lawn turf, and professional-grade putting greens.'
      },
      {
        q: 'Do you handle construction and grading?',
        a: 'Yes. Our background is in construction. Every installation includes proper grading and drainage systems to ensure your turf lasts.'
      },
      {
        q: 'Is artificial turf safe for children?',
        a: 'Absolutely. Our turf products are non-toxic, lead-free, and provide a soft, cushioned surface, making them an ideal and safe play area for children.'
      }
    ],
    cities: [
      { name: 'Woodstock', slug: '' },
      { name: 'Sandy Springs', slug: 'sandy-springs' },
      { name: 'Roswell', slug: 'roswell' },
      { name: 'Alpharetta', slug: 'alpharetta' },
      { name: 'Cumming', slug: 'cumming' }
    ],
    imagesBase: '/lazy-grass'
  };
  
  export type LazyGrassCity = '' | 'woodstock';
  
  export function getCityName(slug: LazyGrassCity): string {
    switch (slug) {
      case 'woodstock':
        return 'woodstock';
      default:
        return 'woodstock';
    }
  }
  
  export function cityImage(base: string, citySlug: LazyGrassCity, file: string): string {
    const slug = citySlug === '' ? 'woodstock' : citySlug;
    return `${base}/${slug}/${file}`;
  }
  
  
  
  