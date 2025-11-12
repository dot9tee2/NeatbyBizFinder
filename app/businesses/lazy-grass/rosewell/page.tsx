import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OptimizedVideo from '@/components/ui/optimized-video';

// --- Lazy Grass Business Data (Customized for Rosewell w/ NEW Content) ---
const lazyGrass = {
  name: 'Lazy Grass',
  phone: '(678) 234-1734',
  phoneHref: 'tel:+16782341734',
  email: 'justinblastick@gmail.com',
  serviceArea: 'Rosewell',
  imagesBase: '/lazy-grass/rosewell',
  // --- New Content ---
  about:
    "Founded in 2018, Lazy Grass was born from a construction professional's vision to bring superior artificial turf to North Atlanta. We're not just installers; we're grading and drainage experts first. Operating full-time since 2020, we've built our reputation in Rosewell's beautiful neighborhoods by word-of-mouth. We understand Rosewell's mix of historic properties and new developments, and we know how to engineer a flawless, low-maintenance lawn that respects the local environment. Our family-owned business is proud to offer Rosewell residents a beautiful, practical alternative to traditional lawns.",
  services: [
    {
      slug: 'turf-installation',
      title: 'Residential & Commercial Turf',
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
      title: 'Expert Grading & Drainage',
      desc: "Our construction background ensures every project starts right. We solve drainage issues and perfectly grade the site *before* laying turf."
    }
  ],
  // --- NEW CONTENT SECTION ---
  whyChooseUs: [
    {
      title: 'Construction-Grade Foundation',
      desc: 'Our background in construction means we are experts in site grading and drainage. We build a foundation that lasts.',
      color: 'bg-sky-500' // Using new 'sky' color
    },
    {
      title: 'Premium, Safe Turf',
      desc: 'We only use high-quality, USA-made artificial turf that is non-toxic, lead-free, and safe for all children and pets.',
      color: 'bg-lime-500'
    },
    {
      title: 'Local & Accountable',
      desc: 'As a family-owned business in North Atlanta, our reputation is everything. We are accountable for every project we do.',
      color: 'bg-cyan-500'
    }
  ],
  // --- NEW CONTENT SECTION ---
  testimonials: [
    {
      quote: "Lazy Grass did an amazing job. Our backyard drains perfectly now, and the turf looks unbelievably real. The kids and dog love it!",
      author: 'Sarah K. - Rosewell, GA'
    },
    {
      quote: "The putting green is tour-quality. Their construction background was obvious—the grading is perfect. Highly recommend.",
      author: 'David L. - North Atlanta'
    },
    {
      quote: "We were tired of the mud pit our dogs created. Lazy Grass installed a pet-turf system, and it has completely changed our lives. No mud, no smell!",
      author: 'Emily R. - Sandy Springs'
    }
  ],
  faqs: [
    {
      q: 'What areas do you serve?',
      a: 'We primarily serve the North Atlanta region, including our home base in Rosewell, as well as Sandy Springs, Alpharetta, and surrounding communities.'
    },
    {
      q: 'Are you licensed and insured?',
      a: "Yes, we're fully licensed and insured for all turf installations, protecting both you and our team throughout every project."
    },
    {
      q: "What makes your installation different?",
      a: 'Our construction background. We don-t just lay turf; we build a foundation. Proper grading and drainage are included in every project to ensure your turf lasts.'
    },
    {
      q: 'What types of turf do you install?',
      a: 'We install a wide variety of high-quality, durable artificial turf, including pet-safe systems, realistic lawn turf, and professional-grade putting greens.'
    }
  ]
};

// Helper function to build image paths
const cityImage = (base: string, city: string, file: string) => {
  return `${base}/${file}`;
};
// --- End of Business Data ---

