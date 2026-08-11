'use client'

/* ─────────────────────────────────────────────
   ARK APPLIANCE SERVICES LLC — Mandarin, FL
   Home-base landing page · light "coastal local" theme

   PLACEHOLDERS TO CONFIRM WITH CLIENT BEFORE THIS GOES LIVE
   (shown in-page as bracketed text so they're easy to find/replace):
     - [X]+ years in business          → "Why Ark" section
     - $[XX] diagnostic fee            → "Why Ark" section + FAQ
     - [warranty length/terms]         → "Why Ark" section + FAQ
   Do not remove the brackets until the client confirms real values.
───────────────────────────────────────────── */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
    Phone, Mail, MapPin, ShieldCheck, CheckCircle,
    Refrigerator, Waves, Flame, Droplets, Timer, Award,
    ChevronDown, Sun, ArrowRight, Sparkles,
} from 'lucide-react'

const SITE_URL = 'https://nearbybizfinder.com/businesses/ark-appliance-services/'
const PHONE = '(215) 316-3924'
const PHONE_HREF = 'tel:+12153163924'
const EMAIL = 'arkapplianceservicesllc@gmail.com'
const ZIP = '32257'

// Stock photography (Pexels — free to use, no attribution required). Swap
// for real client/job-site photos whenever they're available.
const HERO_IMG = 'https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg'
const WHY_US_IMG = 'https://images.pexels.com/photos/38190070/pexels-photo-38190070.jpeg'
const LOCAL_TIP_IMG = 'https://images.pexels.com/photos/6835090/pexels-photo-6835090.jpeg'

const services = [
    {
        name: 'Refrigerator & Freezer Repair',
        desc: 'Not cooling, leaking water, freezing food, or running non-stop? We diagnose compressor, thermostat, defrost and seal problems and get your fridge holding temperature again.',
        icon: Refrigerator,
        tags: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire'],
    },
    {
        name: 'Washer & Dryer Repair',
        desc: "Washer won't spin or drain, or a dryer that won't heat? We fix belts, pumps, heating elements, thermostats and control boards on top- and front-load machines.",
        icon: Waves,
        tags: ['Samsung', 'LG', 'Maytag', 'Whirlpool', 'Amana'],
    },
    {
        name: 'Stove, Oven & Range Repair',
        desc: 'Burners not lighting, oven not reaching temperature, or uneven baking? We service electric and gas ranges, replace igniters and elements, and recalibrate controls.',
        icon: Flame,
        tags: ['Gas & Electric', 'GE', 'Frigidaire', 'KitchenAid'],
    },
    {
        name: 'Dishwasher Repair',
        desc: "Standing water, poor cleaning, or a dishwasher that won't drain or start? We clear pumps, replace seals and valves, and fix control issues.",
        icon: Droplets,
        tags: ['Bosch', 'KitchenAid', 'Whirlpool', 'Samsung'],
    },
    {
        name: 'Microwave Repair',
        desc: "Not heating, sparking, or a dead turntable? We repair over-the-range and countertop units — and tell you honestly when replacement is the smarter call.",
        icon: Timer,
        tags: ['Over-the-Range', 'Countertop', 'Built-In'],
    },
    {
        name: 'All Major Brands',
        desc: 'Samsung, LG, Whirlpool, Maytag, Amana, GE, Frigidaire, KitchenAid and more — one call covers the whole kitchen and laundry room.',
        icon: Award,
        tags: ['Residential Only', 'All Major Brands'],
    },
]

