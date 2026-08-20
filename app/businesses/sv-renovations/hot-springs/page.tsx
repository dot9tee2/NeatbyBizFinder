'use client'

/* ─────────────────────────────────────────────
   S&V RENOVATIONS, LLC — Hot Springs, AR
   Growth-area landing page · dark "hillside stone & copper" theme
   (Deliberately different palette, type system and layout from the
   North Little Rock home page — see /businesses/sv-renovations/)

   PLACEHOLDERS TO CONFIRM WITH CLIENT BEFORE THIS GOES LIVE:
     - [X]+ years in business (sources conflict — confirm real founding year)
   Do not remove the brackets until the client confirms the real value.
───────────────────────────────────────────── */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
    Phone, Mail,
    Layers, Building2, Droplets, Home, Paintbrush, Blocks,
    ChevronDown, ArrowRight, Mountain, Waves, TreePine,
} from 'lucide-react'

const SITE_URL = 'https://nearbybizfinder.com/businesses/sv-renovations/hot-springs/'
const PARENT_URL = 'https://nearbybizfinder.com/businesses/sv-renovations/'
const PHONE = '(501) 960-1352'
const PHONE_HREF = 'tel:+15019601352'
const EMAIL = 'svrenovationsllc@gmail.com'

// Stock photography (Pexels — free to use, no attribution required). Swap
// for real client/job-site photos whenever they're available.
const HERO_IMG = 'https://images.pexels.com/photos/14077116/pexels-photo-14077116.jpeg'
const TIP_IMG = 'https://images.pexels.com/photos/17279101/pexels-photo-17279101.jpeg'

const services = [
    {
        name: 'Foundation Repair & House Leveling',
        desc: 'Sloped lots move differently than flat ones. We diagnose and repair settling, cracked slabs and uneven floors caused by hillside soil movement and retaining wall pressure.',
        icon: Layers,
    },
    {
        name: 'Foundation Construction',
        desc: 'New footings and slabs poured for the grade you actually have — additions, garages and new structures engineered for sloped Garland County lots.',
        icon: Building2,
    },
    {
        name: 'French Drain & Drainage Installation',
        desc: 'Hot Springs gets over 54 inches of rain a year, and steep lots send it downhill fast. We install French drains, grading and waterproofing that keep runoff away from your foundation.',
        icon: Droplets,
    },
    {
        name: 'Kitchen & Bathroom Remodeling',
        desc: 'From a full gut remodel to a tile and fixture refresh, for everything from lakefront homes to the area’s older housing stock.',
        icon: Home,
    },
    {
        name: 'Painting & Drywall',
        desc: 'Interior and exterior painting plus drywall hanging, finishing and repair — done with proper prep so it holds up to Hot Springs’ humidity.',
        icon: Paintbrush,
    },
    {
        name: 'Siding, Fencing, Decks & Flooring',
        desc: 'Exterior upgrades built for sloped and lakeside properties — siding replacement, fencing, deck builds, and flooring or tile installation.',
        icon: Blocks,
    },
]

const whyUs = [
    {
        n: '01',
        title: 'A Short Drive from North Little Rock',
        desc: 'We’re based off I-30, so Hot Springs and the rest of Garland County are a regular part of our route, not a special trip.',
    },
    {
        n: '02',
        title: 'Built for Hillside Lots',
        desc: 'Retaining walls, steep grading and drainage that actually moves water where you want it — this is the terrain we work with regularly.',
    },
    {
        n: '03',
        title: 'Free, Written Estimates',
        desc: 'We inspect the site and give you an exact price before any work begins — no surprise add-ons later.',
    },
    {
        n: '04',
        title: 'Licensed & Insured',
        desc: 'Every job, residential or commercial, is covered by proper licensing and insurance.',
    },
    {
        n: '05',
        title: '30-Day Workmanship Warranty',
        desc: 'If something isn’t right, we come back and fix it — covered by our 30-day warranty on workmanship.',
    },
]

const processSteps = [
    { t: 'Call or Text', d: 'Tell us what’s going on and we’ll get you on the schedule.' },
    { t: 'On-Site Inspection', d: 'Our crew walks the grade and inspects the actual problem — slope, drainage, foundation.' },
    { t: 'Written, Upfront Quote', d: 'You get an exact price before any work starts, approved by you first.' },
    { t: 'Work & Warranty', d: 'We do the job, clean up after ourselves, and back it with our 30-day warranty.' },
]

