'use client'

/* ─────────────────────────────────────────────
   S&V RENOVATIONS, LLC — Conway, AR
   Growth-area landing page · bright "new-build growth" theme
   (Deliberately different palette, type system and layout from the
   North Little Rock home page and Hot Springs page — see
   /businesses/sv-renovations/ and /businesses/sv-renovations/hot-springs/)

   PLACEHOLDERS TO CONFIRM WITH CLIENT BEFORE THIS GOES LIVE:
     - [X]+ years in business (sources conflict — confirm real founding year)
   Do not remove the brackets until the client confirms the real value.
───────────────────────────────────────────── */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
    Phone, Mail, MapPin,
    Layers, Building2, Droplets, Home, Paintbrush, Blocks,
    ChevronDown, ArrowRight, ShieldCheck, Award, Sparkles,
} from 'lucide-react'

const SITE_URL = 'https://nearbybizfinder.com/businesses/sv-renovations/conway/'
const PARENT_URL = 'https://nearbybizfinder.com/businesses/sv-renovations/'
const PHONE = '(501) 960-1352'
const PHONE_HREF = 'tel:+15019601352'
const EMAIL = 'svrenovationsllc@gmail.com'

// Stock photography (Pexels — free to use, no attribution required). Swap
// for real client/job-site photos whenever they're available.
const HERO_IMG = 'https://images.pexels.com/photos/28490242/pexels-photo-28490242.jpeg'
const TIP_IMG = 'https://images.pexels.com/photos/1917849/pexels-photo-1917849.jpeg'

const stats = [
    { v: '#1', l: 'Fastest-growing city in AR, 2 years running' },
    { v: '~30 mi', l: 'From our North Little Rock base via I-40' },
    { v: '30-Day', l: 'Warranty on every job, new build or remodel' },
    { v: '2', l: 'Colleges nearby — UCA & Hendrix' },
]

const services = [
    {
        name: 'Foundation Construction',
        desc: 'New footings and slabs poured to code for the subdivisions breaking ground across Conway every month — additions and ground-up builds alike.',
        icon: Building2,
    },
    {
        name: 'Foundation Repair & House Leveling',
        desc: 'For Conway’s older, established neighborhoods: cracked slabs, sinking piers and uneven floors caused by shifting Central Arkansas clay.',
        icon: Layers,
    },
    {
        name: 'French Drain & Drainage Installation',
        desc: 'Grading and drainage that keep new-build lots and older yards alike from pooling water against the foundation.',
        icon: Droplets,
    },
    {
        name: 'Kitchen & Bathroom Remodeling',
        desc: 'Updates for growing families in newer subdivisions and refreshes for rental turnovers near UCA and downtown Conway.',
        icon: Home,
    },
    {
        name: 'Painting & Drywall',
        desc: 'Interior and exterior painting plus drywall repair — a fast, common request for rental turnover in a college town.',
        icon: Paintbrush,
    },
    {
        name: 'Siding, Fencing, Decks & Flooring',
        desc: 'Exterior upgrades and finish work for new construction and existing homes — siding, fencing, decks, flooring and tile.',
        icon: Blocks,
    },
]

const duality = [
    {
        title: 'New Construction',
        desc: 'Conway is Arkansas’s fastest-growing city for the second year running, with new subdivisions breaking ground every month. We pour footings and slabs engineered for the local clay soil, built to code from day one — no shortcuts that surface as problems five years later.',
        tags: ['New Footings', 'Slabs', 'Additions'],
    },
    {
        title: 'Established Neighborhoods',
        desc: 'Around downtown Conway, UCA and Hendrix College, older homes need a different kind of work: foundation repair, kitchen and bath updates, and the paint and drywall refreshes that come with steady rental turnover.',
        tags: ['Remodels', 'Foundation Repair', 'Turnover Painting'],
    },
]

