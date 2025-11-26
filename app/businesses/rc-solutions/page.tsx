import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { rcSolutions, cityImage } from '@/lib/rc-solutions';
import OptimizedVideo from '@/components/ui/optimized-video';

export const metadata: Metadata = {
  title: 'HVAC Services in Sanford | Expert Emergency Service',
  description:
    'Reliable HVAC and drywall services in Sanford. We offer quick repairs, installations, and emergency HVAC services to keep your house relaxing all year.',
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/rc-solutions/' },
  openGraph: {
    title: 'HVAC Services in Sanford | Expert Emergency Service',
    description:
      'Reliable HVAC and drywall services in Sanford. We offer quick repairs, installations, and emergency HVAC services to keep your house relaxing all year.',
    url: 'https://nearbybizfinder.com/businesses/rc-solutions/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Services in Sanford | Expert Emergency Service',
    description:
      'Reliable HVAC and drywall services in Sanford. We offer quick repairs, installations, and emergency HVAC services to keep your house relaxing all year.'
  }
};

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: rcSolutions.name,
    email: rcSolutions.email,
    telephone: '+13214819611',
    areaServed: ['Sanford', rcSolutions.serviceArea, 'Florida'],
    url: 'https://nearbybizfinder.com/businesses/rc-solutions/',
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+13214819611', contactType: 'customer service' }]
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function LocalNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/businesses/rc-solutions" className="flex items-center gap-2 text-white">
            <div className="relative h-8 w-8">
              <OptimizedImage src="/rc-solutions/logo/logo-on-dark.png" alt={`${rcSolutions.name} logo`} fill className="object-contain" priority />
            </div>
            <span className="font-semibold">{rcSolutions.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href={rcSolutions.phoneHref} className="hidden sm:inline-flex">
              <Button className="bg-amber-500 text-slate-900 hover:bg-amber-400">{rcSolutions.phone}</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900">Get Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
      <div className="absolute inset-0">
        <OptimizedVideo
          src="/rc-solutions/sanford/hero.mp4"
          alt="RC Solutions technician at work in Sanford"
          className="h-full w-full"
          autoPlay
          muted
          loop
          playsInline
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <p className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-500/30">Sanford Main Service Area</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          HVAC, Drywall & Water Heater Pros — Honest. Reliable. Fast.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          AC installs and repairs, drywall/painting, and water heater services across the Sanford area. $0 down, no payments, no interest for 24 months for qualified customers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={rcSolutions.phoneHref}><Button className="bg-amber-500 text-slate-900 hover:bg-amber-400">Call {rcSolutions.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-slate-900">Request Estimate</Button></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-90">
          {['service-ac-1.png','service-water-heater-1.png','service-drywall-1.png','service-painting-1.png'].map((file) => (
            <div key={file} className="relative h-28 rounded-lg overflow-hidden ring-1 ring-white/10">
              <OptimizedImage src={cityImage(rcSolutions.imagesBase, '', file)} alt="Service preview" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Licensed & Insured</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" />24/7 Emergency</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Financing Available</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-400" />Warranty Backed</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rcSolutions.services.map((s) => (
            <div key={s.slug} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <OptimizedImage
                  src={cityImage(rcSolutions.imagesBase, '',
                    s.slug === 'ac' ? 'service-ac-2.png' : s.slug === 'drywall' ? 'service-drywall-1.png' : 'service-water-heater-2.png')}
                  alt={s.title}
                  fill
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingRebates() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-amber-500 to-emerald-600 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold">Financing</h2>
          <p className="mt-2 text-slate-700">
            $0 down, no payments, and no interest for 24 months for qualified customers. We also offer No Credit Financing with Housing Payment History. Our CPAs will guide you with filing for tax credits.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={rcSolutions.phoneHref}><Button>Check Eligibility</Button></Link>
            <Link href="#contact"><Button variant="outline">Get Pre-Qualified</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About {rcSolutions.name}</h2>
          <p className="mt-4 text-slate-700">{rcSolutions.about}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <li>Licensed & Insured</li>
            <li>Upfront Pricing</li>
            <li>Local Sanford Pros</li>
            <li>5-Star Service</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['team-1.png','truck-1.png','service-ac-1.png','service-water-heater-1.png'].map((file) => (
            <div key={file} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
              <OptimizedImage src={cityImage(rcSolutions.imagesBase, '', file)} alt="RC Solutions team and work" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  return (
    <section id="faqs" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {rcSolutions.faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Recent Work</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative h-32 md:h-40 rounded-md overflow-hidden">
              <OptimizedImage src={cityImage(rcSolutions.imagesBase, '', `gallery-${idx + 1}.jpeg`)} alt={`Gallery image ${idx + 1}`} fill />
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
}

function ContactCTA() {
  return (
    <section className="bg-gradient-to-tr from-slate-900 to-cyan-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Need help fast?</h2>
          <p className="mt-2 text-slate-200">Call now or request a same-day estimate. We serve the Sanford area and beyond.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={rcSolutions.phoneHref}><Button className="bg-amber-500 text-slate-900 hover:bg-amber-400">Call {rcSolutions.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-cyan-300 text-cyan-200">Request Estimate</Button></Link>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const mailtoHref = `mailto:${encodeURIComponent(rcSolutions.email)}?subject=${encodeURIComponent('Estimate Request — Sanford')}`;
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Request an Estimate</h2>
        <form action={mailtoHref} method="post" className="mt-6 grid md:grid-cols-2 gap-4" aria-label="Estimate request form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <Input id="name" name="name" required placeholder="Your full name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
            <Input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="(###) ### ####" className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <Input id="email" name="email" type="email" inputMode="email" required placeholder="you@example.com" className="mt-1" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service</label>
            <Input id="service" name="service" list="services" placeholder="Select or type" className="mt-1" />
            <datalist id="services">
              {rcSolutions.services.map((s) => (
                <option key={s.slug} value={s.title} />
              ))}
            </datalist>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Details</label>
            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Tell us about your project (location, timeline, issues)" />
            <input type="hidden" name="city" value="Sanford" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-500">Send</Button>
            <Link className="text-cyan-700 underline" href={rcSolutions.phoneHref}>Prefer to call? {rcSolutions.phone}</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { name: 'Orlando', href: '/businesses/rc-solutions/orlando' },
    { name: 'Daytona Beach', href: '/businesses/rc-solutions/daytona-beach' },
    { name: 'Palm Coast', href: '/businesses/rc-solutions/palm-coast' },
    { name: 'Deland', href: '/businesses/rc-solutions/deland' }
  ];
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="relative h-8 w-8">
                <OptimizedImage src="/rc-solutions/logo/logo-on-dark.png" alt={`${rcSolutions.name} logo`} fill className="object-contain" />
              </div>
              <span className="font-semibold">{rcSolutions.name}</span>
            </div>
            <p className="mt-2 text-sm">Sanford Main Service Area</p>
          </div>
          <ul className="flex flex-wrap gap-4">
            {links.map((l) => (
              <li key={l.href}><Link className="hover:text-white" href={l.href}>{l.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} {rcSolutions.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main id="content" className="min-h-screen">
      <a href="#contact" className="sr-only focus:not-sr-only">Skip to contact</a>
      <LocalNavbar />
      <Hero />
      <TrustStrip />
      <Services />
      <FinancingRebates />
      <About />
      <FAQs />
      <Gallery />
      <ContactCTA />
      <ContactForm />
      <Footer />
      <JsonLd />
    </main>
  );
}