const faqs = [
    {
        q: 'Do you work on hillside and sloped lots in Hot Springs?',
        a: 'Yes — sloped grading, retaining wall support and hillside drainage are a regular part of what we do around Hot Springs and Lake Hamilton.',
    },
    {
        q: 'How far is Hot Springs from your North Little Rock office?',
        a: 'About an hour via I-30. We serve Garland County as part of our regular Central Arkansas coverage, not as a special trip.',
    },
    {
        q: 'Do you install French drains and drainage systems?',
        a: 'Yes, it’s one of our core services here — Hot Springs gets over 54 inches of rain a year, and steep lots need somewhere for that water to go besides your foundation.',
    },
    {
        q: 'Do you work on lakefront properties near Lake Hamilton?',
        a: 'Yes. Lakeside and other Lake Hamilton-area neighborhoods deal with erosion and runoff regularly — we grade and drain for it, and handle remodeling and repairs on lakefront homes too.',
    },
    {
        q: 'Are estimates free?',
        a: 'Yes, call or text (501) 960-1352 for a free on-site inspection and written quote.',
    },
    {
        q: 'What warranty do you offer?',
        a: 'A 30-day warranty on workmanship applies to every job, plus bundle discounts when you combine multiple services.',
    },
]

const communities = ['Lakeside', 'Lake Hamilton', 'Whittington Park', 'Downtown Hot Springs', 'Piney', 'Park Avenue']

