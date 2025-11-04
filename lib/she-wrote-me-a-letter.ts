export const sheWroteMeALetter = {
    name: 'She Wrote Me a Letter',
    phone: '(239) 492 3924',
    phoneHref: 'tel:+12394923924',
    email: 'swfl3722@gmail.com',
    serviceArea: 'Cape Coral Area',
    about:
      'She Wrote Me a Letter – Mailbox Repair & Installation At She Wrote Me a Letter, we bring new life to your curb appeal with professional mailbox repair and installation services in Cape Coral, FL. From fixing damaged posts and locks to installing stylish, durable new mailboxes, we make sure your mail stays safe and your home looks inviting. Whether you need a quick repair, a sturdy replacement, or a custom installation that stands out, our team delivers reliable service with a personal touch. We’re committed to quality, affordability, and making every mailbox as strong and unique as the letters it holds.',
    services: [
      {
        slug: 'Mailbox Replacement',
        title: 'Mailbox Replacement',
        desc: 'Upgrade your curb appeal with professional mailbox replacement services in Cape Coral, Fl. Whether you old mailbiox is damaged, outdated, or simply needs a refresh, we provide quick and durable replacements that match your home"s style. Our team installs high-quality standard, brick or metal mailboxes built to withstand Floridas weather while enhancing the look of your property'
      },
      {
        slug: 'Mailbox Installation',
        title: 'Mailbox Installation',
        desc: 'We specialize in mailbox installation for new and existing homes across Cape Coral. From selecting the right design to complete setup, our experts handle every detail with precision. We install both residential and community mailboxes that meet USPS standards, ensuring long-lasting durability, aesthetic appeal, and perfect alignment with your property’s layout.'
      },    
      {
        slug: 'New Sub-Division Mailboxes',
        title: 'New Sub-Division Mailboxes',
        desc: 'If you’re managing a new development or subdivision in Cape Coral, we offer complete community mailbox installation solutions. Our team partners with builders, HOAs, and property managers to design and install cohesive mailbox systems that combine functionality and curbside appeal. We handle everything from layout planning to custom branding and powder coating options for a polished, uniform look across the neighborhood.'
      }
      ,
      {
        slug: 'Brick/Stone Mailboxes',
        title: 'Brick/Stone Mailboxes',
        desc: 'Bring timeless elegance to your property with our custom brick and stone mailbox installations. Crafted from high-quality materials, these mailboxes not only add durability but also elevate your home’s exterior. Whether you prefer classic red brick or natural stone designs, we can match your home’s architecture and create a lasting statement piece built to endure Florida’s coastal climate.'
      },
      {
        slug: 'PowderCoated Metal Mailboxes',
        title: 'PowderCoated Metal Mailboxes',
        desc: 'Our powder-coated metal mailboxes offer the perfect blend of style, strength, and weather resistance. Designed for homeowners and communities in Cape Coral, these mailboxes are resistant to rust, fading, and corrosion. Available in multiple finishes and colors, they deliver a sleek, modern appearance that requires minimal maintenance and stands the test of time.'
      }
    ],
    faqs: [
      {
        q: 'Do you provide mailbox installation and replacement services across all of Cape Coral?',
        a: 'Yes! We proudly serve all areas of Cape Coral, FL, including new developments and existing neighborhoods. Whether you need a single residential mailbox replaced or a full subdivision installation, our team can handle it efficiently and on schedule.'
      },
      {
        q: 'What types of mailboxes do you install?',
        a: 'We install a wide variety of mailbox styles, including standard curbside mailboxes, brick and stone mailboxes, and powder-coated metal mailboxes. Each option is built to meet USPS standards and customized to match your property’s design and community guidelines.'
      },
      {
        q: 'Can you install mailboxes for new subdivisions or HOA communities?',
        a: 'Absolutely. We specialize in subdivision and HOA mailbox installations for developers and property managers across Cape Coral. Our team designs and installs mailbox systems that are durable, uniform, and compliant with USPS regulations - perfect for new developments.'
      },
      {
        q: 'How long does it take to replace or install a new mailbox?',
        a: 'Most residential mailbox replacements or installations can be completed within one day, depending on the design and materials. Custom brick or stone mailboxes may take a little longer to ensure proper curing and finish, but we always provide a clear timeline upfront.'
      },
      {
        q: 'Are powder-coated metal mailboxes worth the investment?',
        a: 'Yes - powder-coated metal mailboxes are an excellent long-term choice for Cape Coral’s coastal climate. The powder coating adds an extra layer of protection against rust, UV damage, and moisture, keeping your mailbox looking new for years with minimal maintenance.'
      }
    ],
    cities: [
      { name: 'Cape Coral', slug: '' },
    //   { name: 'Orlando', slug: 'orlando' },
    //   { name: 'Daytona Beach', slug: 'daytona-beach' },
    //   { name: 'Palm Coast', slug: 'palm-coast' },
    //   { name: 'Deland', slug: 'deland' }
    ],
    imagesBase: '/she-wrote-me-a-letter'
  };
  
  export type SheWroteMeACity = '' | 'cape-coral';
  
  export function getCityName(slug: SheWroteMeACity): string {
    switch (slug) {
      case 'cape-coral':
        return 'Cape Coral';
      default:
        return 'Cape Coral';
    }
  }
  
  export function cityImage(base: string, citySlug: SheWroteMeACity, file: string): string {
    const slug = citySlug === '' ? 'cape-coral' : citySlug;
    return `${base}/${slug}/${file}`;
  }
  
  
  
  