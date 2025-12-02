import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OptimizedVideo from '@/components/ui/optimized-video';

// --- Lazy Grass Business Data (Customized for Cummings) ---
const lazyGrass = {
  name: 'Lazy Grass',
  phone: '(678) 234-1734',
  phoneHref: 'tel:+16782341734',
  email: 'justinblastick@gmail.com',
  serviceArea: 'Cummings', // <-- Updated
  imagesBase: '/lazy-grass/cummings', // <-- Updated
  about:
    "Founded in 2018 by a construction and hardscaping professional, Lazy Grass grew from a vision to bring superior artificial turf installation to the North Atlanta region. What started as a specialized service has evolved into Cumming's go-to artificial turf company. Operating full-time since 2020, we've built our business through word-of-mouth referrals and the trust of homeowners and businesses who value quality workmanship. Our foundation in construction ensures every installation includes proper grading and drainage systems. From Cumming's beautiful neighborhoods to Sandy Springs' established communities, we understand how North Georgia's clay soil and seasonal weather patterns affect turf installation. This local knowledge helps us deliver installations that look beautiful and perform flawlessly year-round. As a family-owned business, we're proud to serve communities throughout the North Atlanta region, helping property owners enjoy low-maintenance, beautiful lawns. Get to know our experienced team and proven approach today.", // <-- Updated
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
      a: 'We primarily serve the North Atlanta region, including Cummings, Sandy Springs, and surrounding communities. If you are in the area, give us a call!' // <-- Updated
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

// --- New Metadata for Cummings SEO ---
export const metadata: Metadata = {
  title: `${lazyGrass.name} | Cummings GA Artificial Turf Installation`, // <-- Updated
  description:
    'Cummings-area artificial turf, pet turf, and putting green installers. Family-owned, licensed, and insured. Get a free estimate today.', // <-- Updated
  robots: 'index, follow', // <-- Added SEO Component
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/lazy-grass/cummings/' }, // <-- Updated
  openGraph: {
    title: `${lazyGrass.name} | Cummings GA Artificial Turf Installation`, // <-- Updated
    description:
      'Expert artificial turf installation in Cummings, GA. We handle grading, drainage, and professional installation for lawns, pets, and putting greens.', // <-- Updated
    url: 'https://nearbybizfinder.com/businesses/lazy-grass/cummings/', // <-- Updated
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${lazyGrass.name} | Cumminsg GA Artificial Turf Installation`, // <-- Updated
    description:
      'Expert artificial turf installation in Cummings, GA. We handle grading, drainage, and professional installation.' // <-- Updated
  }
};

// --- Updated JSON-LD for Cummings Local SEO ---
function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: lazyGrass.name,
    email: lazyGrass.email,
    telephone: '+16782341734',
    areaServed: ['Cummings', lazyGrass.serviceArea, 'Georgia'], // <-- Updated
    url: 'https://nearbybizfinder.com/businesses/lazy-grass/cummings/', // <-- Updated
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+16782341734', contactType: 'customer service' }]
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// --- New Navbar (Light Theme) ---
function LocalNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/businesses/lazy-grass/cummings/" className="flex items-center gap-2 text-gray-900"> {/* <-- Updated */}
            <div className="relative h-12 w-28">
              <OptimizedImage src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} fill className="object-contain" priority />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
            <a href="#gallery" className="hover:text-indigo-700">Gallery</a>
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#about" className="hover:text-indigo-700">About</a>
            <a href="#faqs" className="hover:text-indigo-700">FAQs</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href={lazyGrass.phoneHref} className="hidden sm:inline-flex">
              {/* New CTA Button Style (Rose) */}
              <Button className="bg-rose-600 text-white hover:bg-rose-700 font-semibold">{lazyGrass.phone}</Button>
            </Link>
            <Link href="#contact">
              {/* New Secondary Button Style (Indigo) */}
              <Button variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white">Get Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

// --- New Hero (Split-Screen Layout) ---
function Hero() {
  return (
    // Removed sticky, h-screen, z-index. Added padding.
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <p className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-500/30 self-start">
            Serving Cummings & North Atlanta {/* <-- Updated */}
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-indigo-900">
            Cumming's Premier Artificial Turf Installers {/* <-- Updated */}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-700 leading-relaxed">
            Perfect lawns, pet turf, and putting greens. Family-owned with a background in construction for expert grading and drainage.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={lazyGrass.phoneHref}>
              <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700 font-semibold">Call {lazyGrass.phone}</Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white">Request Free Estimate</Button>
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-400" />Licensed & Insured</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Family-Owned</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-400" />Expert Grading</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-400" />Word-of-Mouth Referrals</div>
          </div>
        </div>

        {/* Right Column: Video Container */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/10">
            <OptimizedVideo
              src="/lazy-grass/cummings/hero.mp4" // <-- Updated
              alt="Beautiful artificial turf lawn in Cummings" // <-- Updated
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- New Gallery (Standard Section) ---
function Gallery() {
  return (
    // Removed sticky, h-screen, z-index. Added padding. New bg color.
    <section id="gallery" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Recent Work</h2>
        <p className="mt-2 text-lg text-slate-600">See the quality we bring to lawns, putting greens, and pet areas.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative h-40 md:h-56 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <OptimizedImage src={cityImage(lazyGrass.imagesBase, '', `gallery-${idx + 1}.webp`)} alt={`Gallery image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
}

// --- New Services (Standard Section) ---
function Services() {
  return (
    // Removed sticky, h-screen, z-index. Added padding. New bg color.
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {lazyGrass.services.map((s) => (
            <div key={s.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <OptimizedImage
                  src={cityImage(lazyGrass.imagesBase, '', `service-${s.slug}.png`)}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- New About (Standard Section) ---
function About() {
  return (
    // Removed sticky, h-screen, z-index. Added padding. New bg color.
    <section id="about" className="bg-slate-50 text-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">About {lazyGrass.name}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{lazyGrass.about}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-md text-rose-700 font-semibold"> {/* <-- New Accent Color */}
            <li>✓ Licensed & Insured</li>
            <li>✓ Family-Owned & Operated</li>
            <li>✓ Local Cummings Pros</li> {/* <-- Updated */}
            <li>✓ Construction & Grading Experts</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['team-1.png','grading-1.png','turf-rolls-1.png','putting-green-1.png'].map((file) => (
            <div key={file} className="relative h-40 md:h-56 rounded-lg overflow-hidden ring-4 ring-white shadow-lg">
              <OptimizedImage src={cityImage(lazyGrass.imagesBase, '', file)} alt="Lazy Grass team and work" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- New FAQs (Standard Section) ---
function FAQs() {
  return (
    // Removed sticky, h-screen, z-index. Added padding. New bg color.
    <section id="faqs" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {lazyGrass.faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <h3 className="font-semibold text-lg text-indigo-900">{f.q}</h3>
              <p className="mt-2 text-md text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- New OurProcess (Dark Contrast Section) ---
function OurProcess() {
  const steps = [
    { name: '1. Consultation', desc: 'We visit your site, discuss your goals, and provide a free, no-obligation estimate.', color: 'text-rose-300' },
    { name: '2. Site Preparation', desc: 'Our construction crew handles all grading and drainage to build a perfect foundation.', color: 'text-cyan-300' },
    { name: '3. Turf Installation', desc: 'Our expert team professionally installs your new turf, seaming and securing it for a flawless look.', color: 'text-lime-300' },
    { name: '4. Final Walkthrough', desc: 'We review the project with you, explain care, and ensure you are 100% satisfied.', color: 'text-pink-300' }
  ];
  return (
    // Removed sticky, h-screen, z-index. Added padding. New dark bg.
    <section id="process" className="bg-indigo-900 text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-indigo-800/60 backdrop-blur rounded-xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold">Our Proven Process</h2>
          <p className="mt-2 text-slate-300 text-lg">
            From expert grading to the final "wow," we handle every step.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.name} className="bg-indigo-900 p-4 rounded-lg">
                <h3 className={`font-semibold text-xl ${step.color}`}>{step.name}</h3>
                <p className="mt-1 text-md text-slate-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- New ContactForm (Standard Section) ---
function ContactForm() {
  const mailtoHref = `mailto:${encodeURIComponent(lazyGrass.email)}?subject=${encodeURIComponent('Estimate Request – Cummings')}`; // <-- Updated
  return (
    // Removed sticky, h-screen, z-index. Added padding.
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Get Your Free Estimate</h2>
          <p className="mt-2 text-lg text-slate-600">Ready for a low-maintenance, beautiful lawn in Cummings? Call now or send us a message.</p>
        </div>
        
        <form action={mailtoHref} method="post" className="mt-10 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg" aria-label="Estimate request form">
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
            <input type="hidden" name="city" value="Cummings" /> {/* <-- Updated */}
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
            <Button type="submit" size="lg" className="bg-rose-600 text-white hover:bg-rose-700 font-semibold w-full sm:w-auto">Send Request</Button>
            <Link className="text-indigo-800 font-medium hover:underline" href={lazyGrass.phoneHref}>
              Prefer to call? {lazyGrass.phone}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

// --- New Footer (Dark, New Colors) ---
function Footer() {
  const mailtoHref = `mailto:${encodeURIComponent(lazyGrass.email)}?subject=${encodeURIComponent('General Inquiry – Cummings')}`; // <-- Updated

  return (
    // Removed sticky, h-screen, z-index. Added padding.
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-slate-700">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="relative h-12 w-28">
                <OptimizedImage src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} fill className="object-contain" />
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transforming North Atlanta lawns with premium artificial turf since 2018. Family-owned, licensed, and built on a foundation of construction excellence.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={lazyGrass.phoneHref} className="text-rose-300 text-3xl font-bold hover:text-rose-200 transition-colors"> {/* <-- New Accent */}
              {lazyGrass.phone}
            </Link>
            <Link href="#contact">
              <Button size="lg" className="w-full bg-rose-600 text-white hover:bg-rose-700 font-semibold"> {/* <-- New Accent */}
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-700">
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {lazyGrass.services.map((service) => (
                <li key={service.slug}>
                  <a href="#services" className="text-slate-400 hover:text-rose-300 transition-colors text-sm"> {/* <-- New Accent */}
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">About Us</a></li> {/* <-- New Accent */}
              <li><a href="#gallery" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">Gallery</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">Our Process</a></li>
              <li><a href="#faqs" className="text-slate-400 hover:text-rose-300 transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a className="font-medium text-slate-400 hover:text-teal-300 hover:underline transition-colors duration-200" href="https://nearbybizfinder.com/businesses/lazy-grass/woodstock/">Woodstock, GA</a></li>
              <li><a className="font-medium text-slate-400 hover:text-teal-300 hover:underline transition-colors duration-200" href="https://nearbybizfinder.com/businesses/lazy-grass/sandy-springs/">Sandy Springs, GA</a></li>
              <li><a className="font-medium text-slate-400 hover:text-teal-300 hover:underline transition-colors duration-200" href="https://nearbybizfinder.com/businesses/lazy-grass/rosewell/">Rosewell, GA</a></li>
              <li><a className="font-medium text-slate-400 hover:text-teal-300 hover:underline transition-colors duration-200" href="https://nearbybizfinder.com/businesses/lazy-grass/">Alpharetta, GA</a></li>
              <li><a className="font-medium text-slate-400 hover:text-teal-300 hover:underline transition-colors duration-200" href="https://nearbybizfinder.com/businesses/lazy-grass/cummings/">Cummings, GA</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href={lazyGrass.phoneHref} className="text-slate-400 hover:text-rose-300 transition-colors text-sm block"> {/* <-- New Accent */}
                  {lazyGrass.phone}
                </Link>
              </li>
              <li>
                <Link href={mailtoHref} className="text-slate-400 hover:text-rose-300 transition-colors text-sm break-all block"> {/* <-- New Accent */}
                  {lazyGrass.email}
                </Link>
              </li>
              <li className="text-slate-400 text-sm">
                Serving North Atlanta<br />& Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              {/* New Badge Colors */}
              <div className="flex items-center gap-2 bg-rose-500/10 px-3 py-2 rounded-full border border-rose-500/30">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="text-rose-300 font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 px-3 py-2 rounded-full border border-cyan-500/30">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-300 font-medium">Family Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-lime-500/10 px-3 py-2 rounded-full border border-lime-500/30">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                <span className="text-lime-300 font-medium">Since 2018</span>
              </div>
            </div>
            
            
          </div>

          <div className="text-xs text-slate-500 text-center pt-6 border-t border-slate-800">
            <p>© {new Date().getFullYear()} {lazyGrass.name}. All rights reserved. | Licensed & Insured Artificial Turf Installer</p>
            {/* Added Attribution Line */}
            <p className="mt-2">
              Powered & Managed By{" "}
              <a
                href="https://interstaterankers.com"
                className="font-medium text-slate-400 hover:text-rose-300 hover:underline transition-colors duration-200" /* <-- New Accent */
                target="_blank"
                rel="noopener noreferrer"
              >
                InterState Rankers
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

// --- Main Page (Standard Vertical Layout) ---
export default function Page() {
  return (
    <main id="content" className="bg-slate-50"> {/* New BG */}
      <a href="#contact" className="sr-only focus:not-sr-only">Skip to contact</a>
      <LocalNavbar />
      
      {/* --- LAYOUT CHANGED ---
        Removed the h-[800vh] container.
        All sections are now in a simple vertical stack.
      */}
      <Hero />
      <Gallery />
      <Services />
      <About />
      <FAQs />
      <OurProcess />
      <ContactForm />
      <Footer />
      {/* Removed the sticky container div */}

      <JsonLd />
    </main>
  );
}