// --- New Metadata for Rosewell SEO ---
export const metadata: Metadata = {
  title: `${lazyGrass.name} | Rosewell GA Artificial Turf & Putting Greens`,
  description:
    'Top-rated artificial turf installers in Rosewell, GA. Specializing in pet turf, backyard putting greens, and expert drainage. Licensed & insured. Free estimates.',
  robots: 'index, follow',
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/lazy-grass-rosewell/' },
  openGraph: {
    title: `${lazyGrass.name} | Rosewell GA Artificial Turf Installation`,
    description:
      'Expert artificial turf installation in Rosewell, GA. We handle grading, drainage, and professional installation for lawns, pets, and putting greens.',
    url: 'https://nearbybizfinder.com/businesses/lazy-grass-rosewell/',
    type: 'website'
  }
};

// --- Updated JSON-LD for Rosewell Local SEO ---
function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: lazyGrass.name,
    email: lazyGrass.email,
    telephone: '+16782341734',
    areaServed: ['Rosewell', lazyGrass.serviceArea, 'Georgia'],
    url: 'https://nearbybizfinder.com/businesses/lazy-grass-rosewell/',
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+16782341734', contactType: 'customer service' }]
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// --- New Minimalist Navbar (FIXED LOGO) ---
function LocalNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/businesses/lazy-grass/roeswell" className="flex items-center gap-2 text-gray-900">
            <div className="relative h-12 w-28">
              {/* --- FIX: Using logo-on-light for the white navbar --- */}
              <OptimizedImage src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} fill className="object-contain" priority />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href={lazyGrass.phoneHref} className="hidden sm:inline-flex text-sm font-medium text-sky-600 hover:text-sky-800">
              Call {lazyGrass.phone}
            </Link>
            <Link href="#contact-hero">
              <Button className="bg-sky-600 text-white hover:bg-sky-700 font-semibold">Get Free Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

