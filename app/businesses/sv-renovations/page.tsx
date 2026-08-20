'use client'

/* ─────────────────────────────────────────────
   S&V RENOVATIONS, LLC — North Little Rock, AR
   Home-base landing page · light "brick & steel" theme

   PLACEHOLDERS TO CONFIRM WITH CLIENT BEFORE THIS GOES LIVE
   (shown in-page as bracketed text so they're easy to find/replace):
     - [X]+ years in business → sources conflict: the company's own site
       claims "since 2006," while state contractor records show the LLC
       was formed in 2018. Confirm the real founding year before publishing.
   Do not remove the brackets until the client confirms the real value.
───────────────────────────────────────────── */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
    Phone, Mail, MapPin, ShieldCheck, CheckCircle,
    Layers, Building2, Droplets, Home, Paintbrush, Blocks,
    ChevronDown, ArrowRight, Sparkles, Award, Wrench,
} from 'lucide-react'

const SITE_URL = 'https://nearbybizfinder.com/businesses/sv-renovations/'
const PHONE = '(501) 960-1352'
const PHONE_HREF = 'tel:+15019601352'
const EMAIL = 'svrenovationsllc@gmail.com'
const ADDRESS = '5700 Dublin Avenue, North Little Rock, AR 72118'

// Stock photography (Pexels — free to use, no attribution required). Swap
// for real client/job-site photos whenever they're available.
const HERO_IMG = 'https://images.pexels.com/photos/29735767/pexels-photo-29735767.jpeg'
const WHY_US_IMG = 'https://images.pexels.com/photos/17410739/pexels-photo-17410739.jpeg'
const LOCAL_TIP_IMG = 'https://images.pexels.com/photos/5587941/pexels-photo-5587941.jpeg'

const services = [
    {
        name: 'Foundation Repair & House Leveling',
        desc: 'Cracked slabs, sinking piers, sticking doors, or floors that aren’t level? We diagnose and repair foundation movement caused by shifting soil, including crawl space piers and interior/exterior crack repair.',
        icon: Layers,
        tags: ['House Leveling', 'Crawl Space Piers', 'Crack Repair'],
    },
    {
        name: 'Foundation Construction',
        desc: 'Adding a room or building from the ground up? We pour footings and slabs engineered to hold up on Central Arkansas soil, for additions, garages and new structures alike.',
        icon: Building2,
        tags: ['New Footings', 'Slabs', 'Additions'],
    },
    {
        name: 'French Drain & Drainage Installation',
        desc: 'Standing water in the yard or a damp crawl space? We install French drains, grading and waterproofing that route water away from your foundation before it becomes a repair bill.',
        icon: Droplets,
        tags: ['French Drains', 'Waterproofing', 'Grading'],
    },
    {
        name: 'Kitchen & Bathroom Remodeling',
        desc: 'From a full gut remodel to a tile and fixture refresh, we handle the layout, plumbing coordination and finish work to get your kitchen or bath done right.',
        icon: Home,
        tags: ['Kitchens', 'Bathrooms', 'Tile'],
    },
    {
        name: 'Painting & Drywall',
        desc: 'Interior and exterior painting plus drywall hanging, finishing and repair. We prep it properly first, so the paint job actually lasts.',
        icon: Paintbrush,
        tags: ['Interior', 'Exterior', 'Drywall Repair'],
    },
    {
        name: 'Siding, Fencing, Decks & Flooring',
        desc: 'Exterior upgrades and finish work that round out a renovation — siding replacement, fencing, deck builds, and flooring or tile installation.',
        icon: Blocks,
        tags: ['Siding', 'Fencing', 'Decks', 'Flooring'],
    },
]

const whyUs = [
    {
        icon: MapPin,
        title: 'Based Right Here in North Little Rock',
        desc: 'Our crew works out of 5700 Dublin Avenue — we know the clay soil, the older housing stock and the neighborhoods because we’re in them every week.',
    },
    {
        icon: CheckCircle,
        title: 'Free, No-Pressure Estimates',
        desc: 'We’ll come out, inspect the issue, and give you a written quote before any work starts. No surprise charges tacked on later.',
    },
    {
        icon: ShieldCheck,
        title: 'Licensed & Insured',
        desc: 'Every job, from a single-room repaint to a full foundation repair, is covered by proper licensing and insurance.',
    },
    {
        icon: Award,
        title: '30-Day Workmanship Warranty',
        desc: 'If something about the work isn’t right, we come back and make it right — covered by our 30-day warranty on workmanship.',
    },
    {
        icon: Sparkles,
        title: '[X]+ Years Combined Experience',
        desc: 'Our crew brings years of hands-on renovation and foundation experience to every job. [Confirm exact years in business with client.]',
    },
]

