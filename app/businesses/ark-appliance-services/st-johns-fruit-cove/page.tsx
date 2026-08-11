'use client'

/* ─────────────────────────────────────────────
   ARK APPLIANCE SERVICES LLC — St. Johns & Fruit Cove, FL
   Growth-area landing page · dark "premium new-construction" theme
   (Deliberately different palette, type system and layout from the
   Mandarin page — see /businesses/ark-appliance-services/)

   PLACEHOLDERS TO CONFIRM WITH CLIENT BEFORE THIS GOES LIVE:
     - [X]+ years in business
     - $[XX] diagnostic fee
     - [warranty length/terms]
   Do not remove the brackets until the client confirms real values.
───────────────────────────────────────────── */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import {
    Phone, Mail,
    Refrigerator, Waves, Flame, Droplets, Timer, Award,
    ChevronDown, ArrowRight, Zap, Home, CalendarClock,
} from 'lucide-react'

const SITE_URL = 'https://nearbybizfinder.com/businesses/ark-appliance-services/st-johns-fruit-cove/'
const PARENT_URL = 'https://nearbybizfinder.com/businesses/ark-appliance-services/'
const PHONE = '(215) 316-3924'
const PHONE_HREF = 'tel:+12153163924'
const EMAIL = 'arkapplianceservicesllc@gmail.com'

// Stock photography (Pexels — free to use, no attribution required). Swap
// for real client/job-site photos whenever they're available.
const HERO_IMG = 'https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg'
const TIP_IMG = 'https://images.pexels.com/photos/17301027/pexels-photo-17301027.jpeg'

const services = [
    {
        name: 'Refrigerator & Freezer Repair',
        desc: 'From everyday top-freezers to the French-door and built-in units common in newer St. Johns homes, we diagnose cooling, leaking and ice-maker problems and restore proper temperature fast.',
        icon: Refrigerator,
    },
    {
        name: 'Washer & Dryer Repair',
        desc: 'No spin, no drain, no heat, or a dryer running long? We repair the belts, pumps, elements and boards on top- and front-load machines.',
        icon: Waves,
    },
    {
        name: 'Stove, Oven & Range Repair',
        desc: 'Weak burners, an oven off temperature, or failed igniters? We service electric and gas ranges and recalibrate for even cooking.',
        icon: Flame,
    },
    {
        name: 'Dishwasher Repair',
        desc: "Won't drain, won't clean, or leaking onto the floor? We fix pumps, valves and seals so it runs right.",
        icon: Droplets,
    },
    {
        name: 'Microwave Repair',
        desc: "Over-the-range and countertop units that won't heat, spark, or spin — repaired, or honestly assessed for replacement.",
        icon: Timer,
    },
    {
        name: 'All Major & Premium Brands',
        desc: 'Samsung, LG, Whirlpool, Maytag, GE, Frigidaire, KitchenAid and more — including the higher-end appliances found in new-construction homes.',
        icon: Award,
    },
]

const whyUs = [
    {
        n: '01',
        title: 'Local, Fast Response',
        desc: 'Based minutes north in Mandarin, so we keep St. Johns and Fruit Cove arrival times short.',
    },
    {
        n: '02',
        title: 'Built for Newer Homes',
        desc: 'St. Johns County is full of new-construction homes whose builder warranties have run out. We service the mid- and premium-brand appliances those homes are built around.',
    },
    {
        n: '03',
        title: 'Upfront, Honest Pricing',
        desc: 'A $[XX] diagnostic fee, applied toward the repair, approved by you before we start. [Confirm fee structure with client]',
    },
    {
        n: '04',
        title: 'Insured Technicians',
        desc: 'Insured techs with [X]+ years in the trade who respect your home — clean work areas, protected floors, no upselling. [Confirm years in business]',
    },
    {
        n: '05',
        title: 'Guaranteed Repairs',
        desc: 'Every job is backed by our [warranty length] parts & labor warranty. [Confirm warranty terms with client]',
    },
]

const processSteps = [
    { t: 'Site Call & Estimate', d: 'Call or email — tell us the symptom and we get you on the schedule.' },
    { t: 'Diagnosis On-Site', d: 'Our tech inspects the unit and explains exactly what\'s wrong, in plain language.' },
    { t: 'Upfront Quote', d: 'You get an exact price before any work begins — approved by you first, always.' },
    { t: 'Repair & Guarantee', d: 'We fix it, test it, and back it with our warranty before we leave.' },
]

