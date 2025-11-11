import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OptimizedVideo from '@/components/ui/optimized-video';

// --- Lazy Grass Business Data ---
const lazyGrass = {
  name: 'Lazy Grass',
  phone: '(678) 234-1734',
  phoneHref: 'tel:+16782341734',
  email: 'justinblastick@gmail.com',
  serviceArea: 'Woodstock',
  imagesBase: '/lazy-grass/woodstock', // Base path for images
  about:
    "Founded in 2018 by a construction and hardscaping professional, Lazy Grass grew from a vision to bring superior artificial turf installation to the North Atlanta region. What started as a specialized service has evolved into Woodstock's go-to artificial turf company. Operating full-time since 2020, we've built our business through word-of-mouth referrals and the trust of homeowners and businesses who value quality workmanship. Our foundation in construction ensures every installation includes proper grading and drainage systems. From Woodstock's rolling hills to Sandy Springs' established neighborhoods, we understand how North Georgia's clay soil and seasonal weather patterns affect turf installation. This local knowledge helps us deliver installations that look beautiful and perform flawlessly year-round. As a family-owned business, we're proud to serve communities throughout the North Atlanta region, helping property owners enjoy low-maintenance, beautiful lawns. Get to know our experienced team and proven approach today.",
  services: [
    {
      slug: 'turf-installation',
      title: 'Artificial Turf Installation',
      desc: 'Our flagship service. We install high-quality, realistic artificial turf for lawns, play areas, and commercial properties, complete with proper grading.'
    },
    {
      slug: 'putting-greens',
      title: 'Backyard Putting Greens',
      desc: "Perfect your short game with a professional-grade putting green, custom-designed and installed to fit your space."
    },
    {
      slug: 'pet-turf',
      title: 'Pet-Safe Turf Systems',
      desc: 'Durable, easy-to-clean turf solutions designed to handle pets, with specialized infill and drainage to keep your yard fresh.'
    },
    {
      slug: 'grading-drainage',
      title: 'Grading & Drainage',
      desc: "Our construction background ensures every project starts right. We solve drainage issues and perfectly grade the site *before* laying turf."
    }
  ],
  faqs: [
    {
      q: 'Are you licensed and insured?',
      a: "Yes, we're fully licensed and insured for all turf installations, protecting both you and our team throughout every project."
    },
    {
      q: 'What areas do you serve?',
      a: 'We primarily serve the North Atlanta region, including Woodstock, Sandy Springs, and surrounding communities. If you are in the area, give us a call!'
    },
    {
      q: "What's your experience level?",
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
  ]
};

// Helper function to build image paths
const cityImage = (base: string, city: string, file: string) => {
  return `${base}/${file}`;
};
// --- End of Business Data ---

export const metadata: Metadata = {
  title: `${lazyGrass.name} | Woodstock Artificial Turf Installation`,
  description:
    'Woodstock-area artificial turf, pet turf, and putting green installers. Family-owned, licensed, and insured. Get a free estimate today.',
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/lazy-grass/' }, // Example URL
  openGraph: {
    title: `${lazyGrass.name} | Woodstock Artificial Turf Installation`,
    description:
      'Expert artificial turf installation in Woodstock, GA. We handle grading, drainage, and professional installation for lawns, pets, and putting greens.',
    url: 'https://nearbybizfinder.com/businesses/lazy-grass/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${lazyGrass.name} | Woodstock Artificial Turf Installation`,
    description:
      'Expert artificial turf installation in Woodstock, GA. We handle grading, drainage, and professional installation.'
  }
};

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: lazyGrass.name,
    email: lazyGrass.email,
    telephone: '+16782341734',
    areaServed: ['Woodstock', lazyGrass.serviceArea, 'Georgia'],
    url: 'https://nearbybizfinder.com/businesses/lazy-grass/', // Example URL
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+16782341734', contactType: 'customer service' }]
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function LocalNavbar() {
  // Set z-index to 999 to ensure it's on top of all sweeping cards
  return (
    <header className="sticky top-0 z-[999] bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/businesses/lazy-grass" className="flex items-center gap-2 text-white">
            <div className="relative h-8 w-8">
              {/* Logo Path */}
              <OptimizedImage src="/lazy-grass/logo/logo-on-dark.png" alt={`${lazyGrass.name} logo`} fill className="object-contain" priority />
            </div>
            <span className="font-semibold">{lazyGrass.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href={lazyGrass.phoneHref} className="hidden sm:inline-flex">
              <Button className="bg-lime-500 text-gray-900 hover:bg-lime-400">{lazyGrass.phone}</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-gray-900">Get Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Card 1: Hero
function Hero() {
  return (
    <section className="sticky top-0 z-10 h-screen isolate overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0">
        <OptimizedVideo
          src="/lazy-grass/woodstock/hero.mp4"
          alt="Beautiful artificial turf lawn in Woodstock"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative">
        <p className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/30">Serving Woodstock & North Atlanta</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Woodstock's Premier Artificial Turf Installers
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Perfect lawns, pet turf, and putting greens. Family-owned with a background in construction for expert grading and drainage.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={lazyGrass.phoneHref}><Button className="bg-lime-500 text-gray-900 hover:bg-lime-400">Call {lazyGrass.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-lime-400 text-lime-300 hover:bg-lime-500 hover:text-gray-900">Request Free Estimate</Button></Link>
        </div>
        
        {/* TrustStrip content merged into Hero */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300 opacity-90">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Licensed & Insured</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-400" />Family-Owned</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Expert Grading</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-400" />Word-of-Mouth Referrals</div>
        </div>
      </div>
    </section>
  );
}

// Card 2: Gallery
function Gallery() {
  return (
    <section id="gallery" className="sticky top-0 z-20 h-screen bg-lime-50 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recent Work</h2>
        <p className="mt-2 text-emerald-800">See the quality we bring to lawns, putting greens, and pet areas.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative h-32 md:h-48 rounded-lg overflow-hidden shadow-md border-2 border-white">
              <OptimizedImage src={cityImage(lazyGrass.imagesBase, '', `gallery-${idx + 1}.png`)} alt={`Gallery image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
}

// Card 3: Services
function Services() {
  return (
    <section id="services" className="sticky top-0 z-30 h-screen bg-gradient-to-br from-white to-emerald-50 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lazyGrass.services.map((s) => (
            <div key={s.slug} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <OptimizedImage
                  src={cityImage(lazyGrass.imagesBase, '', `service-${s.slug}.png`)}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card 4: About
function About() {
  return (
    <section id="about" className="sticky top-0 z-40 h-screen bg-gray-900 text-slate-200 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">About {lazyGrass.name}</h2>
          <p className="mt-4 text-slate-300">{lazyGrass.about}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-lime-300">
            <li>Licensed & Insured</li>
            <li>Family-Owned & Operated</li>
            <li>Local Woodstock Pros</li>
            <li>Construction & Grading Experts</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['team-1.png','grading-1.png','turf-rolls-1.png','putting-green-1.png'].map((file) => (
            <div key={file} className="relative h-32 md:h-48 rounded-lg overflow-hidden ring-1 ring-lime-500/20">
              <OptimizedImage src={cityImage(lazyGrass.imagesBase, '', file)} alt="Lazy Grass team and work" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card 5: FAQs
function FAQs() {
  return (
    <section id="faqs" className="sticky top-0 z-50 h-screen bg-lime-100 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-6">
          {lazyGrass.faqs.map((f, i) => (
            <div key={i} className="border-t border-emerald-200 pt-4">
              <h3 className="font-semibold text-emerald-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card 6: Our Process - CORRECTED z-index from z-60 to z-[60]
function OurProcess() {
  const steps = [
    { name: '1. Consultation', desc: 'We visit your site, discuss your goals, and provide a free, no-obligation estimate.' },
    { name: '2. Site Preparation', desc: 'Our construction crew handles all grading and drainage to build a perfect foundation.' },
    { name: '3. Turf Installation', desc: 'Our expert team professionally installs your new turf, seaming and securing it for a flawless look.' },
    { name: '4. Final Walkthrough', desc: 'We review the project with you, explain care, and ensure you are 100% satisfied.' }
  ];
  return (
    <section id="process" className="sticky top-0 z-[60] h-screen bg-gradient-to-br from-emerald-700 to-gray-900 text-white flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-gray-900/60 backdrop-blur rounded-xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold">Our Proven Process</h2>
          <p className="mt-2 text-slate-300">
            From expert grading to the final "wow," we handle every step.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.name}>
                <h3 className="font-semibold text-lime-300">{step.name}</h3>
                <p className="mt-1 text-sm text-slate-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Card 7: Contact Form - CORRECTED z-index from z-70 to z-[70]
function ContactForm() {
  const mailtoHref = `mailto:${encodeURIComponent(lazyGrass.email)}?subject=${encodeURIComponent('Estimate Request – Woodstock')}`;
  return (
    <section id="contact" className="sticky top-0 z-[70] h-screen bg-emerald-50 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get Your Free Estimate</h2>
          <p className="mt-2 text-emerald-800">Ready for a low-maintenance, beautiful lawn? Call now or send us a message.</p>
        </div>
        
        <form action={mailtoHref} method="post" className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto" aria-label="Estimate request form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <Input id="name" name="name" required placeholder="Your full name" className="mt-1 bg-white" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
            <Input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="(###) ### ####" className="mt-1 bg-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <Input id="email" name="email" type="email" inputMode="email" required placeholder="you@example.com" className="mt-1 bg-white" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service</label>
            <Input id="service" name="service" list="services" placeholder="Select or type" className="mt-1 bg-white" />
            <datalist id="services">
              {lazyGrass.services.map((s) => (
                <option key={s.slug} value={s.title} />
              ))}
            </datalist>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Details</label>
            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2 text-sm" placeholder="Tell us about your project (location, size, idea)" />
            <input type="hidden" name="city" value="Woodstock" />
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 w-full sm:w-auto">Send Request</Button>
            <Link className="text-emerald-700 font-medium" href={lazyGrass.phoneHref}>Prefer to call? {lazyGrass.phone}</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

// Card 8: Footer - CORRECTED z-index from z-80 to z-[80]
function Footer() {
  const mailtoHref = `mailto:${encodeURIComponent(lazyGrass.email)}?subject=${encodeURIComponent('General Inquiry – Woodstock')}`;

  return (
    <footer className="sticky top-0 z-[80] h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-950 text-slate-300 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Top Section - Logo and CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-gray-700">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="relative h-12 w-12">
                <OptimizedImage src="/lazy-grass/logo/logo-on-dark.png" alt={`${lazyGrass.name} logo`} fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold">{lazyGrass.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transforming North Atlanta lawns with premium artificial turf since 2018. Family-owned, licensed, and built on a foundation of construction excellence.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={lazyGrass.phoneHref} className="text-lime-300 text-3xl font-bold hover:text-lime-200 transition-colors">
              {lazyGrass.phone}
            </Link>
            <Link href="#contact">
              <Button className="w-full bg-lime-500 text-gray-900 hover:bg-lime-400 font-semibold">
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-700">
          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {lazyGrass.services.map((service) => (
                <li key={service.slug}>
                  <a href="#services" className="text-slate-400 hover:text-lime-300 transition-colors text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-lime-300 transition-colors text-sm">About Us</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-lime-300 transition-colors text-sm">Gallery</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-lime-300 transition-colors text-sm">Our Process</a></li>
              <li><a href="#faqs" className="text-slate-400 hover:text-lime-300 transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Woodstock, GA</li>
              <li>Sandy Springs, GA</li>
              <li>Marietta, GA</li>
              <li>Roswell, GA</li>
              <li>Alpharetta, GA</li>
              <li>Canton, GA</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href={lazyGrass.phoneHref} className="text-slate-400 hover:text-lime-300 transition-colors text-sm block">
                  {lazyGrass.phone}
                </Link>
              </li>
              <li>
                <Link href={mailtoHref} className="text-slate-400 hover:text-lime-300 transition-colors text-sm break-all block">
                  {lazyGrass.email}
                </Link>
              </li>
              <li className="text-slate-400 text-sm">
                Serving North Atlanta<br />& Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Trust Badges & Copyright */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-2 rounded-full border border-emerald-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-lime-500/10 px-3 py-2 rounded-full border border-lime-500/30">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                <span className="text-lime-300 font-medium">Family Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 px-3 py-2 rounded-full border border-cyan-500/30">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-300 font-medium">Since 2018</span>
              </div>
            </div>

            {/* Social Links (optional - add if needed) */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">Follow us:</span>
              <div className="flex gap-3">
                {/* Add social media links here if available */}
                <a href="#" className="text-slate-400 hover:text-lime-300 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-lime-300 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center pt-6 border-t border-gray-800">
            <p>© {new Date().getFullYear()} {lazyGrass.name}. All rights reserved. | Licensed & Insured Artificial Turf Installer</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main id="content" className="bg-slate-100">
      <a href="#contact" className="sr-only focus:not-sr-only">Skip to contact</a>
      <LocalNavbar />
      
      {/* This container holds all 8 sticky cards and provides the "scroll track".
        It has 8 cards, so its height is 8 * 100vh = 800vh.
      */}
      <div className="relative h-[800vh]">
        <Hero />
        <Gallery />
        <Services />
        <About />
        <FAQs />
        <OurProcess />
        <ContactForm />
        <Footer />
      </div>

      <JsonLd />
    </main>
  );
}