const processSteps = [
    { n: '01', t: 'Call or Text', d: 'Tell us what’s going on — a cracked slab, a leaky crawl space, a room you want redone.' },
    { n: '02', t: 'Free On-Site Inspection', d: 'We come look at the actual problem and take real measurements, not guesses.' },
    { n: '03', t: 'Written, Upfront Quote', d: 'You get an exact price before any work begins — no changing numbers later.' },
    { n: '04', t: 'Renovate & Warranty', d: 'We do the work, clean up after ourselves, and back it with our 30-day warranty.' },
]

const faqs = [
    {
        q: 'Do you offer free estimates in North Little Rock?',
        a: 'Yes. Call or text (501) 960-1352 and we’ll schedule a free, no-obligation inspection and written quote.',
    },
    {
        q: 'What causes foundation problems in North Little Rock homes?',
        a: 'Much of Pulaski County sits on expansive clay soil that swells when it’s wet and shrinks when it’s dry. That constant movement is what cracks slabs, settles piers, and pulls doors and windows out of square — especially in the area’s many homes built before 1970.',
    },
    {
        q: 'Are you licensed and insured?',
        a: 'Yes, S&V Renovations is licensed and carries insurance on every project, residential and commercial.',
    },
    {
        q: 'Do you offer a warranty on your work?',
        a: 'Yes — every job is backed by a 30-day warranty on workmanship. Bundle discounts are also available when you combine multiple services.',
    },
    {
        q: 'What areas do you serve besides North Little Rock?',
        a: 'We work throughout Pulaski County and within roughly 50 miles of our Dublin Avenue base, including dedicated service for Hot Springs and Conway (see our service area below).',
    },
    {
        q: 'Are you available on weekends?',
        a: 'Our crews work Monday–Friday, 7am–5pm and Saturday, 8am–3pm. We accept calls and texts for free quotes seven days a week, and offer special pricing for rush jobs.',
    },
]

const zips = ['72114', '72116', '72117', '72118', '72120']
const neighborhoods = ['Park Hill', 'Lakewood', 'Argenta', 'Indian Hills', 'Rose City', 'Levy', 'Sylvan Hills', 'Amboy']