const whyUs = [
    {
        icon: MapPin,
        title: 'Local to Mandarin',
        desc: "We're based right here, not routed in from across the county. Shorter drive time means faster arrival on the San Jose Blvd / Old St. Augustine Rd corridor.",
    },
    {
        icon: CheckCircle,
        title: 'Upfront Pricing, No Surprises',
        desc: 'A $[XX] diagnostic fee is applied toward the repair when you approve the work — you always get a clear quote before we start. [Confirm fee structure with client]',
    },
    {
        icon: ShieldCheck,
        title: 'Insured & Experienced',
        desc: 'Insured technicians with [X]+ years repairing home appliances across Northeast Florida. [Confirm years in business]',
    },
    {
        icon: Sparkles,
        title: 'We Fix, We Don’t Upsell',
        desc: "If a repair isn't worth it, we'll tell you straight so you can decide between repair and replace — no pressure either way.",
    },
    {
        icon: Award,
        title: 'Guaranteed Work',
        desc: 'Every repair is backed by our [warranty length] parts & labor warranty. [Confirm warranty terms with client]',
    },
]

const processSteps = [
    { n: '01', t: 'Call or Book', d: 'Reach out by phone or email and tell us what your appliance is doing.' },
    { n: '02', t: 'Schedule a Visit', d: 'We find a same- or next-day slot where our Mon–Sat schedule allows.' },
    { n: '03', t: 'Diagnose & Quote', d: 'Our tech diagnoses the issue on-site and gives you an exact price before any work begins.' },
    { n: '04', t: 'Repair & Guarantee', d: "We fix it, test it, and back the work with our warranty. That's it." },
]

const faqs = [
    {
        q: 'Do you offer same-day appliance repair in Mandarin?',
        a: 'We schedule same-day or next-day appointments whenever possible during our Monday–Saturday hours (9am–5pm). Call early in the day for the best chance at a same-day slot.',
    },
    {
        q: 'How much does a repair cost?',
        a: 'Every repair starts with a diagnostic visit ($[XX], confirm with client). You get an exact, upfront price before any work begins — no hidden fees.',
    },
    {
        q: 'Which brands do you repair?',
        a: 'All major residential brands, including Samsung, LG, Whirlpool, Maytag, Amana, GE, Frigidaire and KitchenAid.',
    },
    {
        q: 'What areas around Mandarin do you cover?',
        a: 'Mandarin (32257, 32223, 32258) plus nearby St. Johns / Fruit Cove, Julington Creek, San Marco, Southside and Baymeadows — within about 25 miles of our Mandarin base.',
    },
    {
        q: 'Is it worth repairing or should I replace?',
        a: "We'll give you an honest assessment on the spot. As a rule of thumb, if a repair costs more than half the price of a comparable new unit and the appliance is past its typical lifespan, replacement is usually the better value.",
    },
]

const zips = ['32257', '32223', '32258']
const neighborhoods = ['Mandarin Station', 'Loretto', 'Beauclerc', 'Sunbeam', 'Julington Creek (Duval side)', 'San Jose Blvd corridor', 'Old St. Augustine Rd', 'Hood Rd']