const faqs = [
    {
        q: 'Do you cover all of St. Johns and Fruit Cove?',
        a: 'Yes — we service 32259 including Fruit Cove, St. Johns, Julington Creek, Switzerland, RiverTown and Durbin Crossing, plus nearby Nocatee and Mandarin.',
    },
    {
        q: 'How fast can you come out?',
        a: 'We offer same-day or next-day appointments where our Monday–Saturday (9am–5pm) schedule allows. Booking earlier in the day helps.',
    },
    {
        q: 'Do you service premium or new-construction appliances?',
        a: 'Yes. We regularly work on the mid- and premium-brand appliances installed in newer St. Johns homes, whether the unit is brand new or a few years past warranty.',
    },
    {
        q: 'What will it cost?',
        a: 'You get an exact price up front after diagnosis ($[XX] diagnostic fee, confirm with client), before any work starts.',
    },
    {
        q: 'Should I repair or replace?',
        a: "We'll tell you honestly on-site. If the appliance is newer — common here — repair is almost always the better value.",
    },
]

const communities = ['Fruit Cove', 'St. Johns', 'Julington Creek Plantation', 'Switzerland', 'RiverTown', 'Durbin Crossing']

function useReveal(rootSelector: string) {
    useEffect(() => {
        const els = document.querySelectorAll(rootSelector)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('arksj-visible')
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

export default function ArkStJohnsFruitCovePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    useReveal('.arksj-reveal')

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Ark Appliance Services LLC',
        description:
            'Residential appliance repair serving St. Johns and Fruit Cove, FL — refrigerators, freezers, washers, dryers, ovens, ranges, dishwashers and microwaves.',
        url: SITE_URL,
        image: HERO_IMG,
        telephone: PHONE,
        email: EMAIL,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jacksonville',
            addressRegion: 'FL',
            postalCode: '32257',
            addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 30.0932, longitude: -81.6668 },
        areaServed: communities.map((c) => ({ '@type': 'Place', name: `${c}, FL` })),
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
            name: 'Appliance Repair Services — St. Johns & Fruit Cove',
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
            { '@type': 'ListItem', position: 3, name: 'Ark Appliance Services LLC', item: PARENT_URL },
            { '@type': 'ListItem', position: 4, name: 'St. Johns & Fruit Cove', item: SITE_URL },
        ],
    }

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }

    return (
        <>
            <Script id="ark-sjfc-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Script id="ark-sjfc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <Script id="ark-sjfc-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --sj-bg: #0B1B24;
          --sj-surface: #10222C;
          --sj-surface2: #142834;
          --sj-border: rgba(243,238,227,0.10);
          --sj-border2: rgba(243,238,227,0.18);
          --sj-cream: #F3EEE3;
          --sj-cream-dim: rgba(243,238,227,0.65);
          --sj-muted: rgba(243,238,227,0.45);
          --sj-gold: #C9A24B;
          --sj-gold-l: #DDBE73;
          --sj-gold-dim: rgba(201,162,75,0.14);

          --ff-disp: 'Fraunces', Georgia, serif;
          --ff-body: 'Inter', sans-serif;
        }

        .arksj-root { font-family: var(--ff-body); background: var(--sj-bg); color: var(--sj-cream); overflow-x: hidden; }

        .arksj-reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
        .arksj-visible { opacity: 1; transform: translateY(0); }

        .arksj-h { font-family: var(--ff-disp); font-weight: 600; letter-spacing: -0.01em; color: var(--sj-cream); }
        .arksj-h em { font-style: italic; color: var(--sj-gold); }

        .arksj-lbl { font-size: .72rem; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; color: var(--sj-gold); display: flex; align-items: center; gap: .65rem; }
        .arksj-lbl::before { content: ''; width: 1.4rem; height: 1px; background: var(--sj-gold); display: block; }

        .arksj-card { background: var(--sj-surface); border: 1px solid var(--sj-border); border-radius: 14px; transition: border-color .25s, transform .25s; }
        .arksj-card:hover { border-color: rgba(201,162,75,.45); transform: translateY(-3px); }

        .arksj-faq { border-bottom: 1px solid var(--sj-border); }

        .arksj-btn-gold { background: var(--sj-gold); color: #0B1B24; }
        .arksj-btn-gold:hover { background: var(--sj-gold-l); }
        .arksj-btn-outline { border: 1px solid var(--sj-border2); color: var(--sj-cream); background: transparent; }
        .arksj-btn-outline:hover { border-color: var(--sj-gold); color: var(--sj-gold); }
      `}</style>

            <div className="arksj-root">
                {/* ─── MINIMAL TOP BAR ─── */}
                <header className="sticky top-0 z-50" style={{ background: 'rgba(11,27,36,.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--sj-border)' }}>
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--sj-gold)', color: '#0B1B24' }}>A</span>
                            <span className="text-sm sm:text-base font-semibold tracking-wide">Ark Appliance Services — St. Johns &amp; Fruit Cove</span>
                        </Link>
                        <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: 'var(--sj-gold)' }}>
                            <Phone size={15} /> {PHONE}
                        </a>
                    </div>
                </header>

                {/* ─── BREADCRUMB ─── */}
                <div className="max-w-7xl mx-auto px-6 pt-5 text-xs" style={{ color: 'var(--sj-muted)' }}>
                    <Link href="/" className="hover:text-[--sj-cream]">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/businesses/" className="hover:text-[--sj-cream]">Businesses</Link>
                    <span className="mx-2">/</span>
                    <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="hover:text-[--sj-cream]">Ark Appliance Services</Link>
                    <span className="mx-2">/</span>
                    <span style={{ color: 'var(--sj-cream)' }}>St. Johns &amp; Fruit Cove</span>
                </div>

                {/* ─── HERO ─── */}
                <section className="max-w-7xl mx-auto px-6 pt-10 sm:pt-16 pb-20 sm:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
                        <div className="lg:col-span-8">
                            <span className="arksj-reveal arksj-lbl mb-7 inline-flex">Serving 32259 &middot; Fruit Cove &amp; St. Johns, FL</span>
                            <h1 className="arksj-reveal arksj-h" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.03 }}>
                                Appliance Repair for<br /><em>St. Johns &amp; Fruit Cove</em>
                            </h1>
                            <p className="arksj-reveal mt-7 max-w-xl leading-relaxed" style={{ color: 'var(--sj-cream-dim)', fontSize: '1.05rem' }}>
                                St. Johns and Fruit Cove homeowners expect their kitchens and laundry rooms to just work. Ark Appliance Services repairs refrigerators, freezers, washers, dryers, ovens, ranges, dishwashers and microwaves throughout 32259, from the SR-13 corridor through Julington Creek, Switzerland, RiverTown and Durbin Crossing.
                            </p>
                            <div className="arksj-reveal flex flex-col sm:flex-row gap-4 mt-9">
                                <a href={PHONE_HREF} className="arksj-btn-gold inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 font-bold text-sm transition-colors">
                                    <Phone size={16} /> Call {PHONE}
                                </a>
                                <a href={`mailto:${EMAIL}`} className="arksj-btn-outline inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 font-semibold text-sm transition-colors">
                                    <Mail size={16} /> Book a Repair
                                </a>
                            </div>
                        </div>
                        <div className="arksj-reveal lg:col-span-4">
                            <div className="arksj-card overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={HERO_IMG}
                                        alt="Elegant new-construction kitchen with marble island and stainless steel appliances in St. Johns, FL"
                                        fill
                                        priority
                                        quality={85}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-7">
                                    <p className="arksj-lbl mb-5">Why We're Different Out Here</p>
                                    <p className="leading-relaxed text-sm" style={{ color: 'var(--sj-cream-dim)' }}>
                                        We're based just north in Mandarin, so St. Johns is a short hop for our techs — no long waits, no call-center runaround. We regularly service the mid- and premium-brand appliances installed in this county's newer builds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SERVICES ─── */}
                <section style={{ background: 'var(--sj-surface2)', borderTop: '1px solid var(--sj-border)', borderBottom: '1px solid var(--sj-border)' }} className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="arksj-reveal arksj-lbl mb-5 inline-flex">What We Repair</span>
                        <h2 className="arksj-reveal arksj-h mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>Services for <em>Every Room</em></h2>
                        <p className="arksj-reveal max-w-2xl mb-14" style={{ color: 'var(--sj-cream-dim)' }}>
                            From everyday top-freezers to the built-in units common in newer construction — here's everything we service across St. Johns and Fruit Cove.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <div key={s.name} className="arksj-reveal arksj-card p-7">
                                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: 'var(--sj-gold-dim)' }}>
                                        <s.icon size={20} style={{ color: 'var(--sj-gold)' }} />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--sj-cream)' }}>{s.name}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--sj-cream-dim)' }}>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY US — numbered rows ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
                        <div>
                            <span className="arksj-reveal arksj-lbl mb-5 inline-flex">Why It Matters Here</span>
                            <h2 className="arksj-reveal arksj-h mb-6" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>Why St. Johns &amp; Fruit Cove<br /><em>Choose Ark</em></h2>
                            <p className="arksj-reveal leading-relaxed" style={{ color: 'var(--sj-cream-dim)' }}>
                                New-construction appliances fail differently than older ones — usually a control board or sensor fault rather than mechanical wear. We built our process around exactly that.
                            </p>
                        </div>
                        <div>
                            {whyUs.map((item) => (
                                <div key={item.n} className="arksj-reveal flex gap-6 pb-8 arksj-faq last:border-0">
                                    <span className="font-semibold text-4xl" style={{ fontFamily: 'var(--ff-disp)', color: 'var(--sj-border2)' }}>{item.n}</span>
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-base mb-1.5" style={{ color: 'var(--sj-cream)' }}>{item.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--sj-cream-dim)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── LOCAL TIP (E-E-A-T) ─── */}
                <section style={{ background: 'var(--sj-surface2)', borderTop: '1px solid var(--sj-border)', borderBottom: '1px solid var(--sj-border)' }} className="py-20 sm:py-24 px-6">
                    <div className="max-w-5xl mx-auto arksj-reveal arksj-card overflow-hidden grid grid-cols-1 md:grid-cols-5">
                        <div className="relative h-56 md:h-full md:col-span-2">
                            <Image
                                src={TIP_IMG}
                                alt="Luxurious modern kitchen with granite countertops and stainless steel appliances"
                                fill
                                quality={80}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 sm:p-10 md:col-span-3 flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-full items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: 'var(--sj-gold-dim)' }}>
                                <Home size={24} style={{ color: 'var(--sj-gold)' }} />
                            </div>
                            <div>
                                <h2 className="arksj-h mb-3" style={{ fontSize: '1.7rem' }}>New Home? Your Appliances Can Still Fail Early.</h2>
                                <p className="leading-relaxed mb-3" style={{ color: 'var(--sj-cream-dim)' }}>
                                    Many St. Johns homes come with premium appliances that develop issues right after the builder warranty ends — often control-board or sensor faults rather than mechanical wear. Two things that help: put refrigerators and microwaves on surge protection (St. Johns gets heavy summer lightning), and if you're on well or hard water, watch dishwashers and ice makers for mineral buildup — the #1 avoidable failure we see out here.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5" style={{ background: 'var(--sj-gold-dim)', color: 'var(--sj-gold)' }}>
                                        <Zap size={13} /> Surge-protect refrigerators &amp; microwaves
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5" style={{ background: 'var(--sj-gold-dim)', color: 'var(--sj-gold)' }}>
                                        <Droplets size={13} /> Watch for well-water mineral buildup
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS — vertical timeline ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="arksj-reveal arksj-h text-center mb-16" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>From First Call to <em>Finished Repair</em></h2>
                        <div className="relative pl-10">
                            <div className="absolute left-[15px] top-2 bottom-2 w-px" style={{ background: 'var(--sj-border2)' }} />
                            {processSteps.map((step, i) => (
                                <div key={i} className="arksj-reveal relative mb-10 last:mb-0">
                                    <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'var(--sj-gold)', color: '#0B1B24' }}>{i + 1}</div>
                                    <h3 className="font-semibold text-base mb-1.5" style={{ color: 'var(--sj-cream)' }}>{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--sj-cream-dim)' }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── COMMUNITIES ─── */}
                <section style={{ background: 'var(--sj-surface2)', borderTop: '1px solid var(--sj-border)', borderBottom: '1px solid var(--sj-border)' }} className="py-20 sm:py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <CalendarClock size={30} style={{ color: 'var(--sj-gold)' }} className="arksj-reveal mx-auto mb-5" />
                        <h2 className="arksj-reveal arksj-h mb-4" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)' }}>Communities We Serve</h2>
                        <p className="arksj-reveal leading-relaxed mb-8" style={{ color: 'var(--sj-cream-dim)' }}>
                            We repair appliances throughout St. Johns County's fast-growing 32259 communities, and neighborhoods along the SR-13 / San Jose Boulevard corridor from the Mandarin border south.
                        </p>
                        <div className="arksj-reveal flex flex-wrap justify-center gap-2.5">
                            {communities.map((c) => (
                                <span key={c} className="text-xs font-semibold rounded-full px-4 py-2" style={{ border: '1px solid var(--sj-border2)', color: 'var(--sj-cream-dim)' }}>{c}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FAQ ─── */}
                <section className="py-20 sm:py-28 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="arksj-reveal arksj-h text-center mb-14" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)' }}>St. Johns &amp; Fruit Cove <em>FAQs</em></h2>
                        <div>
                            {faqs.map((f, i) => (
                                <div key={i} className="arksj-reveal arksj-faq">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center gap-4 py-6 text-left">
                                        <span className="font-semibold text-base sm:text-lg" style={{ color: 'var(--sj-cream)' }}>{f.q}</span>
                                        <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ color: 'var(--sj-gold)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} />
                                    </button>
                                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '220px' : '0px' }}>
                                        <p className="pb-6 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--sj-cream-dim)' }}>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── CROSS-LINK TO MANDARIN ─── */}
                <div className="max-w-7xl mx-auto px-6 pb-20 sm:pb-24">
                    <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="arksj-card block p-8 group">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-lg mb-1 transition-colors" style={{ color: 'var(--sj-cream)' }}>Also Serving Mandarin, FL</h3>
                                <p className="text-sm" style={{ color: 'var(--sj-cream-dim)' }}>Refrigerator, washer/dryer, oven &amp; dishwasher repair for our Mandarin home base — 32257, 32223, 32258.</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-sm whitespace-nowrap" style={{ color: 'var(--sj-gold)' }}>
                                View Mandarin page <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* ─── CTA ─── */}
                <div className="max-w-7xl mx-auto px-6 pb-24 sm:pb-28">
                    <div className="arksj-reveal rounded-2xl p-10 sm:p-16 text-center" style={{ background: 'var(--sj-gold)' }}>
                        <h2 className="font-semibold mb-4" style={{ fontFamily: 'var(--ff-disp)', color: '#0B1B24', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>Appliance Trouble? Call Ark.</h2>
                        <p className="text-lg mb-9 max-w-xl mx-auto" style={{ color: 'rgba(11,27,36,.75)' }}>Local, insured, Monday–Saturday. Serving St. Johns and Fruit Cove.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-bold text-sm" style={{ background: '#0B1B24', color: 'var(--sj-cream)' }}>
                                <Phone size={16} /> Call {PHONE}
                            </a>
                            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-md px-8 py-4 font-semibold text-sm border-2" style={{ borderColor: '#0B1B24', color: '#0B1B24' }}>
                                <Mail size={16} /> Email Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* ─── FOOTER ─── */}
                <footer className="pt-14 pb-28 sm:pb-14 px-6" style={{ background: '#081319', borderTop: '1px solid var(--sj-border)' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-9 h-9 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--sj-gold)', color: '#0B1B24' }}>A</span>
                                <span className="font-semibold" style={{ color: 'var(--sj-cream)' }}>Ark Appliance Services</span>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--sj-muted)' }}>Residential appliance repair based in Mandarin, FL, serving St. Johns, Fruit Cove and the surrounding 25-mile radius.</p>
                        </div>
                        <div>
                            <h4 className="arksj-lbl mb-4">Contact</h4>
                            <ul className="space-y-3 text-sm" style={{ color: 'var(--sj-cream-dim)' }}>
                                <li><a href={PHONE_HREF} className="hover:text-[--sj-cream]">{PHONE}</a></li>
                                <li><a href={`mailto:${EMAIL}`} className="hover:text-[--sj-cream]">{EMAIL}</a></li>
                                <li>Mon–Sat, 9am–5pm &middot; Sunday closed</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="arksj-lbl mb-4">Service Areas</h4>
                            <ul className="space-y-2 text-sm" style={{ color: 'var(--sj-cream-dim)' }}>
                                {communities.slice(0, 5).map((c) => <li key={c}>{c}, FL</li>)}
                            </ul>
                            <Link href={PARENT_URL.replace('https://nearbybizfinder.com', '')} className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--sj-gold)' }}>
                                See Mandarin service area &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ borderTop: '1px solid var(--sj-border)', color: 'var(--sj-muted)' }}>
                        <span>Powered by NearbyBizFinder</span>
                        <div className="flex gap-6">
                            <Link href="/privacy/" className="hover:text-[--sj-cream]">Privacy Policy</Link>
                            <Link href="/terms/" className="hover:text-[--sj-cream]">Terms of Service</Link>
                        </div>
                    </div>
                </footer>

                {/* ─── STICKY MOBILE CALL BAR ─── */}
                <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden" style={{ background: 'var(--sj-gold)' }}>
                    <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold" style={{ color: '#0B1B24' }}>
                        <Phone size={18} /> Call {PHONE} Now
                    </a>
                </div>
            </div>
        </>
    )
}