const whyUs = [
    { icon: MapPin, title: 'Local, Not Long-Distance', desc: 'About 30 miles up I-40 from our North Little Rock base — Conway is a standard part of our coverage area.' },
    { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Every job, residential or commercial, new build or remodel, is covered.' },
    { icon: Award, title: '30-Day Workmanship Warranty', desc: 'If something isn’t right, we come back and fix it.' },
    { icon: Sparkles, title: 'Free, Written Estimates', desc: 'An exact price before work starts — no surprise add-ons.' },
]

const processSteps = [
    { n: '01', t: 'Call or Text', d: 'Tell us what you need — a new footing, a foundation repair, or a remodel.' },
    { n: '02', t: 'Free On-Site Inspection', d: 'We assess the lot or the existing structure and take real measurements.' },
    { n: '03', t: 'Written, Upfront Quote', d: 'An exact price before any work begins.' },
    { n: '04', t: 'Work & Warranty', d: 'Done right, cleaned up, and backed by our 30-day warranty.' },
]

const faqs = [
    {
        q: 'Do you build foundations for new construction in Conway?',
        a: 'Yes — new footings and slabs for additions and ground-up builds are a regular part of our work as Conway keeps growing.',
    },
    {
        q: 'How far is Conway from your North Little Rock office?',
        a: 'About 30 miles up I-40, roughly a 35–40 minute drive — it’s a standard part of our Central Arkansas service area.',
    },
    {
        q: 'Do you handle rental property turnovers near UCA or Hendrix?',
        a: 'Yes, we do interior painting, drywall repair and quick-turn updates for landlords and property managers around both campuses.',
    },
    {
        q: 'Do you also do foundation repair, not just new construction?',
        a: 'Yes — Conway has plenty of established neighborhoods where the same clay-soil movement common across Central Arkansas causes cracked slabs and settling piers.',
    },
    {
        q: 'Are estimates free?',
        a: 'Yes, call or text (501) 960-1352 for a free on-site inspection and written quote.',
    },
    {
        q: 'Do you serve all of Faulkner County?',
        a: 'We focus on Conway and nearby communities, generally within about 50 miles of our North Little Rock base — call to confirm coverage for your address.',
    },
]

const zips = ['72032', '72033', '72034']
const landmarks = ['University of Central Arkansas', 'Hendrix College', 'Downtown Conway', 'Lake Beaverfork', 'Tucker Creek', 'Central Baptist College']

function useReveal(rootSelector: string) {
    useEffect(() => {
        const els = document.querySelectorAll(rootSelector)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('svrcw-visible')
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

export default function SVRenovationsConwayPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const [scrolled, setScrolled] = useState(false)
    useReveal('.svrcw-reveal')

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
            'Foundation construction and repair, drainage, kitchen and bathroom remodeling, painting, drywall and home renovation serving Conway and Faulkner County, AR.',
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
        geo: { '@type': 'GeoCoordinates', latitude: 35.0887, longitude: -92.4421 },
        areaServed: { '@type': 'Place', name: 'Conway, AR' },
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
            name: 'Foundation & Renovation Services — Conway',
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
            { '@type': 'ListItem', position: 3, name: 'S&V Renovations, LLC', item: PARENT_URL },
            { '@type': 'ListItem', position: 4, name: 'Conway', item: SITE_URL },
        ],
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }

    return (
        <>
            <Script id="svrcw-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Script id="svrcw-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <Script id="svrcw-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --cw-bg: #F5FAF7;
          --cw-surface: #FFFFFF;
          --cw-surface2: #E7F3EC;
          --cw-ink: #10241C;
          --cw-ink2: #465B51;
          --cw-muted: rgba(16,36,28,0.55);
          --cw-green: #1F7A5C;
          --cw-green-d: #175E46;
          --cw-green-l: #2E9975;
          --cw-blue: #2E6F9E;
          --cw-border: rgba(16,36,28,0.12);
          --cw-border2: rgba(16,36,28,0.2);

          --ff-disp: 'Plus Jakarta Sans', sans-serif;
          --ff-body: 'DM Sans', sans-serif;
        }

        .svrcw-root { font-family: var(--ff-body); background: var(--cw-bg); color: var(--cw-ink); overflow-x: hidden; }
        .svrcw-h { font-family: var(--ff-disp); letter-spacing: -0.01em; }

        .svrcw-reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .svrcw-visible { opacity: 1; transform: translateY(0); }

        .svrcw-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 90; padding: .9rem 1.5rem; display: flex; align-items: center; justify-content: space-between; background: rgba(245,250,247,0); border-bottom: 1px solid transparent; transition: background .3s, border-color .3s, box-shadow .3s; }
        .svrcw-nav.scrolled { background: rgba(245,250,247,.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--cw-border); box-shadow: 0 1px 14px rgba(16,36,28,.06); }

        .svrcw-hero-bg { background: radial-gradient(ellipse 60% 60% at 85% 12%, rgba(46,153,117,.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 90%, rgba(46,111,158,.10) 0%, transparent 60%), var(--cw-bg); }
        .svrcw-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--cw-border) 1px, transparent 1px), linear-gradient(90deg, var(--cw-border) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 85% 85% at 50% 40%, black 15%, transparent 100%); pointer-events: none; }

        .svrcw-card { background: var(--cw-surface); border: 1px solid var(--cw-border); border-radius: 16px; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .svrcw-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(16,36,28,.10); border-color: rgba(31,122,92,.35); }

        .svrcw-faq { background: var(--cw-surface); border: 1px solid var(--cw-border); border-radius: 12px; overflow: hidden; transition: border-color .25s; }
        .svrcw-faq.open { border-color: var(--cw-green); }

        .svrcw-btn-primary { background: var(--cw-green); color: #fff; box-shadow: 0 6px 18px rgba(31,122,92,.30); }
        .svrcw-btn-primary:hover { background: var(--cw-green-d); }
        .svrcw-btn-outline { background: transparent; border: 1.5px solid var(--cw-border2); color: var(--cw-ink); }
        .svrcw-btn-outline:hover { border-color: var(--cw-green); color: var(--cw-green); }

        .svrcw-chip { font-size: .74rem; font-weight: 600; letter-spacing: .02em; background: var(--cw-surface2); border: 1px solid var(--cw-border); border-radius: 999px; padding: .35rem .85rem; color: var(--cw-ink2); }
      `}</style>

            <div className="svrcw-root">
                {/* ─── NAV ─── */}
                <nav className={`svrcw-nav ${scrolled ? 'scrolled' : ''}`}>
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                        <a href="#home" className="flex items-center gap-2.5">
                            <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white svrcw-h text-xs" style={{ background: 'var(--cw-green)' }}>S&V</span>
                            <span className="font-extrabold tracking-tight svrcw-h" style={{ color: 'var(--cw-ink)' }}>S&amp;V <span className="font-normal">Renovations</span></span>
                        </a>
                        <div className="hidden md:flex items-center gap-7 text-sm font-semibold" style={{ color: 'var(--cw-ink2)' }}>
                            <a href="#services" className="hover:text-[--cw-green] transition-colors">Services</a>
                            <a href="#why" className="hover:text-[--cw-green] transition-colors">New Build vs. Remodel</a>
                            <a href="#area" className="hover:text-[--cw-green] transition-colors">Service Area</a>
                            <a href="#faq" className="hover:text-[--cw-green] transition-colors">FAQ</a>
                        </div>
                        <a href={PHONE_HREF} className="svrcw-btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors">
                            <Phone size={15} /> {PHONE}
                        </a>
                    </div>
                </nav>

                {/* ─── HERO ─── */}
                <section id="home" className="svrcw-hero-bg relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
                    <div className="svrcw-grid" />
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7">
                                <div className="svrcw-reveal inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'rgba(31,122,92,.12)', color: 'var(--cw-green-d)' }}>
                                    <MapPin size={13} /> Serving Conway &amp; Faulkner County, AR
                                </div>
                                <h1 className="svrcw-reveal svrcw-h font-bold leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                                    Foundation &amp; Renovation for <span style={{ color: 'var(--cw-green)' }}>Conway&apos;s</span> Fastest-Growing Neighborhoods
                                </h1>
                                <p className="svrcw-reveal text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--cw-ink2)' }}>
                                    Conway is Arkansas&apos;s fastest-growing city, two years running — new subdivisions breaking ground monthly, alongside established neighborhoods around UCA, Hendrix and downtown. S&amp;V Renovations handles new-construction foundations and full renovation work for both.
                                </p>
                                <div className="svrcw-reveal flex flex-col sm:flex-row gap-4 mb-10">
                                    <a href={PHONE_HREF} className="svrcw-btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Phone size={18} /> Call {PHONE}
                                    </a>
                                    <a href={`mailto:${EMAIL}`} className="svrcw-btn-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base transition-colors">
                                        <Mail size={18} /> Get a Free Quote
                                    </a>
                                </div>
                                <div className="svrcw-reveal grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6" style={{ borderTop: '1px solid var(--cw-border)' }}>
                                    {stats.map((s) => (
                                        <div key={s.l}>
                                            <div className="svrcw-h font-extrabold text-xl mb-1" style={{ color: 'var(--cw-green)' }}>{s.v}</div>
                                            <div className="text-xs leading-snug" style={{ color: 'var(--cw-ink2)' }}>{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — hero photo */}
                            <div className="svrcw-reveal lg:col-span-5">
                                <div className="svrcw-card overflow-hidden relative" style={{ borderColor: 'var(--cw-ink)' }}>
                                    <div className="relative h-72 sm:h-96">
                                        <Image
                                            src={HERO_IMG}
                                            alt="Aerial view of a growing suburban neighborhood, similar to Conway, AR's new subdivisions"
                                            fill
                                            priority
                                            quality={85}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,36,28,.85) 0%, transparent 55%)' }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 p-6" style={{ background: 'var(--cw-ink)' }}>
                                        {[
                                            { icon: Building2, label: 'New Foundations' },
                                            { icon: Droplets, label: 'Drainage' },
                                            { icon: Home, label: 'Remodels' },
                                            { icon: Paintbrush, label: 'Painting' },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center gap-2.5">
                                                <item.icon size={18} style={{ color: 'var(--cw-green-l)' }} />
                                                <span className="text-xs font-semibold text-white/85">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SERVICES ─── */}
                <section id="services" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="svrcw-reveal max-w-2xl mb-14">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--cw-green)' }}>What We Do</span>
                            <h2 className="svrcw-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Services We Handle in Conway</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>
                                New footings for growing subdivisions, foundation repair and remodels for established neighborhoods, and the finish trades in between.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <div key={s.name} className="svrcw-card svrcw-reveal p-7">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(31,122,92,.10)' }}>
                                        <s.icon size={22} style={{ color: 'var(--cw-green)' }} />
                                    </div>
                                    <h3 className="svrcw-h font-bold text-lg mb-2">{s.name}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── DUALITY: NEW BUILD VS. ESTABLISHED ─── */}
                <section id="why" style={{ background: 'var(--cw-surface2)', borderTop: '1px solid var(--cw-border)', borderBottom: '1px solid var(--cw-border)' }} className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="svrcw-reveal max-w-2xl mb-12">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--cw-green)' }}>Why It Matters Here</span>
                            <h2 className="svrcw-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Conway&apos;s Growth Means Two Different Jobs</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>
                                New subdivisions need foundations built right the first time. Established neighborhoods near downtown and the colleges need something else entirely. We do both.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {duality.map((d) => (
                                <div key={d.title} className="svrcw-card svrcw-reveal p-8">
                                    <h3 className="svrcw-h font-bold text-xl mb-3">{d.title}</h3>
                                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--cw-ink2)' }}>{d.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {d.tags.map((t) => <span key={t} className="svrcw-chip">{t}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {whyUs.map((item) => (
                                <div key={item.title} className="svrcw-reveal svrcw-card p-6">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mb-3" style={{ background: 'rgba(46,111,158,.12)' }}>
                                        <item.icon size={19} style={{ color: 'var(--cw-blue)' }} />
                                    </div>
                                    <h3 className="svrcw-h font-bold text-base mb-1.5">{item.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── LOCAL TIP (E-E-A-T) ─── */}
                <section className="py-16 sm:py-20 px-6">
                    <div className="svrcw-reveal max-w-4xl mx-auto svrcw-card overflow-hidden flex flex-col sm:flex-row" style={{ background: 'var(--cw-ink)', borderColor: 'var(--cw-ink)' }}>
                        <div className="relative h-48 sm:h-auto sm:w-64 flex-shrink-0">
                            <Image
                                src={TIP_IMG}
                                alt="Contractor painting the exterior of a house in Conway, AR"
                                fill
                                quality={80}
                                sizes="(max-width: 640px) 100vw, 256px"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 sm:p-10 flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: 'rgba(46,153,117,.18)' }}>
                                <Sparkles size={26} style={{ color: 'var(--cw-green-l)' }} />
                            </div>
                            <div>
                                <h2 className="svrcw-h text-xl sm:text-2xl font-bold text-white mb-2">Local Tip: New Doesn&apos;t Mean Problem-Free</h2>
                                <p className="text-white/70 leading-relaxed">
                                    Conway sits on the same shrink-swell clay found across Central Arkansas, so a new subdivision lot needs footings engineered for that movement just as much as an older home needs repair. On the other end, the steady churn of student and young-family renters around UCA and Hendrix means paint, drywall and fixture wear show up faster than in a typical owner-occupied home — building that turnover cost into your maintenance plan saves money over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS ─── */}
                <section className="py-16 sm:py-24 px-6" style={{ background: 'var(--cw-surface2)', borderTop: '1px solid var(--cw-border)', borderBottom: '1px solid var(--cw-border)' }}>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="svrcw-reveal svrcw-h text-center font-bold tracking-tight mb-14" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>How a Project Comes Together</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step) => (
                                <div key={step.n} className="svrcw-reveal text-center">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-extrabold text-lg text-white svrcw-h" style={{ background: 'var(--cw-green)' }}>{step.n}</div>
                                    <h3 className="svrcw-h font-bold text-base mb-2">{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SERVICE AREA ─── */}
                <section id="area" className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="svrcw-reveal max-w-2xl mb-10">
                            <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: 'var(--cw-green)' }}>Service Area</span>
                            <h2 className="svrcw-h mt-3 font-bold tracking-tight" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)' }}>Conway Landmarks &amp; ZIP Codes</h2>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>
                                We serve Conway and nearby Faulkner County communities, about 30 miles from our North Little Rock base.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="svrcw-reveal svrcw-card p-7 lg:col-span-2">
                                <h3 className="svrcw-h font-bold text-base mb-4">Near These Landmarks</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {landmarks.map((n) => <span key={n} className="svrcw-chip">{n}</span>)}
                                </div>
                                <h3 className="svrcw-h font-bold text-base mb-4">ZIP Codes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {zips.map((z) => <span key={z} className="svrcw-chip" style={{ background: 'rgba(31,122,92,.10)', color: 'var(--cw-green-d)', borderColor: 'transparent' }}>{z}</span>)}
                                </div>
                            </div>
                            <Link href="/businesses/sv-renovations/" className="svrcw-reveal svrcw-card p-7 flex flex-col justify-between group" style={{ background: 'var(--cw-green)', borderColor: 'var(--cw-green)' }}>
                                <div>
                                    <MapPin size={22} className="text-white/80 mb-4" />
                                    <h3 className="svrcw-h font-bold text-lg text-white mb-2">Home Base: North Little Rock</h3>
                                    <p className="text-sm text-white/75 leading-relaxed">Foundation repair, drainage &amp; renovation from our Dublin Avenue base.</p>
                                </div>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:gap-2.5 transition-all">
                                    View North Little Rock page <ArrowRight size={15} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section id="faq" className="py-20 sm:py-28 px-6" style={{ background: 'var(--cw-surface2)', borderTop: '1px solid var(--cw-border)', borderBottom: '1px solid var(--cw-border)' }}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="svrcw-reveal svrcw-h text-center font-bold tracking-tight mb-12" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>Conway FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((f, i) => (
                                <div key={i} className={`svrcw-reveal svrcw-faq ${openFaq === i ? 'open' : ''}`}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left font-bold">
                                        {f.q}
                                        <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ color: 'var(--cw-green)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} />
                                    </button>
                                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '260px' : '0px' }}>
                                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed" style={{ color: 'var(--cw-ink2)' }}>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FINAL CTA ─── */}
                <section id="contact" className="py-20 sm:py-28 px-6">
                    <div className="svrcw-reveal max-w-4xl mx-auto text-center rounded-2xl p-10 sm:p-16" style={{ background: 'var(--cw-green)' }}>
                        <h2 className="svrcw-h font-bold tracking-tight text-white mb-4" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>New Build or Remodel — Call S&amp;V.</h2>
                        <p className="text-white/80 text-lg mb-9 max-w-xl mx-auto">Conway&apos;s local foundation and renovation crew. Call or email for a free quote.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base transition-transform hover:-translate-y-0.5" style={{ background: 'var(--cw-ink)', color: '#fff' }}>
                                <Phone size={18} /> Call {PHONE}
                            </a>
                            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-colors">
                                <Mail size={18} /> Email Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ─── FOOTER ─── */}
                <footer className="pt-16 pb-28 sm:pb-16 px-6" style={{ background: 'var(--cw-ink)' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-white svrcw-h text-xs" style={{ background: 'var(--cw-green-l)' }}>S&V</span>
                                <span className="svrcw-h font-bold text-white">S&amp;V Renovations</span>
                            </div>
                            <p className="text-sm text-white/55 leading-relaxed">Foundation and renovation services based in North Little Rock, AR, serving Conway and Faulkner County within a 50-mile radius.</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--cw-green-l)' }}>Contact</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a></li>
                                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
                                <li>Mon–Fri 7am–5pm &middot; Sat 8am–3pm &middot; Sun closed</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--cw-green-l)' }}>Service Areas</h4>
                            <ul className="space-y-2 text-sm text-white/70">
                                <li>Conway, AR (72032, 72033, 72034)</li>
                            </ul>
                            <Link href="/businesses/sv-renovations/" className="inline-block mt-4 text-sm font-bold" style={{ color: 'var(--cw-blue)' }}>
                                See North Little Rock service area &rarr;
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
                <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden" style={{ background: 'var(--cw-green)' }}>
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold text-white">
                        <Phone size={18} /> Call {PHONE} Now
                    </a>
                </div>
            </div>
        </>
    )
}
