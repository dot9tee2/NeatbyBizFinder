import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sheWroteMeALetter, cityImage } from '@/lib/she-wrote-me-a-letter';
import OptimizedVideo from '@/components/ui/optimized-video';

const images = [
    {
      src: 'mailbox-installation-cape-coral-florida.png',
      alt: 'Mailbox Installation in Cape Coral, Florida',
    },
    {
      src: 'mailbox-replacement-cape-coral-florida.png',
      alt: 'Mailbox Replacement in Cape Coral, Florida',
    },
    {
      src: 'custom-painted-mailbox-cape-coral-florida.png',
      alt: 'Custom Painted Mailbox in Cape Coral, Florida',
    },
    {
      src: 'mailbox-repair-cape-coral-florida.png',
      alt: 'Mailbox Repair Service in Cape Coral, Florida',
    },
    {
      src: 'powder-coated-metal-mailbox-cape-coral-florida.png',
      alt: 'Powder Coated Metal Mailbox in Cape Coral, Florida',
    },
  ];

export const metadata: Metadata = {
    title: `${sheWroteMeALetter.name} | She Wrote Me a Letter`,
  description:
    'Cape Coral-area mailbox installation & replacement services. Custom designs, durable materials, and USPS-compliant installations. Call today.',
  alternates: { canonical: 'https://nearbybizfinder.com/businesses/she-wrote-me-a-letter/' },
  openGraph: {
    title: `${sheWroteMeALetter.name} | She Wrote Me a Letter`,
    description:
      'Professional mailbox installation & replacement services in Cape Coral, FL. Custom designs, durable materials, and USPS-compliant installations.',
    url: 'https://nearbybizfinder.com/businesses/she-wrote-me-a-letter/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${sheWroteMeALetter.name} | She Wrote Me a Letter`,
    description:
      'Professional mailbox installation & replacement services in Cape Coral, FL.'
  }
};

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: sheWroteMeALetter.name,
    email: sheWroteMeALetter.email,
    telephone: '+13214819611',
    areaServed: ['Cape Coral', sheWroteMeALetter.serviceArea, 'Florida'],
    url: 'https://nearbybizfinder.com/businesses/she-wrote-me-a-letter/',
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
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b" style={{ backgroundColor: 'rgba(15, 15, 15, 0.8)' }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
        <Link href="/businesses/she-wrote-me-a-letter/" className="flex items-center gap-2 text-white">
            <div className="relative h-16 w-48">
              <OptimizedImage src="/she-wrote-me-a-letter/logo/logo-on-dark.png" alt={`${sheWroteMeALetter.name} logo`} fill className="object-contain" priority />
            </div>
            {/* <span className="font-semibold">{sheWroteMeALetter.name}</span> */}
          </Link>
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href={sheWroteMeALetter.phoneHref} className="hidden sm:inline-flex">
              <Button className="text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#E91E63' }}>{sheWroteMeALetter.phone}</Button>
            </Link>
            <Link href="#contact">
              <Button  variant="outline"
              className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white">Request Estimate</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white" style={{ background: 'linear-gradient(to bottom right, #0F0F0F, #1E1E1E, #0F0F0F)' }}>
      <div className="absolute inset-0">
        <OptimizedVideo
          src="/she-wrote-me-a-letter/cape-coral/hero.mp4"
          alt="She Wrote Me a Letter technician at work in Cape Coral"
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
        <p className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset" style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)', color: '#E91E63', borderColor: 'rgba(233, 30, 99, 0.3)' }}>Cape Coral Main Service Area</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Professional Mailbox Installation & Repair Services
        </h1>
        <p className="mt-4 max-w-2xl text-gray-200">
          Expert mailbox installation, replacement, and repair services in Cape Coral, FL. Custom designs, durable materials, and USPS-compliant installations. Call today for a free estimate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={sheWroteMeALetter.phoneHref}><Button className="text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#E91E63' }}>Call {sheWroteMeALetter.phone}</Button></Link>
          <Link href="#contact"><Button  variant="outline"
              className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white">Request Estimate</Button></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-90">
          {['powder-coated-metal-mailbox-cape-coral.png','brick-stone-mailbox-installation-cape-coral.png','subdivision-mailboxes-installation-cape-coral.png','mailbox-installation-cape-coral-florida.png'].map((file) => (
            <div key={file} className="relative h-28 rounded-lg overflow-hidden ring-1 ring-white/10">
              <OptimizedImage src={cityImage(sheWroteMeALetter.imagesBase, '', file)} alt="Service preview" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="text-gray-300" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F59E0B' }} />24/7 Emergency</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#10B981' }} />Licensed & Insured</div>  
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#E91E63' }} />Affordable Pricing </div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#E91E63' }} />Quality Service</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0F0F0F' }}>Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sheWroteMeALetter.services.map((s) => (
            <div key={s.slug} className="rounded-xl border p-6 hover:shadow-lg transition-all hover:border-[#E91E63]/50" style={{ borderColor: '#E5E7EB' }}>
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
              <OptimizedImage
                src={cityImage(sheWroteMeALetter.imagesBase, '', s.slug === 'Mailbox Replacement' ? 'mailbox-replacement-cape-coral-florida.png' : s.slug === 'Mailbox Installation' ? 'mailbox-installation-cape-coral-florida.png' : s.slug === 'New Sub-Division Mailboxes' ? 'subdivision-mailboxes-installation-cape-coral.png' : s.slug === 'Brick/Stone Mailboxes' ? 'brick-stone-mailbox-installation-cape-coral.png' : 'powder-coated-metal-mailbox-cape-coral.png')}
                alt={s.title}
                fill
              />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#0F0F0F' }}>{s.title}</h3>
              <p className="mt-2 text-sm" style={{ color: '#4B5563' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
    className="text-white"
    style={{ background: "linear-gradient(to right, #E91E63, #1E1E1E)" }}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="bg-white/90 backdrop-blur rounded-xl p-6 md:p-8"
        style={{ color: "#0F0F0F" }}
      >
        <h2
          className="text-xl md:text-2xl font-bold"
          style={{ color: "#0F0F0F" }}
        >
          Why Choose Us?
        </h2>
        <p className="mt-2" style={{ color: "#374151" }}>
  From HOA-approved mailbox systems to custom brick installations,{" "}
  <strong>She Wrote Me a Letter</strong> is Cape Coral’s go-to expert for
  reliable, USPS-compliant mailbox solutions. Our team takes pride in
  delivering precision workmanship, durable materials, and a local service
  experience built on trust and quality that lasts for years.
</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={sheWroteMeALetter.phoneHref}>
            <Button
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#E91E63" }}
            >
              Contact Us
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white"
            >
              Request Estimate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  

  );
}

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0F0F0F' }}>About {sheWroteMeALetter.name}</h2>
          <p className="mt-4" style={{ color: '#374151' }}>{sheWroteMeALetter.about}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm" style={{ color: '#374151' }}>
            <li>Licensed & Insured</li>
            <li>Upfront Pricing</li>
            <li>Local Cape Coral Pros</li>
            <li>5-Star Service</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['mailbox-installation-team-cape-coral-florida.png','technician-installing-mailbox-post-cape-coral.png','brick-metal-mailboxes-cape-coral-florida.png','mailbox-company-owner-with-client-cape-coral.png'].map((file) => (
            <div key={file} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
              <OptimizedImage src={cityImage(sheWroteMeALetter.imagesBase, '', file)} alt="She Wrote Me a Letter team and work" fill />
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
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0F0F0F' }}>FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {sheWroteMeALetter.faqs.map((f, i) => (
            <div key={i} className="rounded-lg border p-4 hover:border-[#E91E63]/50 transition-colors" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="font-semibold" style={{ color: '#0F0F0F' }}>{f.q}</h3>
              <p className="mt-2 text-sm" style={{ color: '#374151' }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0F0F0F' }}>Recent Work</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative h-32 md:h-40 rounded-md overflow-hidden">
              <OptimizedImage src={cityImage(sheWroteMeALetter.imagesBase, '', `gallery-${idx + 1}.png`)} alt={`Gallery image ${idx + 1}`} fill />
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
}

function ContactCTA() {
  return (
    <section className="text-white" style={{ background: 'linear-gradient(to top right, #0F0F0F, #1E1E1E)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Need help fast?</h2>
          <p className="mt-2 text-gray-200">Call now or request a same-day estimate. We serve the Cape Coral area and beyond.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={sheWroteMeALetter.phoneHref}><Button className="text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#E91E63' }}>Call {sheWroteMeALetter.phone}</Button></Link>
          <Link href="#contact"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-[#E91E63]">Request Estimate</Button></Link>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const mailtoHref = `mailto:${encodeURIComponent(sheWroteMeALetter.email)}?subject=${encodeURIComponent('Estimate Request — Cape Coral')}`;
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0F0F0F' }}>Request an Estimate</h2>
        <form action={mailtoHref} method="post" className="mt-6 grid md:grid-cols-2 gap-4" aria-label="Estimate request form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium" style={{ color: '#374151' }}>Name</label>
            <Input id="name" name="name" required placeholder="Your full name" className="mt-1" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium" style={{ color: '#374151' }}>Phone</label>
            <Input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="(###) ### ####" className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#374151' }}>Email</label>
            <Input id="email" name="email" type="email" inputMode="email" required placeholder="you@example.com" className="mt-1" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium" style={{ color: '#374151' }}>Service</label>
            <Input id="service" name="service" list="services" placeholder="Select or type" className="mt-1" />
            <datalist id="services">
              {sheWroteMeALetter.services.map((s) => (
                <option key={s.slug} value={s.title} />
              ))}
            </datalist>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#374151' }}>Details</label>
            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Tell us about your project (location, timeline, issues)" />
            <input type="hidden" name="city" value="Cape Coral" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <Button type="submit" className="text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#E91E63' }}>Send</Button>
            <Link className="underline hover:opacity-80 transition-opacity" style={{ color: '#E91E63' }} href={sheWroteMeALetter.phoneHref}>Prefer to call? {sheWroteMeALetter.phone}</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { name: 'Cape Coral', href: '/businesses/she-wrote-me-a-letter/' }
  ];
  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="relative h-16 w-48">
                <OptimizedImage src="/she-wrote-me-a-letter/logo/logo-on-dark.png" alt={`${sheWroteMeALetter.name} logo`} fill className="object-contain" />
              </div>
              {/* <span className="font-semibold">{sheWroteMeALetter.name}</span> */}
            </div>
            <p className="mt-2 text-sm">Cape Coral Main Service Area</p>
          </div>
          <ul className="flex flex-wrap gap-4">
            {links.map((l) => (
              <li key={l.href}><Link className="hover:text-white transition-colors" href={l.href}>{l.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-xs" style={{ color: '#9CA3AF' }}>© {new Date().getFullYear()} {sheWroteMeALetter.name}. All rights reserved. Powered by <Link className="text-[#E91E63] hover:text-white transition-colors" href="https://interstaterankers.com">InterState Rankers</Link></div>
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
      <WhyChooseUs />
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