function useReveal(rootSelector: string) {
    useEffect(() => {
        const els = document.querySelectorAll(rootSelector)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('svr-visible')
                        io.unobserve(e.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [rootSelector])
}

export default function SVRenovationsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const [scrolled, setScrolled] = useState(false)
    useReveal('.svr-reveal')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
        name: 'S&V Renovations, LLC',
        description:
            'Foundation repair, drainage, kitchen and bathroom remodeling, painting, drywall and home renovation in North Little Rock, AR.',
        url: SITE_URL,
        image: HERO_IMG,
        telephone: PHONE,
        email: EMAIL,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '5700 Dublin Avenue',
            addressLocality: 'North Little Rock',
            addressRegion: 'AR',
            postalCode: '72118',
            addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 34.7695, longitude: -92.2671 },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: { '@type': 'GeoCoordinates', latitude: 34.7695, longitude: -92.2671 },
            geoRadius: '80467', // 50 miles in meters
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '17:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '08:00',
                closes: '15:00',
            },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Foundation & Renovation Services',
            itemListElement: services.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.name, description: s.desc },
            })),
        },
    }

    const breadcrumbStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
            { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
            { '@type': 'ListItem', position: 3, name: 'S&V Renovations, LLC', item: SITE_URL },
        ],
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }

    return (
        <>
            <Script id="svr-nlr-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Script id="svr-nlr-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <Script id="svr-nlr-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --svr-bg: #F7F2E9;
          --svr-surface: #FFFFFF;
          --svr-surface2: #EFE4D2;
          --svr-ink: #251C13;
          --svr-ink2: #5B4E3F;
          --svr-muted: rgba(37,28,19,0.55);
          --svr-brick: #B5482A;
          --svr-brick-d: #973A20;
          --svr-brick-l: #CB5B3B;
          --svr-steel: #2E4057;
          --svr-steel-l: #3E5573;
          --svr-border: rgba(37,28,19,0.12);
          --svr-border2: rgba(37,28,19,0.2);

          --ff-disp: 'Space Grotesk', sans-serif;
          --ff-body: 'Inter', sans-serif;
        }

        .svr-root { font-family: var(--ff-body); background: var(--svr-bg); color: var(--svr-ink); overflow-x: hidden; }
        .svr-h { font-family: var(--ff-disp); letter-spacing: -0.01em; }

        .svr-reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .svr-visible { opacity: 1; transform: translateY(0); }

        .svr-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 90; padding: .9rem 1.5rem; display: flex; align-items: center; justify-content: space-between; background: rgba(247,242,233,0); border-bottom: 1px solid transparent; transition: background .3s, border-color .3s, box-shadow .3s; }
        .svr-nav.scrolled { background: rgba(247,242,233,.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--svr-border); box-shadow: 0 1px 14px rgba(37,28,19,.06); }

        .svr-hero-bg { background: radial-gradient(ellipse 60% 60% at 85% 12%, rgba(181,72,42,.10) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 90%, rgba(46,64,87,.10) 0%, transparent 60%), var(--svr-bg); }
        .svr-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--svr-border) 1px, transparent 1px), linear-gradient(90deg, var(--svr-border) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 85% 85% at 50% 40%, black 15%, transparent 100%); pointer-events: none; }

        @keyframes svr-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .svr-marquee-track { display: flex; width: max-content; animation: svr-marquee 32s linear infinite; white-space: nowrap; }

        .svr-card { background: var(--svr-surface); border: 1px solid var(--svr-border); border-radius: 16px; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .svr-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(37,28,19,.10); border-color: rgba(181,72,42,.35); }

        .svr-faq { background: var(--svr-surface); border: 1px solid var(--svr-border); border-radius: 12px; overflow: hidden; transition: border-color .25s; }
        .svr-faq.open { border-color: var(--svr-brick); }

        .svr-btn-primary { background: var(--svr-brick); color: #fff; box-shadow: 0 6px 18px rgba(181,72,42,.32); }
        .svr-btn-primary:hover { background: var(--svr-brick-d); }
        .svr-btn-outline { background: transparent; border: 1.5px solid var(--svr-border2); color: var(--svr-ink); }
        .svr-btn-outline:hover { border-color: var(--svr-brick); color: var(--svr-brick); }

        .svr-chip { font-size: .74rem; font-weight: 600; letter-spacing: .02em; background: var(--svr-surface2); border: 1px solid var(--svr-border); border-radius: 999px; padding: .35rem .85rem; color: var(--svr-ink2); }
      `}</style>

            <div className="svr-root">
                {/* ─── NAV ─── */}
                <nav className={`svr-nav ${scrolled ? 'scrolled' : ''}`}>
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <a href="#home" className="flex items-center gap-2.5">
                            <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white svr-h" style={{ background: 'var(--svr-brick)' }}>S&V</span>
                            <span className="font-extrabold tracking-tight svr-h" style={{ color: 'var(--svr-ink)' }}>S&amp;V <span className="font-normal">Renovations</span></span>
                        </a>
                        <div className="hidden md:flex items-center gap-7 text-sm font-semibold" style={{ color: 'var(--svr-ink2)' }}>
                            <a href="#services" className="hover:text-[--svr-brick] transition-colors">Services</a>
                            <a href="#why" className="hover:text-[--svr-brick] transition-colors">Why S&amp;V</a>
                            <a href="#area" className="hover:text-[--svr-brick] transition-colors">Service Area</a>
                            <a href="#faq" className="hover:text-[--svr-brick] transition-colors">FAQ</a>
                        </div>
                        <a href={PHONE_HREF} className="svr-btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors">
                            <Phone size={15} /> {PHONE}
                        </a>
                    </div>
                </nav>

                {/* ─── HERO ─── */}
                <section id="home" className="svr-hero-bg relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
                    <div className="svr-grid" />
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7">
                                <div className="svr-reveal inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'rgba(181,72,42,.10)', color: 'var(--svr-brick-d)' }}>
                                    <MapPin size={13} /> Based in North Little Rock, AR &middot; 72118
                                </div>
                                <h1 className="svr-reveal svr-h font-bold leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                                    Foundation Repair &amp; Renovation in <span style={{ color: 'var(--svr-brick)' }}>North Little Rock</span>, Built to Last
                                </h1>
                                <p className="svr-reveal text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--svr-ink2)' }}>
                                    Cracked slab, a wet crawl space, or a kitchen that’s overdue for a redo? S&amp;V Renovations handles foundation repair, drainage, remodeling, painting and drywall for homeowners across North Little Rock and within about 50 miles of our Dublin Avenue base.
                                </p>
                                <div className="svr-reveal flex flex-col sm:flex-row gap-4 mb-10">
                                    <a href={PHONE_HREF} className="svr-btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Phone size={18} /> Call {PHONE}
                                    </a>
                                    <a href={`mailto:${EMAIL}`} className="svr-btn-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Mail size={18} /> Get a Free Quote
                                    </a>
                                </div>
                                <div className="svr-reveal flex flex-wrap gap-x-8 gap-y-3 pt-6" style={{ borderTop: '1px solid var(--svr-border)' }}>
                                    {['Licensed & Insured', '30-Day Warranty', 'Free Estimates', '50-Mile Service Radius'].map((b) => (
                                        <div key={b} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--svr-brick)' }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--svr-ink2)' }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — hero photo */}
                            <div className="svr-reveal lg:col-span-5">
                                <div className="svr-card overflow-hidden relative" style={{ borderColor: 'var(--svr-ink)' }}>
                                    <div className="relative h-72 sm:h-96">
                                        <Image
                                            src={HERO_IMG}
                                            alt="Contractor building a home foundation in North Little Rock, AR"
                                            fill
                                            priority
                                            quality={85}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(37,28,19,.85) 0%, transparent 55%)' }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 p-6" style={{ background: 'var(--svr-ink)' }}>
                                        {[
                                            { icon: Layers, label: 'Foundation Repair' },
                                            { icon: Droplets, label: 'Drainage' },
                                            { icon: Home, label: 'Kitchen & Bath' },
                                            { icon: Paintbrush, label: 'Painting' },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center gap-2.5">
                                                <item.icon size={18} style={{ color: 'var(--svr-brick-l)' }} />
                                                <span className="text-xs font-semibold text-white/85">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between px-6 pb-6" style={{ background: 'var(--svr-ink)' }}>
                                        <div>
                                            <div className="text-2xl font-extrabold text-white svr-h">50 mi</div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-white/50">From North Little Rock</div>
                                        </div>
                                        <ShieldCheck size={26} style={{ color: 'var(--svr-steel-l)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── MARQUEE ─── */}
                <div style={{ background: 'var(--svr-ink)', padding: '.85rem 0', overflow: 'hidden' }}>
                    <div className="svr-marquee-track">
                        {[0, 1].map((j) => (
                            <span key={j} className="flex items-center">
                                {['Foundation Repair', 'French Drain Installation', 'Kitchen & Bath Remodeling', 'Painting & Drywall', 'Siding & Fencing', 'Serving North Little Rock AR'].map((t) => (
                                    <span key={`${j}-${t}`} className="flex items-center gap-6 px-8 text-[.72rem] font-bold uppercase tracking-[0.18em] text-white/70">
                                        {t}
                                        <span className="w-1 h-1 rounded-full" style={{ background: 'var(--svr-brick-l)' }} />
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ─── SERVICES ─── */}
                <section id="services" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="svr-reveal max-w-2xl mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--svr-brick)' }}>What We Do</span>
                            <h2 className="svr-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Services We Handle in North Little Rock</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--svr-ink2)' }}>
                                One crew, from the ground up: foundation and drainage work, plus the remodeling, painting and finish trades that come after.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <div key={s.name} className="svr-card svr-reveal p-7">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(181,72,42,.10)' }}>
                                        <s.icon size={22} style={{ color: 'var(--svr-brick)' }} />
                                    </div>
                                    <h3 className="svr-h font-bold text-lg mb-2">{s.name}</h3>
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--svr-ink2)' }}>{s.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {s.tags.map((t) => <span key={t} className="svr-chip">{t}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY US ─── */}
                <section id="why" style={{ background: 'var(--svr-surface2)', borderTop: '1px solid var(--svr-border)', borderBottom: '1px solid var(--svr-border)' }} className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
                        <div className="lg:col-span-4">
                            <span className="svr-reveal text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--svr-brick)' }}>Why North Little Rock Calls S&amp;V</span>
                            <h2 className="svr-reveal svr-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Built on a Solid Foundation</h2>
                            <p className="svr-reveal mt-4 text-base leading-relaxed mb-6" style={{ color: 'var(--svr-ink2)' }}>
                                We start with the foundation because everything else in a home depends on it. That same attention carries through the remodeling, painting and finish work we do after.
                            </p>
                            <div className="svr-reveal svr-card relative h-56 overflow-hidden">
                                <Image
                                    src={WHY_US_IMG}
                                    alt="Construction crew working on a foundation for a housing development near North Little Rock, AR"
                                    fill
                                    quality={80}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
                            {whyUs.map((item) => (
                                <div key={item.title} className="svr-reveal svr-card p-6 flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,64,87,.12)' }}>
                                        <item.icon size={19} style={{ color: 'var(--svr-steel)' }} />
                                    </div>
                                    <div>
                                        <h3 className="svr-h font-bold text-base mb-1.5">{item.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--svr-ink2)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── LOCAL TIP (E-E-A-T) ─── */}
                <section className="py-16 sm:py-20 px-6">
                    <div className="svr-reveal max-w-4xl mx-auto svr-card overflow-hidden flex flex-col sm:flex-row" style={{ background: 'var(--svr-ink)', borderColor: 'var(--svr-ink)' }}>
                        <div className="relative h-48 sm:h-auto sm:w-64 flex-shrink-0">
                            <Image
                                src={LOCAL_TIP_IMG}
                                alt="Row of suburban homes in a North Little Rock, AR neighborhood"
                                fill
                                quality={80}
                                sizes="(max-width: 640px) 100vw, 256px"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 sm:p-10 flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: 'rgba(181,72,42,.16)' }}>
                                <Wrench size={26} style={{ color: 'var(--svr-brick-l)' }} />
                            </div>
                            <div>
                                <h2 className="svr-h text-xl sm:text-2xl font-bold text-white mb-2">Local Tip: Why North Little Rock Foundations Move</h2>
                                <p className="text-white/70 leading-relaxed">
                                    Much of Pulaski County sits on expansive clay soil that swells when it soaks up spring and fall rain, then shrinks back during dry summer stretches. That constant push-and-pull is what cracks slabs, settles piers, and pulls doors and windows out of square — and it hits harder in North Little Rock’s older neighborhoods, where the typical home was built more than 50 years ago. Keeping gutters clear and grading water away from the foundation is the cheapest insurance you have; when that’s not enough, a French drain or pier system usually is.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS ─── */}
                <section className="py-16 sm:py-24 px-6" style={{ background: 'var(--svr-surface2)', borderTop: '1px solid var(--svr-border)', borderBottom: '1px solid var(--svr-border)' }}>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="svr-reveal svr-h text-center font-bold tracking-tight mb-14" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>How a Project Comes Together</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step) => (
                                <div key={step.n} className="svr-reveal text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-extrabold text-lg text-white svr-h" style={{ background: 'var(--svr-brick)' }}>{step.n}</div>
                                    <h3 className="svr-h font-bold text-base mb-2">{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--svr-ink2)' }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SERVICE AREA ─── */}
                <section id="area" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="svr-reveal max-w-2xl mb-10">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--svr-brick)' }}>Service Area</span>
                            <h2 className="svr-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Neighborhoods We Serve</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--svr-ink2)' }}>
                                We cover all of North Little Rock and greater Pulaski County, plus dedicated coverage within about 50 miles of our Dublin Avenue base.
                            </p>
                        </div>
                        <div className="svr-reveal svr-card p-7 mb-6">
                            <h3 className="svr-h font-bold text-base mb-4">North Little Rock Neighborhoods</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {neighborhoods.map((n) => <span key={n} className="svr-chip">{n}</span>)}
                            </div>
                            <h3 className="svr-h font-bold text-base mb-4">ZIP Codes</h3>
                            <div className="flex flex-wrap gap-2">
                                {zips.map((z) => <span key={z} className="svr-chip" style={{ background: 'rgba(181,72,42,.10)', color: 'var(--svr-brick-d)', borderColor: 'transparent' }}>{z}</span>)}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Link href="/businesses/sv-renovations/hot-springs/" className="svr-reveal svr-card p-7 flex flex-col justify-between group" style={{ background: 'var(--svr-steel)', borderColor: 'var(--svr-steel)' }}>
                                <div>
                                    <MapPin size={22} className="text-white/80 mb-4" />
                                    <h3 className="svr-h font-bold text-lg text-white mb-2">Also Serving Hot Springs</h3>
                                    <p className="text-sm text-white/75 leading-relaxed">Foundation and drainage work built for Garland County&apos;s hillside lots.</p>
                                </div>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:gap-2.5 transition-all">
                                    View Hot Springs page <ArrowRight size={15} />
                                </span>
                            </Link>
                            <Link href="/businesses/sv-renovations/conway/" className="svr-reveal svr-card p-7 flex flex-col justify-between group" style={{ background: 'var(--svr-brick)', borderColor: 'var(--svr-brick)' }}>
                                <div>
                                    <MapPin size={22} className="text-white/80 mb-4" />
                                    <h3 className="svr-h font-bold text-lg text-white mb-2">Also Serving Conway</h3>
                                    <p className="text-sm text-white/75 leading-relaxed">New-construction foundations and remodels for Arkansas&apos;s fastest-growing city.</p>
                                </div>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:gap-2.5 transition-all">
                                    View Conway page <ArrowRight size={15} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section id="faq" className="py-20 sm:py-28 px-6" style={{ background: 'var(--svr-surface2)', borderTop: '1px solid var(--svr-border)', borderBottom: '1px solid var(--svr-border)' }}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="svr-reveal svr-h text-center font-bold tracking-tight mb-12" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>North Little Rock FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((f, i) => (
                                <div key={i} className={`svr-reveal svr-faq ${openFaq === i ? 'open' : ''}`}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left font-bold">
                                        {f.q}
                                        <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ color: 'var(--svr-brick)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} />
                                    </button>
                                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '260px' : '0px' }}>
                                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed" style={{ color: 'var(--svr-ink2)' }}>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FINAL CTA ─── */}
                <section id="contact" className="py-20 sm:py-28 px-6">
                    <div className="svr-reveal max-w-4xl mx-auto text-center rounded-2xl p-10 sm:p-16" style={{ background: 'var(--svr-brick)' }}>
                        <h2 className="svr-h font-bold tracking-tight text-white mb-4" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>Something Need Fixing? Call S&amp;V.</h2>
                        <p className="text-white/80 text-lg mb-9 max-w-xl mx-auto">North Little Rock&apos;s foundation and renovation crew, seven days a week for quotes. Call or email to book.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base transition-transform hover:-translate-y-0.5" style={{ background: 'var(--svr-ink)', color: '#fff' }}>
                                <Phone size={18} /> Call {PHONE}
                            </a>
                            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-colors">
                                <Mail size={18} /> Email Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ─── FOOTER ─── */}
                <footer className="pt-16 pb-28 sm:pb-16 px-6" style={{ background: 'var(--svr-ink)' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white svr-h" style={{ background: 'var(--svr-brick-l)' }}>S&V</span>
                                <span className="svr-h font-bold text-white">S&amp;V Renovations</span>
                            </div>
                            <p className="text-sm text-white/55 leading-relaxed">Foundation repair, drainage and full home renovation based in North Little Rock, AR, serving a 50-mile radius across Central Arkansas.</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--svr-brick-l)' }}>Contact</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a></li>
                                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
                                <li>{ADDRESS}</li>
                                <li>Mon–Fri 7am–5pm &middot; Sat 8am–3pm &middot; Sun closed</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--svr-brick-l)' }}>Service Areas</h4>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li>North Little Rock, AR (72114, 72116, 72117, 72118, 72120)</li>
                            </ul>
                            <Link href="/businesses/sv-renovations/hot-springs/" className="inline-block mt-4 text-sm font-bold" style={{ color: 'var(--svr-steel-l)' }}>
                                See Hot Springs page &rarr;
                            </Link>
                            <br />
                            <Link href="/businesses/sv-renovations/conway/" className="inline-block mt-2 text-sm font-bold" style={{ color: 'var(--svr-steel-l)' }}>
                                See Conway page &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40" style={{ borderTop: '1px solid rgba(255,255,255,.10)' }}>
                        <span>Powered by NearbyBizFinder</span>
                        <div className="flex gap-6">
                            <Link href="/privacy/" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                            <Link href="/terms/" className="hover:text-white/70 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </footer>

                {/* ─── STICKY MOBILE CALL BAR ─── */}
                <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden" style={{ background: 'var(--svr-brick)' }}>
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold text-white">
                        <Phone size={18} /> Call {PHONE} Now
                    </a>
                </div>
            </div>
        </>
    )
}