function useReveal(rootSelector: string) {
    useEffect(() => {
        const els = document.querySelectorAll(rootSelector)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('ark-visible')
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

export default function ArkApplianceServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const [scrolled, setScrolled] = useState(false)
    useReveal('.ark-reveal')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Ark Appliance Services LLC',
        description:
            'Residential appliance repair in Mandarin, FL — refrigerators, freezers, washers, dryers, stoves, ovens, ranges, dishwashers and microwaves.',
        url: SITE_URL,
        image: HERO_IMG,
        telephone: PHONE,
        email: EMAIL,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jacksonville',
            addressRegion: 'FL',
            postalCode: ZIP,
            addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 30.1588, longitude: -81.6238 },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: { '@type': 'GeoCoordinates', latitude: 30.1588, longitude: -81.6238 },
            geoRadius: '40233', // 25 miles in meters
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Appliance Repair Services',
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
            { '@type': 'ListItem', position: 3, name: 'Ark Appliance Services LLC', item: SITE_URL },
        ],
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }

    return (
        <>
            <Script id="ark-mandarin-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Script id="ark-mandarin-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <Script id="ark-mandarin-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --ark-bg: #FAF6EE;
          --ark-surface: #FFFFFF;
          --ark-surface2: #F2ECDD;
          --ark-ink: #16302B;
          --ark-ink2: #4B615C;
          --ark-muted: rgba(22,48,43,0.55);
          --ark-teal: #0F6D5D;
          --ark-teal-d: #0B5347;
          --ark-teal-l: #14876F;
          --ark-coral: #FF6B4A;
          --ark-coral-d: #E85535;
          --ark-border: rgba(22,48,43,0.12);
          --ark-border2: rgba(22,48,43,0.2);
        }

        .ark-root { font-family: 'Manrope', sans-serif; background: var(--ark-bg); color: var(--ark-ink); overflow-x: hidden; }

        .ark-reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .ark-visible { opacity: 1; transform: translateY(0); }

        .ark-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 90; padding: .9rem 1.5rem; display: flex; align-items: center; justify-content: space-between; background: rgba(250,246,238,0); border-bottom: 1px solid transparent; transition: background .3s, border-color .3s, box-shadow .3s; }
        .ark-nav.scrolled { background: rgba(250,246,238,.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--ark-border); box-shadow: 0 1px 14px rgba(22,48,43,.06); }

        .ark-hero-bg { background: radial-gradient(ellipse 60% 60% at 82% 15%, rgba(255,107,74,.10) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 90%, rgba(15,109,93,.10) 0%, transparent 60%), var(--ark-bg); }
        .ark-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--ark-border) 1px, transparent 1px), linear-gradient(90deg, var(--ark-border) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 85% 85% at 50% 40%, black 15%, transparent 100%); pointer-events: none; }

        @keyframes ark-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ark-marquee-track { display: flex; width: max-content; animation: ark-marquee 32s linear infinite; white-space: nowrap; }

        .ark-card { background: var(--ark-surface); border: 1px solid var(--ark-border); border-radius: 16px; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .ark-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(22,48,43,.10); border-color: rgba(15,109,93,.35); }

        .ark-faq { background: var(--ark-surface); border: 1px solid var(--ark-border); border-radius: 12px; overflow: hidden; transition: border-color .25s; }
        .ark-faq.open { border-color: var(--ark-teal); }

        .ark-btn-primary { background: var(--ark-coral); color: #fff; box-shadow: 0 6px 18px rgba(255,107,74,.32); }
        .ark-btn-primary:hover { background: var(--ark-coral-d); }
        .ark-btn-outline { background: transparent; border: 1.5px solid var(--ark-border2); color: var(--ark-ink); }
        .ark-btn-outline:hover { border-color: var(--ark-teal); color: var(--ark-teal); }

        .ark-chip { font-size: .74rem; font-weight: 600; letter-spacing: .02em; background: var(--ark-surface2); border: 1px solid var(--ark-border); border-radius: 999px; padding: .35rem .85rem; color: var(--ark-ink2); }
      `}</style>

            <div className="ark-root">
                {/* ─── NAV ─── */}
                <nav className={`ark-nav ${scrolled ? 'scrolled' : ''}`}>
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <a href="#home" className="flex items-center gap-2.5">
                            <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white" style={{ background: 'var(--ark-teal)' }}>A</span>
                            <span className="font-extrabold tracking-tight text-[--ark-ink]">Ark <span className="font-normal">Appliance Services</span></span>
                        </a>
                        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-[--ark-ink2]">
                            <a href="#services" className="hover:text-[--ark-teal] transition-colors">Services</a>
                            <a href="#why" className="hover:text-[--ark-teal] transition-colors">Why Ark</a>
                            <a href="#area" className="hover:text-[--ark-teal] transition-colors">Service Area</a>
                            <a href="#faq" className="hover:text-[--ark-teal] transition-colors">FAQ</a>
                        </div>
                        <a href={PHONE_HREF} className="ark-btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors">
                            <Phone size={15} /> {PHONE}
                        </a>
                    </div>
                </nav>

                {/* ─── HERO ─── */}
                <section id="home" className="ark-hero-bg relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
                    <div className="ark-grid" />
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7">
                                <div className="ark-reveal inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'rgba(15,109,93,.10)', color: 'var(--ark-teal-d)' }}>
                                    <MapPin size={13} /> Based in Mandarin, FL &middot; 32257
                                </div>
                                <h1 className="ark-reveal font-extrabold leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                                    Appliance Repair in <span style={{ color: 'var(--ark-teal)' }}>Mandarin, FL</span> — Fixed by Your Neighbors
                                </h1>
                                <p className="ark-reveal text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--ark-ink2)' }}>
                                    When your refrigerator stops cooling or your dryer quits mid-load, you need someone close by who can actually show up. Ark Appliance Services repairs refrigerators, freezers, washers, dryers, stoves, ovens, ranges, dishwashers and microwaves for homeowners across 32257, 32223 and 32258.
                                </p>
                                <div className="ark-reveal flex flex-col sm:flex-row gap-4 mb-10">
                                    <a href={PHONE_HREF} className="ark-btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Phone size={18} /> Call {PHONE}
                                    </a>
                                    <a href={`mailto:${EMAIL}`} className="ark-btn-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Mail size={18} /> Book a Repair
                                    </a>
                                </div>
                                <div className="ark-reveal flex flex-wrap gap-x-8 gap-y-3 pt-6" style={{ borderTop: '1px solid var(--ark-border)' }}>
                                    {['Mon–Sat, 9am–5pm', '25-Mile Service Radius', 'Residential Specialists', 'Upfront Pricing'].map((b) => (
                                        <div key={b} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--ark-coral)' }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--ark-ink2)' }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — hero photo */}
                            <div className="ark-reveal lg:col-span-5">
                                <div className="ark-card overflow-hidden relative" style={{ borderColor: 'var(--ark-ink)' }}>
                                    <div className="relative h-72 sm:h-96">
                                        <Image
                                            src={HERO_IMG}
                                            alt="Local Ark Appliance Services technician repairing a home appliance in Mandarin, FL"
                                            fill
                                            priority
                                            quality={85}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,48,43,.85) 0%, transparent 55%)' }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 p-6" style={{ background: 'var(--ark-ink)' }}>
                                        {[
                                            { icon: Refrigerator, label: 'Refrigerators' },
                                            { icon: Waves, label: 'Washers & Dryers' },
                                            { icon: Flame, label: 'Ovens & Ranges' },
                                            { icon: Droplets, label: 'Dishwashers' },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center gap-2.5">
                                                <item.icon size={18} style={{ color: 'var(--ark-coral)' }} />
                                                <span className="text-xs font-semibold text-white/85">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between px-6 pb-6" style={{ background: 'var(--ark-ink)' }}>
                                        <div>
                                            <div className="text-2xl font-extrabold text-white">25 mi</div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-white/50">From Mandarin</div>
                                        </div>
                                        <ShieldCheck size={26} style={{ color: 'var(--ark-teal-l)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── MARQUEE ─── */}
                <div style={{ background: 'var(--ark-ink)', padding: '.85rem 0', overflow: 'hidden' }}>
                    <div className="ark-marquee-track">
                        {[0, 1].map((j) => (
                            <span key={j} className="flex items-center">
                                {['Refrigerator Repair', 'Washer & Dryer Repair', 'Oven & Range Repair', 'Dishwasher Repair', 'Microwave Repair', 'Serving Mandarin FL'].map((t) => (
                                    <span key={`${j}-${t}`} className="flex items-center gap-6 px-8 text-[.72rem] font-bold uppercase tracking-[0.18em] text-white/70">
                                        {t}
                                        <span className="w-1 h-1 rounded-full" style={{ background: 'var(--ark-coral)' }} />
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ─── SERVICES ─── */}
                <section id="services" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="ark-reveal max-w-2xl mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--ark-coral)' }}>What We Fix</span>
                            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Services We Repair in Mandarin</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ark-ink2)' }}>
                                Because we're local to the San Jose Boulevard and Old St. Augustine Road corridor, we keep drive times short and scheduling quick.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <div key={s.name} className="ark-card ark-reveal p-7">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(15,109,93,.10)' }}>
                                        <s.icon size={22} style={{ color: 'var(--ark-teal)' }} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{s.name}</h3>
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ark-ink2)' }}>{s.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {s.tags.map((t) => <span key={t} className="ark-chip">{t}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY US ─── */}
                <section id="why" style={{ background: 'var(--ark-surface2)', borderTop: '1px solid var(--ark-border)', borderBottom: '1px solid var(--ark-border)' }} className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
                        <div className="lg:col-span-4">
                            <span className="ark-reveal text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--ark-coral)' }}>Why Mandarin Calls Ark</span>
                            <h2 className="ark-reveal mt-3 font-extrabold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Not a Call Center. A Neighbor.</h2>
                            <p className="ark-reveal mt-4 text-base leading-relaxed mb-6" style={{ color: 'var(--ark-ink2)' }}>
                                We're not routing a tech from the far side of the county. Shorter drive means faster arrival — and we tell it to you straight on price and repair-vs-replace.
                            </p>
                            <div className="ark-reveal ark-card relative h-56 overflow-hidden">
                                <Image
                                    src={WHY_US_IMG}
                                    alt="Ark Appliance Services technician diagnosing an appliance in a Mandarin, FL home"
                                    fill
                                    quality={80}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
                            {whyUs.map((item) => (
                                <div key={item.title} className="ark-reveal ark-card p-6 flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,107,74,.12)' }}>
                                        <item.icon size={19} style={{ color: 'var(--ark-coral)' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--ark-ink2)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── LOCAL TIP (E-E-A-T) ─── */}
                <section className="py-16 sm:py-20 px-6">
                    <div className="ark-reveal max-w-4xl mx-auto ark-card overflow-hidden flex flex-col sm:flex-row" style={{ background: 'var(--ark-ink)', borderColor: 'var(--ark-ink)' }}>
                        <div className="relative h-48 sm:h-auto sm:w-64 flex-shrink-0">
                            <Image
                                src={LOCAL_TIP_IMG}
                                alt="Modern Florida kitchen with stainless steel refrigerator and appliances"
                                fill
                                quality={80}
                                sizes="(max-width: 640px) 100vw, 256px"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 sm:p-10 flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: 'rgba(255,107,74,.16)' }}>
                                <Sun size={26} style={{ color: 'var(--ark-coral)' }} />
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Local Tip: Florida Heat Is Hard on Appliances</h2>
                                <p className="text-white/70 leading-relaxed">
                                    High humidity and summer power flickers are two of the most common causes of appliance failure in Mandarin. Refrigerators work harder in the heat, so keep condenser coils clean and give the unit a few inches of breathing room from the wall. Put your fridge and microwave on a quality surge protector, too — a single lightning-season power surge is a frequent cause of the fried control boards we see in this area.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS ─── */}
                <section className="py-16 sm:py-24 px-6" style={{ background: 'var(--ark-surface2)', borderTop: '1px solid var(--ark-border)', borderBottom: '1px solid var(--ark-border)' }}>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="ark-reveal text-center font-extrabold tracking-tight mb-14" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>How a Repair Comes Together</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step) => (
                                <div key={step.n} className="ark-reveal text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-extrabold text-lg text-white" style={{ background: 'var(--ark-teal)' }}>{step.n}</div>
                                    <h3 className="font-bold text-base mb-2">{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ark-ink2)' }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SERVICE AREA ─── */}
                <section id="area" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="ark-reveal max-w-2xl mb-10">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--ark-coral)' }}>Service Area</span>
                            <h2 className="mt-3 font-extrabold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Neighborhoods We Serve</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ark-ink2)' }}>
                                We cover all of Mandarin and the surrounding Southside communities, plus anywhere within about 25 miles of our 32257 base.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="ark-reveal ark-card p-7 lg:col-span-2">
                                <h3 className="font-bold text-base mb-4">Mandarin &amp; Nearby Neighborhoods</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {neighborhoods.map((n) => <span key={n} className="ark-chip">{n}</span>)}
                                </div>
                                <h3 className="font-bold text-base mb-4">ZIP Codes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {zips.map((z) => <span key={z} className="ark-chip" style={{ background: 'rgba(15,109,93,.10)', color: 'var(--ark-teal-d)', borderColor: 'transparent' }}>{z}</span>)}
                                </div>
                            </div>
                            <Link href="/businesses/ark-appliance-services/st-johns-fruit-cove/" className="ark-reveal ark-card p-7 flex flex-col justify-between group" style={{ background: 'var(--ark-teal)', borderColor: 'var(--ark-teal)' }}>
                                <div>
                                    <MapPin size={22} className="text-white/80 mb-4" />
                                    <h3 className="font-bold text-lg text-white mb-2">Also Serving St. Johns &amp; Fruit Cove</h3>
                                    <p className="text-sm text-white/75 leading-relaxed">Julington Creek, Switzerland, RiverTown &amp; Durbin Crossing — 32259.</p>
                                </div>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:gap-2.5 transition-all">
                                    View St. Johns / Fruit Cove page <ArrowRight size={15} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section id="faq" className="py-20 sm:py-28 px-6" style={{ background: 'var(--ark-surface2)', borderTop: '1px solid var(--ark-border)', borderBottom: '1px solid var(--ark-border)' }}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="ark-reveal text-center font-extrabold tracking-tight mb-12" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>Mandarin FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((f, i) => (
                                <div key={i} className={`ark-reveal ark-faq ${openFaq === i ? 'open' : ''}`}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left font-bold">
                                        {f.q}
                                        <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ color: 'var(--ark-coral)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} />
                                    </button>
                                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '260px' : '0px' }}>
                                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed" style={{ color: 'var(--ark-ink2)' }}>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FINAL CTA ─── */}
                <section id="contact" className="py-20 sm:py-28 px-6">
                    <div className="ark-reveal max-w-4xl mx-auto text-center rounded-2xl p-10 sm:p-16" style={{ background: 'var(--ark-teal)' }}>
                        <h2 className="font-extrabold tracking-tight text-white mb-4" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>Appliance Down? Call Ark.</h2>
                        <p className="text-white/80 text-lg mb-9 max-w-xl mx-auto">Mandarin's local repair team, Monday through Saturday. Call now or send us an email to book.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base transition-transform hover:-translate-y-0.5" style={{ background: 'var(--ark-coral)', color: '#fff' }}>
                                <Phone size={18} /> Call {PHONE}
                            </a>
                            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-colors">
                                <Mail size={18} /> Email Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ─── FOOTER ─── */}
                <footer className="pt-16 pb-28 sm:pb-16 px-6" style={{ background: 'var(--ark-ink)' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white" style={{ background: 'var(--ark-teal-l)' }}>A</span>
                                <span className="font-bold text-white">Ark Appliance Services</span>
                            </div>
                            <p className="text-sm text-white/55 leading-relaxed">Residential appliance repair based in Mandarin, FL, serving a 25-mile radius across Jacksonville's Southside and St. Johns County.</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--ark-coral)' }}>Contact</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a></li>
                                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
                                <li>Mon–Sat, 9am–5pm &middot; Sunday closed</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--ark-coral)' }}>Service Areas</h4>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li>Mandarin, FL (32257, 32223, 32258)</li>
                            </ul>
                            <Link href="/businesses/ark-appliance-services/st-johns-fruit-cove/" className="inline-block mt-4 text-sm font-bold" style={{ color: 'var(--ark-teal-l)' }}>
                                See St. Johns / Fruit Cove page &rarr;
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
                <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden" style={{ background: 'var(--ark-coral)' }}>
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold text-white">
                        <Phone size={18} /> Call {PHONE} Now
                    </a>
                </div>
            </div>
        </>
    )
}