function useReveal(rootSelector: string) {
    useEffect(() => {
        const els = document.querySelectorAll(rootSelector)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('svrhs-visible')
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

export default function SVRenovationsHotSpringsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    useReveal('.svrhs-reveal')

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
        name: 'S&V Renovations, LLC',
        description:
            'Foundation repair, drainage, kitchen and bathroom remodeling, painting, drywall and home renovation serving Hot Springs and Garland County, AR.',
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
        geo: { '@type': 'GeoCoordinates', latitude: 34.5037, longitude: -93.0552 },
        areaServed: communities.map((c) => ({ '@type': 'Place', name: `${c}, Hot Springs, AR` })),
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
            name: 'Foundation & Renovation Services — Hot Springs',
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
            { '@type': 'ListItem', position: 4, name: 'Hot Springs', item: SITE_URL },
        ],
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }

    return (
        <>
            <Script id="svrhs-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Script id="svrhs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <Script id="svrhs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');

        :root {
          --hs-bg: #16130F;
          --hs-surface: #201B15;
          --hs-surface2: #2A231C;
          --hs-border: rgba(241,233,221,0.10);
          --hs-border2: rgba(241,233,221,0.18);
          --hs-cream: #F1E9DD;
          --hs-cream-dim: rgba(241,233,221,0.65);
          --hs-muted: rgba(241,233,221,0.45);
          --hs-copper: #C1703D;
          --hs-copper-l: #DD9A63;
          --hs-copper-dim: rgba(193,112,61,0.16);

          --ff-disp: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'Work Sans', sans-serif;
        }

        .svrhs-root { font-family: var(--ff-body); background: var(--hs-bg); color: var(--hs-cream); overflow-x: hidden; }

        .svrhs-reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
        .svrhs-visible { opacity: 1; transform: translateY(0); }

        .svrhs-h { font-family: var(--ff-disp); font-weight: 600; letter-spacing: -0.005em; color: var(--hs-cream); }
        .svrhs-h em { font-style: italic; color: var(--hs-copper-l); }

        .svrhs-lbl { font-size: .72rem; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; color: var(--hs-copper-l); display: flex; align-items: center; gap: .65rem; }
        .svrhs-lbl::before { content: ''; width: 1.4rem; height: 1px; background: var(--hs-copper-l); display: block; }

        .svrhs-card { background: var(--hs-surface); border: 1px solid var(--hs-border); border-radius: 14px; transition: border-color .25s, transform .25s; }
        .svrhs-card:hover { border-color: rgba(193,112,61,.45); transform: translateY(-3px); }

        .svrhs-faq { border-bottom: 1px solid var(--hs-border); }

        .svrhs-btn-copper { background: var(--hs-copper); color: #16130F; }
        .svrhs-btn-copper:hover { background: var(--hs-copper-l); }
        .svrhs-btn-outline { border: 1px solid var(--hs-border2); color: var(--hs-cream); background: transparent; }
        .svrhs-btn-outline:hover { border-color: var(--hs-copper); color: var(--hs-copper-l); }
      `}</style>

            <div className="svrhs-root">
                {/* ─── MINIMAL TOP BAR ─── */}
                <header className="sticky top-0 z-50" style={{ background: 'rgba(22,19,15,.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--hs-border)' }}>
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: 'var(--hs-copper)', color: '#16130F' }}>S&V</span>
                            <span className="text-sm sm:text-base font-semibold tracking-wide">S&amp;V Renovations — Hot Springs</span>
                        </Link>
                        <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: 'var(--hs-copper-l)' }}>
                            <Phone size={15} /> {PHONE}
                        </a>
                    </div>
                </header>

                {/* ─── BREADCRUMB ─── */}
                <div className="max-w-7xl mx-auto px-6 pt-5 text-xs" style={{ color: 'var(--hs-muted)' }}>
                    <Link href="/" className="hover:text-[--hs-cream]">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/businesses/" className="hover:text-[--hs-cream]">Businesses</Link>
                    <span className="mx-2">/</span>
                    <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="hover:text-[--hs-cream]">S&amp;V Renovations</Link>
                    <span className="mx-2">/</span>
                    <span style={{ color: 'var(--hs-cream)' }}>Hot Springs</span>
                </div>

                {/* ─── HERO ─── */}
                <section className="max-w-7xl mx-auto px-6 pt-10 sm:pt-16 pb-20 sm:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
                        <div className="lg:col-span-8">
                            <span className="svrhs-reveal svrhs-lbl mb-7 inline-flex"><Mountain size={13} /> Serving Hot Springs &amp; Garland County, AR</span>
                            <h1 className="svrhs-reveal svrhs-h" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.03 }}>
                                Foundation &amp; Drainage Work for<br /><em>Hot Springs&apos; Hillside Homes</em>
                            </h1>
                            <p className="svrhs-reveal mt-7 max-w-xl leading-relaxed" style={{ color: 'var(--hs-cream-dim)', fontSize: '1.05rem' }}>
                                Hot Springs is built on hills — which means retaining walls, drainage and foundation movement come with the territory. S&amp;V Renovations handles foundation repair, French drains, waterproofing, and full remodeling for homes throughout Garland County, from downtown to Lake Hamilton.
                            </p>
                            <div className="svrhs-reveal flex flex-col sm:flex-row gap-4 mt-9">
                                <a href={PHONE_HREF} className="svrhs-btn-copper inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 font-bold text-sm transition-colors">
                                    <Phone size={16} /> Call {PHONE}
                                </a>
                                <a href={`mailto:${EMAIL}`} className="svrhs-btn-outline inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 font-semibold text-sm transition-colors">
                                    <Mail size={16} /> Get a Free Quote
                                </a>
                            </div>
                        </div>
                        <div className="svrhs-reveal lg:col-span-4">
                            <div className="svrhs-card overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={HERO_IMG}
                                        alt="Hillside home surrounded by trees near a lake in Hot Springs, AR"
                                        fill
                                        priority
                                        quality={85}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-7">
                                    <p className="svrhs-lbl mb-5">Why It&apos;s Different Here</p>
                                    <p className="leading-relaxed text-sm" style={{ color: 'var(--hs-cream-dim)' }}>
                                        Most Hot Springs lots are sloped, some steeply. Water runs downhill fast, and it collects right where a flat-lot contractor wouldn&apos;t think to grade for it. We build for the slope you actually have.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SERVICES ─── */}
                <section style={{ background: 'var(--hs-surface2)', borderTop: '1px solid var(--hs-border)', borderBottom: '1px solid var(--hs-border)' }} className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="svrhs-reveal svrhs-lbl mb-5 inline-flex">What We Do</span>
                        <h2 className="svrhs-reveal svrhs-h mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>Services for <em>Every Grade</em></h2>
                        <p className="svrhs-reveal max-w-2xl mb-14" style={{ color: 'var(--hs-cream-dim)' }}>
                            From foundation and drainage work built for hillside lots to the remodeling and finish trades that follow — here&apos;s what we handle across Hot Springs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <div key={s.name} className="svrhs-reveal svrhs-card p-7">
                                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: 'var(--hs-copper-dim)' }}>
                                        <s.icon size={20} style={{ color: 'var(--hs-copper-l)' }} />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--hs-cream)' }}>{s.name}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--hs-cream-dim)' }}>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY US — numbered rows ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
                        <div>
                            <span className="svrhs-reveal svrhs-lbl mb-5 inline-flex">Why It Matters Here</span>
                            <h2 className="svrhs-reveal svrhs-h mb-6" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>Why Hot Springs<br /><em>Chooses S&amp;V</em></h2>
                            <p className="svrhs-reveal leading-relaxed" style={{ color: 'var(--hs-cream-dim)' }}>
                                Hillside foundations fail differently than flat-lot ones — usually water pressure and slope movement rather than simple settling. We built our process around exactly that.
                            </p>
                        </div>
                        <div>
                            {whyUs.map((item) => (
                                <div key={item.n} className="svrhs-reveal flex gap-6 pb-8 svrhs-faq last:border-0">
                                    <span className="font-semibold text-4xl" style={{ fontFamily: 'var(--ff-disp)', color: 'var(--hs-border2)' }}>{item.n}</span>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-base mb-1.5" style={{ color: 'var(--hs-cream)' }}>{item.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--hs-cream-dim)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── LOCAL TIP (E-E-A-T) ─── */}
                <section style={{ background: 'var(--hs-surface2)', borderTop: '1px solid var(--hs-border)', borderBottom: '1px solid var(--hs-border)' }} className="py-20 sm:py-24 px-6">
                    <div className="max-w-5xl mx-auto svrhs-reveal svrhs-card overflow-hidden grid grid-cols-1 md:grid-cols-5">
                        <div className="relative h-56 md:h-full md:col-span-2">
                            <Image
                                src={TIP_IMG}
                                alt="Stones and landscaping on a green hillside, similar to sloped lots around Hot Springs, AR"
                                fill
                                quality={80}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 sm:p-10 md:col-span-3 flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-full items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: 'var(--hs-copper-dim)' }}>
                                <Waves size={24} style={{ color: 'var(--hs-copper-l)' }} />
                            </div>
                            <div>
                                <h2 className="svrhs-h mb-3" style={{ fontSize: '1.7rem' }}>Hot Springs&apos; Hills Move Water Fast</h2>
                                <p className="leading-relaxed mb-3" style={{ color: 'var(--hs-cream-dim)' }}>
                                    Hot Springs averages more than 54 inches of rain a year, and most residential lots are sloped — some steeply. That runoff heads downhill fast after a storm, collecting against foundations at the low end of a grade and putting steady pressure on retaining walls. Neighborhoods near Lake Hamilton and local streams, like Lakeside, see this most acutely during heavy rain. A properly installed French drain and correct grading is usually the difference between a dry crawl space and a recurring repair bill.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5" style={{ background: 'var(--hs-copper-dim)', color: 'var(--hs-copper-l)' }}>
                                        <Droplets size={13} /> 54&quot;+ average annual rainfall
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5" style={{ background: 'var(--hs-copper-dim)', color: 'var(--hs-copper-l)' }}>
                                        <Mountain size={13} /> Sloped-lot drainage &amp; retaining walls
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS — vertical timeline ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="svrhs-reveal svrhs-h text-center mb-16" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>From First Call to <em>Finished Job</em></h2>
                        <div className="relative pl-10">
                            <div className="absolute left-[15px] top-2 bottom-2 w-px" style={{ background: 'var(--hs-border2)' }} />
                            {processSteps.map((step, i) => (
                                <div key={i} className="svrhs-reveal relative mb-10 last:mb-0">
                                    <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'var(--hs-copper)', color: '#16130F' }}>{i + 1}</div>
                                    <h3 className="font-semibold text-base mb-1.5" style={{ color: 'var(--hs-cream)' }}>{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--hs-cream-dim)' }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── COMMUNITIES ─── */}
                <section style={{ background: 'var(--hs-surface2)', borderTop: '1px solid var(--hs-border)', borderBottom: '1px solid var(--hs-border)' }} className="py-20 sm:py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <TreePine size={30} style={{ color: 'var(--hs-copper-l)' }} className="svrhs-reveal mx-auto mb-5" />
                        <h2 className="svrhs-reveal svrhs-h mb-4" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)' }}>Areas We Serve</h2>
                        <p className="svrhs-reveal leading-relaxed mb-8" style={{ color: 'var(--hs-cream-dim)' }}>
                            We work throughout Hot Springs and Garland County — downtown, the Lake Hamilton shoreline, and the hillside neighborhoods in between.
                        </p>
                        <div className="svrhs-reveal flex flex-wrap justify-center gap-2.5">
                            {communities.map((c) => (
                                <span key={c} className="text-xs font-semibold rounded-full px-4 py-2" style={{ border: '1px solid var(--hs-border2)', color: 'var(--hs-cream-dim)' }}>{c}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="svrhs-reveal svrhs-h text-center mb-14" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>Hot Springs <em>FAQs</em></h2>
                        <div>
                            {faqs.map((f, i) => (
                                <div key={i} className="svrhs-reveal svrhs-faq">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center gap-4 py-6 text-left">
                                        <span className="font-semibold text-base sm:text-lg" style={{ color: 'var(--hs-cream)' }}>{f.q}</span>
                                        <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ color: 'var(--hs-copper-l)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} />
                                    </button>
                                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '220px' : '0px' }}>
                                        <p className="pb-6 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--hs-cream-dim)' }}>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── CROSS-LINK TO NORTH LITTLE ROCK ─── */}
                <div className="max-w-7xl mx-auto px-6 pb-20 sm:pb-24">
                    <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="svrhs-card block p-8 group">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-lg mb-1 transition-colors" style={{ color: 'var(--hs-cream)' }}>Also Serving North Little Rock, AR</h3>
                                <p className="text-sm" style={{ color: 'var(--hs-cream-dim)' }}>Foundation repair, drainage, remodeling and painting from our Dublin Avenue home base — 72114 through 72120.</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-sm whitespace-nowrap" style={{ color: 'var(--hs-copper-l)' }}>
                                View North Little Rock page <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* ─── CTA ─── */}
                <div className="max-w-7xl mx-auto px-6 pb-24 sm:pb-28">
                    <div className="svrhs-reveal rounded-2xl p-10 sm:p-16 text-center" style={{ background: 'var(--hs-copper)' }}>
                        <h2 className="font-semibold mb-4" style={{ fontFamily: 'var(--ff-disp)', color: '#16130F', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>Foundation or Drainage Trouble? Call S&amp;V.</h2>
                        <p className="text-lg mb-9 max-w-xl mx-auto" style={{ color: 'rgba(22,19,15,.75)' }}>Local, licensed and insured, serving Hot Springs and Garland County.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-bold text-sm" style={{ background: '#16130F', color: 'var(--hs-cream)' }}>
                                <Phone size={16} /> Call {PHONE}
                            </a>
                            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-semibold text-sm border-2" style={{ borderColor: '#16130F', color: '#16130F' }}>
                                <Mail size={16} /> Email Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* ─── FOOTER ─── */}
                <footer className="pt-14 pb-28 sm:pb-14 px-6" style={{ background: '#100D0A', borderTop: '1px solid var(--hs-border)' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: 'var(--hs-copper)', color: '#16130F' }}>S&V</span>
                                <span className="font-semibold" style={{ color: 'var(--hs-cream)' }}>S&amp;V Renovations</span>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--hs-muted)' }}>Foundation repair and renovation based in North Little Rock, AR, serving Hot Springs, Garland County and the surrounding 50-mile radius.</p>
                        </div>
                        <div>
                            <h4 className="svrhs-lbl mb-4">Contact</h4>
                            <ul className="space-y-3 text-sm" style={{ color: 'var(--hs-cream-dim)' }}>
                                <li><a href={PHONE_HREF} className="hover:text-[--hs-cream]">{PHONE}</a></li>
                                <li><a href={`mailto:${EMAIL}`} className="hover:text-[--hs-cream]">{EMAIL}</a></li>
                                <li>Mon–Fri 7am–5pm &middot; Sat 8am–3pm &middot; Sun closed</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="svrhs-lbl mb-4">Areas Served</h4>
                            <ul className="space-y-2 text-sm" style={{ color: 'var(--hs-cream-dim)' }}>
                                {communities.slice(0, 5).map((c) => <li key={c}>{c}, AR</li>)}
                            </ul>
                            <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--hs-copper-l)' }}>
                                See North Little Rock service area &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ borderTop: '1px solid var(--hs-border)', color: 'var(--hs-muted)' }}>
                        <span>Powered by NearbyBizFinder</span>
                        <div className="flex gap-6">
                            <Link href="/privacy/" className="hover:text-[--hs-cream]">Privacy Policy</Link>
                            <Link href="/terms/" className="hover:text-[--hs-cream]">Terms of Service</Link>
                        </div>
                    </div>
                </footer>

                {/* ─── STICKY MOBILE CALL BAR ─── */}
                <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden" style={{ background: 'var(--hs-copper)' }}>
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold" style={{ color: '#16130F' }}>
                        <Phone size={18} /> Call {PHONE} Now
                    </a>
                </div>
            </div>
        </>
    )
}
