import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import OptimizedVideo from '@/components/ui/optimized-video';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { rcSolutions, cityImage } from '@/lib/rc-solutions';

export const metadata: Metadata = {
  title: `${rcSolutions.name} | Daytona Beach AC, Drywall & Water Heaters`,
  description:
    'Daytona Beach HVAC installation & repair, drywall/painting, and water heater services. Financing available: $0 down, no payments, no interest for 24 months. Call today.',
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/rc-solutions/daytona-beach/' },
  openGraph: {
    title: `${rcSolutions.name} | Daytona Beach AC, Drywall & Water Heaters`,
    description:
      'Trusted AC, drywall/painting, and water heater services in Daytona Beach. Honest pricing, strong guarantees, and financing with $0 down for qualified customers.',
    url: 'https://nearbybizfinder.com/businesses/rc-solutions/daytona-beach/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${rcSolutions.name} | Daytona Beach AC, Drywall & Water Heaters`,
    description:
      'Trusted AC, drywall/painting, and water heater services in Daytona Beach.'
  }
};

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: rcSolutions.name,
    email: rcSolutions.email,
    telephone: '+13214819611',
    areaServed: ['Daytona Beach', rcSolutions.serviceArea, 'Florida'],
    url: 'https://nearbybizfinder.com/businesses/rc-solutions/daytona-beach/',
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
    <header className="sticky top-0 z-40 bg-teal-900/90 backdrop-blur text-white border-b border-teal-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/businesses/rc-solutions/daytona-beach" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <OptimizedImage src="/rc-solutions/logo/logo-on-dark.png" alt={`${rcSolutions.name} logo`} fill className="object-contain" priority />
            </div>
            <span className="font-semibold">{rcSolutions.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#faqs" className="hover:text-yellow-300">FAQs</a>
            <a href="#gallery" className="hover:text-yellow-300">Gallery</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href={rcSolutions.phoneHref} className="hidden sm:inline-flex">
              <Button className="bg-yellow-400 text-teal-900 hover:bg-yellow-300">{rcSolutions.phone}</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-teal-900">Get Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-15">
        <OptimizedVideo
          src="/rc-solutions/daytona-beach/hero.mp4"
          fallbackImage={cityImage(rcSolutions.imagesBase, 'daytona-beach', 'hero-1.png')}
          alt="RC Solutions tech in Daytona Beach"
          className="h-full w-full"
          autoPlay
          muted
          loop
          playsInline
          priority
          poster={cityImage(rcSolutions.imagesBase, 'daytona-beach', 'hero-1.png')}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Daytona Beach HVAC, Drywall & Water Heater Services</h1>
        <p className="mt-4 max-w-2xl text-slate-200">Fast AC repairs, expert installs, drywall & painting, and water heater services. Financing with $0 down for qualified customers.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={rcSolutions.phoneHref}><Button className="bg-yellow-400 text-teal-900 hover:bg-yellow-300">Call {rcSolutions.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-teal-300 text-teal-200">Request Estimate</Button></Link>
        </div>
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
                  src={cityImage(rcSolutions.imagesBase, 'daytona-beach',
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

function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About {rcSolutions.name}</h2>
          <p className="mt-4 text-slate-700">{rcSolutions.about}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['team-1.png','truck-1.png','service-ac-1.png','service-water-heater-1.png'].map((file) => (
            <div key={file} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
              <OptimizedImage src={cityImage(rcSolutions.imagesBase, 'daytona-beach', file)} alt="RC Solutions team and work" fill />
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
              <OptimizedImage src={cityImage(rcSolutions.imagesBase, 'daytona-beach', `gallery-${idx + 1}.jpeg`)} alt={`Gallery image ${idx + 1}`} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Get fast help in Daytona Beach</h2>
          <p className="mt-2 text-slate-200">Call now or request a same-day estimate.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={rcSolutions.phoneHref}><Button className="bg-yellow-400 text-teal-900 hover:bg-yellow-300">Call {rcSolutions.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-teal-300 text-teal-200">Request Estimate</Button></Link>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const mailtoHref = `mailto:${encodeURIComponent(rcSolutions.email)}?subject=${encodeURIComponent('Estimate Request — Daytona Beach')}`;
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
            <input type="hidden" name="city" value="Daytona Beach" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <Button type="submit" className="bg-teal-700 hover:bg-teal-600">Send</Button>
            <Link className="text-teal-700 underline" href={rcSolutions.phoneHref}>Prefer to call? {rcSolutions.phone}</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { name: 'Sanford (Main)', href: '/businesses/rc-solutions' },
    { name: 'Orlando', href: '/businesses/rc-solutions/orlando' },
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
            <p className="mt-2 text-sm">Daytona Beach Service Area</p>
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
      <Services />
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