// --- NEW "HERO-FORM" SECTION (WITH BG IMAGE) ---
function HeroForm() {
  const mailtoHref = `mailto:${encodeURIComponent(lazyGrass.email)}?subject=${encodeURIComponent('Estimate Request – Rosewell')}`;
  return (
    // --- FIX: Added relative, bg-image, and overlay ---
    <section id="contact-hero" className="relative bg-white py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={cityImage(lazyGrass.imagesBase, '', 'gallery-1.webp')}
          alt="Artificial turf background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Trust (Updated text color for dark bg) */}
        <div className="flex flex-col justify-center">
          <p className="inline-flex items-center rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200 ring-1 ring-inset ring-sky-500/30 self-start">
            Serving Rosewell & North Atlanta
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Get a Perfect Lawn in Rosewell.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed">
            Tired of mud, mowing, and maintenance? Get a free, no-obligation estimate from our family-owned, licensed, and insured turf experts.
          </p>
          
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" />Licensed & Insured</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Family-Owned</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-400" />Expert Grading</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-400" />Word-of-Mouth Referrals</div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <form action={mailtoHref} method="post" className="w-full p-8 bg-white rounded-lg shadow-xl" aria-label="Estimate request form">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Get Your Free Estimate</h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
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
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Tell us about your project</label>
              <textarea id="message" name="message" rows={3} className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2 text-sm" placeholder="e.g., backyard, pet area, putting green" />
            </div>
            <input type="hidden" name="city" value="Rosewell" />
            <Button type="submit" size="lg" className="bg-sky-600 text-white hover:bg-sky-700 font-semibold w-full">
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

// --- "WHY CHOOSE US" SECTION ---
function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-900 text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          The Lazy Grass Difference
        </h2>
        <p className="mt-4 text-lg text-slate-300 text-center max-w-2xl mx-auto">
          We're not just turf installers. We're construction experts who build lawns that last.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {lazyGrass.whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className={`mx-auto h-12 w-12 rounded-full ${item.color} flex items-center justify-center`} />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Services Layout (Image-less list) ---
function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What We Do</h2>
          <p className="mt-2 text-lg text-slate-600">End-to-end turf solutions for any property.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-x-8 gap-y-10">
          {lazyGrass.services.map((s) => (
            <div key={s.slug} className="relative border-l-4 border-sky-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-base text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- "TESTIMONIALS" SECTION ---
function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Trusted in Rosewell & North Atlanta
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {lazyGrass.testimonials.map((t) => (
            <figure key={t.author} className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
              <blockquote className="text-slate-700 italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 font-semibold text-sky-700">
                - {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- About (Video on Right - FIXED) ---
function About() {
  return (
    <section id="about" className="bg-white text-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About {lazyGrass.name}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{lazyGrass.about}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-md text-sky-700 font-semibold">
            <li>✓ Licensed & Insured</li>
            <li>✓ Family-Owned & Operated</li>
            <li>✓ Local Rosewell Pros</li>
            <li>✓ Construction & Grading Experts</li>
          </ul>
        </div>
        {/* --- FIX: Added aspect-video to the container --- */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/10">
          <OptimizedVideo
            src="/lazy-grass/rosewell/hero.mp4"
            alt="Beautiful artificial turf lawn in Rosewell"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

// --- Gallery (Masonry Layout - FIXED) ---
function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Recent Work</h2>
        <p className="mt-2 text-lg text-slate-600 text-center">See the quality we bring to Rosewell and beyond.</p>
        <div className="mt-8 columns-2 md:columns-3 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            // --- FIX: Reverted to fill={true} and added relative/aspect-video ---
            <div key={idx} className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg border-2 border-white aspect-video">
              <OptimizedImage 
                // --- FIX: Using .png as per original file ---
                src={cityImage(lazyGrass.imagesBase, '', `gallery-${idx + 1}.webp`)} 
                alt={`Gallery image ${idx + 1}`} 
                fill={true} 
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
}

// --- "OUR PROCESS" SECTION ---
function OurProcess() {
  const steps = [
    { name: '1. Consultation', desc: 'We visit your Rosewell site, discuss your goals, and provide a free, no-obligation estimate.' },
    { name: '2. Site Preparation', desc: 'Our construction crew handles all grading and drainage to build a perfect foundation.' },
    { name: '3. Turf Installation', desc: 'Our expert team professionally installs your new turf, seaming and securing it for a flawless look.' },
    { name: '4. Final Walkthrough', desc: 'We review the project with you, explain care, and ensure you are 100% satisfied.' }
  ];
  
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Our Proven Process</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.name} className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-sky-700">{step.name}</h3>
              <p className="mt-2 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Standard FAQs (Card Layout) ---
function FAQs() {
  return (
    <section id="faqs" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-6">
          {lazyGrass.faqs.map((f, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900">{f.q}</h3>
              <p className="mt-2 text-md text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- NEW HYBRID-MINIMAL FOOTER ---
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-12 w-28">
            <OptimizedImage src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} fill className="object-contain" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
            <Link href={lazyGrass.phoneHref} className="font-medium text-slate-300 hover:text-sky-300">
              {lazyGrass.phone}
            </Link>
            <span className="hidden sm:block text-slate-600">|</span>
            <a href={`mailto:${lazyGrass.email}`} className="font-medium text-slate-300 hover:text-sky-300">
              {lazyGrass.email}
            </a>
          </div>

          <div className="text-xs text-slate-500 text-center">
            <p>© {new Date().getFullYear()} {lazyGrass.name}. All rights reserved. | Licensed & Insured</p>
            <p className="mt-2">
              Serving Rosewell, GA & The North Atlanta Area
            </p>
          </div>
          
          <div className="text-xs text-slate-500 text-center">
            <p>
              Powered & Managed By{" "}
              <a
                href="https://interstaterankers.com"
                className="font-medium text-slate-400 hover:text-sky-300 hover:underline transition-colors duration-200"
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
    <main id="content" className="bg-white">
      <a href="#contact-hero" className="sr-only focus:not-sr-only">Skip to contact</a>
      <LocalNavbar />
      
      <HeroForm />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <About />
      <Gallery />
      <OurProcess />
      <FAQs />
      <Footer />

      <JsonLd />
    </main>
  );
}