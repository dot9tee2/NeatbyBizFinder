'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    Phone, Mail, MapPin, Clock,
    Shield, Wrench, CheckCircle, Zap,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   BUSINESS DATA
───────────────────────────────────────────── */
const biz = {
    name: 'Ziva Appliance Repair',
    phone: '(972) 904-5655',
    phoneHref: 'tel:9729045655',
    email: 'zivappliance@gmail.com',
    zip: '75071',
    city: 'McKinney, TX',
    radius: '35',
    hours: 'Mon – Sat · 8:00 AM – 7:00 PM',
}

const services = [
    {
        id: '01',
        name: 'Garbage Disposal',
        desc: 'Jammed, leaking, or completely dead — we diagnose and fix all major disposal brands. Fast, clean, and guaranteed.',
        img: '/ziva-appliance-repair/garbage-disposal.png',
        tags: ['InSinkErator', 'Moen', 'Waste King', 'Badger'],
    },
    {
        id: '02',
        name: 'Dishwasher Repair',
        desc: "Not draining, leaving spots, or won't start? We restore full cycle function quickly so your kitchen routine is back on track.",
        img: '/ziva-appliance-repair/dishwasher.png',
        tags: ['Bosch', 'Samsung', 'LG', 'KitchenAid', 'Whirlpool'],
    },
    {
        id: '03',
        name: 'Refrigerator & Freezer',
        desc: 'Temperature issues, strange noises, ice maker failures — we handle every fridge problem before your food spoils.',
        img: '/ziva-appliance-repair/refrigerator.png',
        tags: ['Samsung', 'LG', 'GE', 'Frigidaire', 'Maytag'],
    },
    {
        id: '04',
        name: 'Oven, Range & Stove',
        desc: 'Burners not igniting, oven not heating evenly, digital controls failing — gas or electric, we get you cooking again.',
        img: '/ziva-appliance-repair/oven.png',
        tags: ['GE', 'Whirlpool', 'KitchenAid', 'Bosch', 'Viking'],
    },
    {
        id: '05',
        name: 'Washer & Dryer',
        desc: 'Not spinning, not heating, leaking or shaking the whole room — front-load, top-load, gas and electric dryers covered.',
        img: '/ziva-appliance-repair/washer-dryer.png',
        tags: ['Samsung', 'LG', 'Maytag', 'Whirlpool', 'Speed Queen'],
    },
    {
        id: '06',
        name: 'Other Kitchen Appliances',
        desc: 'Microwaves, wine coolers, ice makers, and more. If it plugs in and lives in your kitchen, we can likely fix it.',
        img: '/ziva-appliance-repair/kitchen-appliances.png',
        tags: ['Microwaves', 'Wine Coolers', 'Ice Makers', 'Compactors'],
    },
]

const reasons = [
    { icon: Shield, title: 'Residential Specialists', desc: 'We work exclusively on home appliances — deep focus, expert results.' },
    { icon: Clock, title: 'Punctual Every Time', desc: 'We respect your schedule. Committed windows, no 6-hour wait ranges.' },
    { icon: CheckCircle, title: 'Transparent Pricing', desc: 'Upfront quotes before any work. No surprises on the final bill.' },
    { icon: Wrench, title: 'Work Guaranteed', desc: 'Every repair is backed by our satisfaction guarantee. Period.' },
    { icon: Zap, title: 'Same-Day Availability', desc: "Appliances don't wait. Whenever possible, neither do we." },
    { icon: MapPin, title: '35-Mile Coverage', desc: 'Based in McKinney 75071, serving the full DFW North corridor.' },
]

const cities = [
    'McKinney', 'Frisco', 'Allen', 'Plano', 'Richardson',
    'Garland', 'Wylie', 'Sachse', 'Murphy', 'Prosper',
    'Celina', 'Melissa', 'Fairview', 'Lucas', 'Princeton', 'Anna',
]

const testimonials = [
    {
        name: 'Jennifer M.',
        location: 'McKinney, TX',
        text: '"Disposal was jammed and leaking. Ziva showed up within hours, fixed it fast and even cleaned under the sink after. Absolutely exceptional service."',
    },
    {
        name: 'David R.',
        location: 'Frisco, TX',
        text: '"Another company quoted me an astronomical number. Ziva found the real issue — a clogged filter — and charged fairly. Honest, skilled, and fast."',
    },
    {
        name: 'Sarah K.',
        location: 'Allen, TX',
        text: '"Called at 8am about a noisy fridge, they were at my door by 10. Replaced a faulty fan motor and it\'s been silent ever since. Five stars, easily."',
    },
]

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.zr-reveal')
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('zr-visible')
                        io.unobserve(e.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function ZivaApplianceRepairPage() {
    const [formSent, setFormSent] = useState(false)
    useReveal()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setFormSent(true)
        setTimeout(() => setFormSent(false), 4000)
            ; (e.target as HTMLFormElement).reset()
    }

    return (
        <>
            {/* ─── GLOBAL STYLES ─── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=DM+Mono:wght@400&display=swap');

        :root {
          /* ── Palette ── */
          --zr-bg:        #FDFAF6;
          --zr-surface:   #FFFFFF;
          --zr-surface2:  #F5F0E8;
          --zr-surface3:  #EDE8DF;
          --zr-border:    rgba(60,40,20,0.10);
          --zr-border2:   rgba(60,40,20,0.18);
          --zr-red:       #B8273D;
          --zr-red-l:     #D43350;
          --zr-red-dim:   rgba(184,39,61,0.09);
          --zr-red-dim2:  rgba(184,39,61,0.16);
          --zr-ink:       #1C1410;
          --zr-ink2:      #5A4A3A;
          --zr-muted:     rgba(28,20,16,0.48);
          --zr-warm:      #C8A97A;

          /* ── Typography ── */
          --ff-disp:  'Cormorant Garamond', Georgia, serif;
          --ff-body:  'Plus Jakarta Sans', sans-serif;
          --ff-mono:  'DM Mono', monospace;
        }

        /* ── Base ── */
        .zr-root {
          font-family: var(--ff-body);
          background: var(--zr-bg);
          color: var(--zr-ink);
          overflow-x: hidden;
        }

        /* ── Reveal animation ── */
        .zr-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .65s ease, transform .65s ease;
        }
        .zr-visible { opacity: 1; transform: translateY(0); }

        /* ── Label ── */
        .zr-lbl {
          font-family: var(--ff-body);
          font-size: .72rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--zr-red);
          display: flex;
          align-items: center;
          gap: .65rem;
        }
        .zr-lbl::before {
          content: '';
          width: 1.2rem; height: 1px;
          background: var(--zr-red);
          display: block;
        }

        /* ── Headlines ── */
        .zr-h2 {
          font-family: var(--ff-disp);
          font-weight: 700;
          font-size: clamp(2.1rem, 3.8vw, 3.2rem);
          line-height: 1.06;
          letter-spacing: -.01em;
          color: var(--zr-ink);
        }
        .zr-h2 em { font-style: italic; color: var(--zr-red); }

        /* ── Marquee ── */
        @keyframes zr-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .zr-marquee-track {
          display: flex;
          width: max-content;
          animation: zr-marquee 30s linear infinite;
          white-space: nowrap;
        }

        /* ── Nav ── */
        .zr-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 90;
          padding: 1rem 3rem;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(253,250,246,.0);
          transition: background .35s, border-color .35s, box-shadow .35s;
          border-bottom: 1px solid transparent;
        }
        .zr-nav.scrolled {
          background: rgba(253,250,246,.97);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--zr-border);
          box-shadow: 0 1px 16px rgba(28,20,16,.06);
        }

        /* ── Hero ── */
        .zr-hero-bg {
          background:
            radial-gradient(ellipse 55% 70% at 22% 55%, rgba(200,169,122,.14) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 8% 85%, rgba(184,39,61,.05) 0%, transparent 60%),
            var(--zr-bg);
        }
        .zr-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--zr-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--zr-border) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }

        /* ── Service cards ── */
        .zr-scard {
          position: relative; overflow: hidden;
          background: var(--zr-surface);
          transition: background .25s, box-shadow .25s;
          cursor: default;
        }
        .zr-scard::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0; background: var(--zr-red);
          transition: width .45s ease;
        }
        .zr-scard:hover::after { width: 100%; }
        .zr-scard:hover {
          background: #FEFCF8 !important;
          box-shadow: 0 4px 24px rgba(28,20,16,.07);
        }
        .zr-img-wrap img { transition: transform .5s ease; }
        .zr-scard:hover .zr-img-wrap img { transform: scale(1.04); }

        /* ── Reason rows ── */
        .zr-reason { transition: background .2s, border-color .2s; }
        .zr-reason:hover {
          background: var(--zr-surface) !important;
          border-left-color: var(--zr-red) !important;
        }

        /* ── Testimonial cards ── */
        .zr-tcard { transition: border-color .2s, box-shadow .2s; }
        .zr-tcard:hover {
          border-color: rgba(200,169,122,.5) !important;
          box-shadow: 0 4px 20px rgba(200,169,122,.12);
        }

        /* ── Form inputs ── */
        .zr-input {
          background: var(--zr-surface);
          border: 1px solid var(--zr-border2);
          color: var(--zr-ink);
          padding: .85rem 1rem;
          font-family: var(--ff-body);
          font-size: .87rem;
          outline: none;
          width: 100%;
          border-radius: 4px;
          transition: border-color .2s;
        }
        .zr-input::placeholder { color: var(--zr-muted); opacity: .7; }
        .zr-input:focus { border-color: var(--zr-red); }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .zr-nav         { padding: 1rem 1.25rem; }
          .zr-nav-links   { display: none !important; }
          .zr-hero-img    { display: none !important; }
        }
      `}</style>

            <div className="zr-root">

                {/* ══════════════════ NAV ══════════════════ */}
                <NavBar />

                {/* ══════════════════ HERO ══════════════════ */}
                <section className="zr-hero-bg relative flex items-center min-h-screen overflow-hidden" id="home">

                    <div className="zr-hero-grid absolute inset-0 pointer-events-none" />

                    {/* Right — hero image */}
                    <div
                        className="zr-hero-img absolute right-0 top-0 bottom-0 pointer-events-none"
                        style={{ width: '52%' }}
                    >
                        {/* Edge fades */}
                        <div className="absolute inset-y-0 left-0 z-10"
                            style={{ width: '220px', background: 'linear-gradient(to right, #FDFAF6 0%, transparent 100%)' }} />
                        <div className="absolute inset-x-0 top-0 z-10"
                            style={{ height: '140px', background: 'linear-gradient(to bottom, #FDFAF6 0%, transparent 100%)' }} />
                        <div className="absolute inset-x-0 bottom-0 z-10"
                            style={{ height: '160px', background: 'linear-gradient(to top, #FDFAF6 0%, transparent 100%)' }} />
                        {/* Warm tint overlay */}
                        <div className="absolute inset-0 z-10"
                            style={{ background: 'rgba(200,169,122,0.06)' }} />

                        <Image
                            src="/ziva-appliance-repair/hero-technician.png"
                            alt="Appliance repair technician at work"
                            fill
                            className="object-cover object-center"
                            style={{ opacity: 0.75 }}
                            priority
                            sizes="52vw"
                        />
                    </div>

                    {/* Left — text */}
                    <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 pt-28 pb-16">

                        <div className="zr-reveal zr-lbl mb-7">
                            Residential Appliance Specialists — McKinney, TX
                        </div>

                        <h1
                            className="zr-reveal"
                            style={{
                                fontFamily: 'var(--ff-disp)',
                                fontWeight: 700,
                                fontSize: 'clamp(3rem, 7vw, 6.2rem)',
                                lineHeight: 1.02,
                                letterSpacing: '-.015em',
                                color: 'var(--zr-ink)',
                                maxWidth: '640px',
                            }}
                        >
                            When It Breaks,
                            <br />
                            <em style={{ color: 'var(--zr-red)', fontStyle: 'italic' }}>We Fix It Right.</em>
                        </h1>

                        <p
                            className="zr-reveal mt-6 max-w-md"
                            style={{ fontSize: '1rem', color: 'var(--zr-ink2)', lineHeight: 1.85 }}
                        >
                            Expert residential appliance repair in McKinney and a {biz.radius}-mile radius.
                            Garbage disposals, dishwashers, refrigerators, ovens, washers, dryers — all major brands.
                        </p>

                        <div className="zr-reveal flex flex-wrap items-center gap-4 mt-9">
                            <a
                                href={biz.phoneHref}
                                className="flex items-center gap-2 transition-all hover:-translate-y-0.5"
                                style={{
                                    background: 'var(--zr-red)',
                                    color: '#fff',
                                    padding: '1rem 1.9rem',
                                    fontSize: '.9rem',
                                    fontWeight: 600,
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    letterSpacing: '.04em',
                                }}
                            >
                                <Phone size={17} /> {biz.phone}
                            </a>
                            <a
                                href="#contact"
                                className="transition-all hover:-translate-y-0.5"
                                style={{
                                    border: '1px solid var(--zr-border2)',
                                    color: 'var(--zr-ink)',
                                    padding: '1rem 1.9rem',
                                    fontSize: '.9rem',
                                    fontWeight: 500,
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    background: 'var(--zr-surface)',
                                }}
                            >
                                Book a Repair
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div
                            className="zr-reveal flex flex-wrap gap-6 mt-12 pt-8"
                            style={{ borderTop: '1px solid var(--zr-border)' }}
                        >
                            {['Residential Only', '35-Mile Radius', 'McKinney TX 75071', 'Same-Day Availability'].map((b) => (
                                <div key={b} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--zr-red)' }} />
                                    <span style={{ fontSize: '.78rem', color: 'var(--zr-ink2)', letterSpacing: '.05em' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ MARQUEE ══════════════════ */}
                <div style={{
                    background: 'var(--zr-surface2)',
                    borderTop: '1px solid var(--zr-border)',
                    borderBottom: '1px solid var(--zr-border)',
                    padding: '.85rem 0',
                    overflow: 'hidden',
                }}>
                    <div className="zr-marquee-track">
                        {[0, 1].map((j) => (
                            <span key={j} className="flex items-center">
                                {[
                                    'Garbage Disposal Repair', 'Dishwasher Service', 'Refrigerator Repair',
                                    'Oven & Range Repair', 'Washer Repair', 'Dryer Service',
                                    'Kitchen Appliances', 'McKinney TX',
                                ].map((item) => (
                                    <span
                                        key={`${j}-${item}`}
                                        className="flex items-center gap-8 px-8"
                                        style={{
                                            fontFamily: 'var(--ff-body)',
                                            fontWeight: 600,
                                            fontSize: '.75rem',
                                            letterSpacing: '.16em',
                                            textTransform: 'uppercase',
                                            color: 'var(--zr-ink2)',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item}
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--zr-warm)', display: 'inline-block' }} />
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ══════════════════ SERVICES ══════════════════ */}
                <section id="services" className="py-24 px-6 md:px-12">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">Our Services</div>
                        <h2 className="zr-reveal zr-h2 mb-14">What We <em>Repair</em></h2>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                            style={{
                                gap: '1.5px',
                                background: 'var(--zr-border)',
                                border: '1px solid var(--zr-border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                            }}
                        >
                            {services.map((s) => (
                                <div key={s.id} className="zr-scard zr-reveal">

                                    {/* Card image */}
                                    <div className="zr-img-wrap relative" style={{ height: '210px' }}>
                                        <Image
                                            src={s.img}
                                            alt={s.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                        />
                                        {/* Subtle bottom fade */}
                                        <div className="absolute inset-0"
                                            style={{ background: 'linear-gradient(to top, rgba(253,250,246,.7) 0%, transparent 55%)' }} />
                                        {/* Number */}
                                        <span
                                            className="absolute top-4 right-4"
                                            style={{
                                                fontFamily: 'var(--ff-disp)',
                                                fontStyle: 'italic',
                                                fontSize: '2.4rem',
                                                fontWeight: 600,
                                                color: 'rgba(184,39,61,0.25)',
                                                lineHeight: 1,
                                            }}
                                        >
                                            {s.id}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div style={{ padding: '1.8rem 2rem 2.2rem' }}>
                                        <h3 className="mb-3"
                                            style={{ fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--zr-ink)' }}>
                                            {s.name}
                                        </h3>
                                        <p style={{ fontSize: '.86rem', color: 'var(--zr-ink2)', lineHeight: 1.8 }}>{s.desc}</p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {s.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    style={{
                                                        fontSize: '.7rem',
                                                        letterSpacing: '.06em',
                                                        border: '1px solid var(--zr-border2)',
                                                        borderRadius: '20px',
                                                        padding: '.25rem .65rem',
                                                        color: 'var(--zr-ink2)',
                                                        background: 'var(--zr-surface2)',
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ WHY US ══════════════════ */}
                <section
                    id="about"
                    style={{
                        background: 'var(--zr-surface2)',
                        borderTop: '1px solid var(--zr-border)',
                        borderBottom: '1px solid var(--zr-border)',
                        padding: '6rem 1.5rem',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Copy */}
                        <div className="zr-reveal">
                            <div className="zr-lbl mb-4">Why Ziva</div>
                            <h2 className="zr-h2 mb-6">Your Home<br /><em>Deserves Better</em></h2>
                            <p
                                style={{
                                    fontFamily: 'var(--ff-disp)',
                                    fontStyle: 'italic',
                                    fontSize: '1.2rem',
                                    lineHeight: 1.6,
                                    color: 'var(--zr-ink2)',
                                    maxWidth: '420px',
                                }}
                            >
                                <strong style={{ color: 'var(--zr-ink)', fontStyle: 'normal' }}>
                                    "No parts, no fix" excuses stop here.
                                </strong>
                                <br />
                                We arrive prepared and get the job done right, the first time.
                            </p>

                            <div className="flex gap-10 mt-10">
                                {[['100%', 'Residential Focus'], ['35mi', 'Service Radius'], ['5★', 'Avg. Rating']].map(([n, l]) => (
                                    <div key={l}>
                                        <div style={{
                                            fontFamily: 'var(--ff-disp)',
                                            fontWeight: 700,
                                            fontSize: '2.4rem',
                                            color: 'var(--zr-red)',
                                            lineHeight: 1,
                                        }}>{n}</div>
                                        <div style={{ fontSize: '.72rem', color: 'var(--zr-muted)', letterSpacing: '.08em', marginTop: '.3rem' }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reason rows */}
                        <div className="zr-reveal flex flex-col gap-2">
                            {reasons.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="zr-reason flex items-start gap-4"
                                    style={{
                                        background: 'var(--zr-surface)',
                                        border: '1px solid var(--zr-border)',
                                        borderLeft: '3px solid var(--zr-border2)',
                                        borderRadius: '6px',
                                        padding: '1.3rem 1.5rem',
                                    }}
                                >
                                    <div
                                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                                        style={{
                                            background: 'var(--zr-red-dim)',
                                            borderRadius: '8px',
                                            color: 'var(--zr-red)',
                                        }}
                                    >
                                        <Icon size={17} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 600, fontSize: '.9rem', color: 'var(--zr-ink)', marginBottom: '.2rem' }}>{title}</h4>
                                        <p style={{ fontSize: '.82rem', color: 'var(--zr-ink2)', lineHeight: 1.65 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ COVERAGE ══════════════════ */}
                <section id="coverage" className="py-24 px-6 md:px-12">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">Service Area</div>
                        <h2 className="zr-reveal zr-h2 mb-3">Where We <em>Operate</em></h2>
                        <p className="zr-reveal mb-10" style={{ color: 'var(--zr-ink2)', fontSize: '.9rem' }}>
                            Based in McKinney, TX {biz.zip} — we travel up to {biz.radius} miles to your door.
                        </p>

                        <div
                            className="zr-reveal relative flex flex-col items-center justify-center text-center py-16 overflow-hidden"
                            style={{
                                background: 'var(--zr-surface)',
                                border: '1px solid var(--zr-border)',
                                borderRadius: '14px',
                            }}
                        >
                            {/* Radial glow */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at 50% 38%, rgba(200,169,122,.13) 0%, transparent 65%)' }} />

                            <div
                                style={{
                                    fontFamily: 'var(--ff-disp)',
                                    fontWeight: 700,
                                    fontSize: 'clamp(5rem, 12vw, 10rem)',
                                    color: 'transparent',
                                    WebkitTextStroke: '1.5px rgba(184,39,61,.25)',
                                    lineHeight: 1,
                                    position: 'relative',
                                }}
                            >
                                {biz.radius}
                            </div>
                            <div
                                style={{
                                    fontFamily: 'var(--ff-body)',
                                    fontWeight: 600,
                                    fontSize: '.8rem',
                                    letterSpacing: '.2em',
                                    textTransform: 'uppercase',
                                    color: 'var(--zr-red)',
                                    marginTop: '.4rem',
                                    position: 'relative',
                                }}
                            >
                                Mile Service Radius
                            </div>
                            <p style={{ fontSize: '.86rem', color: 'var(--zr-ink2)', marginTop: '.6rem', maxWidth: '360px', position: 'relative' }}>
                                Centered in McKinney, TX — covering the entire DFW North corridor.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl" style={{ position: 'relative' }}>
                                {cities.map((c) => (
                                    <span
                                        key={c}
                                        style={{
                                            border: '1px solid var(--zr-border2)',
                                            borderRadius: '20px',
                                            padding: '.3rem .85rem',
                                            fontSize: '.74rem',
                                            color: 'var(--zr-ink2)',
                                            background: 'var(--zr-surface2)',
                                            letterSpacing: '.04em',
                                            transition: 'all .2s',
                                            cursor: 'default',
                                        }}
                                        className="hover:border-red-400 hover:text-red-600"
                                    >
                                        {c}, TX
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════ TESTIMONIALS ══════════════════ */}
                <section
                    style={{
                        background: 'var(--zr-surface2)',
                        borderTop: '1px solid var(--zr-border)',
                        padding: '6rem 1.5rem',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">Testimonials</div>
                        <h2 className="zr-reveal zr-h2 mb-12">What Clients <em>Say</em></h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 zr-reveal">
                            {testimonials.map((t) => (
                                <div
                                    key={t.name}
                                    className="zr-tcard"
                                    style={{
                                        background: 'var(--zr-surface)',
                                        border: '1px solid var(--zr-border)',
                                        borderRadius: '12px',
                                        padding: '2.2rem 2rem',
                                    }}
                                >
                                    <div style={{ color: 'var(--zr-warm)', fontSize: '.9rem', letterSpacing: '.1em', marginBottom: '1rem' }}>
                                        ★★★★★
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: 'var(--ff-disp)',
                                            fontStyle: 'italic',
                                            fontSize: '1rem',
                                            lineHeight: 1.78,
                                            color: 'var(--zr-ink2)',
                                            marginBottom: '1.6rem',
                                        }}
                                    >
                                        {t.text}
                                    </p>
                                    <div style={{ borderTop: '1px solid var(--zr-border)', paddingTop: '1rem' }}>
                                        <strong style={{ display: 'block', fontSize: '.85rem', fontWeight: 600, color: 'var(--zr-ink)' }}>{t.name}</strong>
                                        <span style={{ fontSize: '.74rem', color: 'var(--zr-muted)', letterSpacing: '.06em' }}>
                                            {t.location}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ CONTACT ══════════════════ */}
                <section id="contact" style={{ borderTop: '1px solid var(--zr-border)', padding: '6rem 1.5rem' }}>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left — contact info */}
                        <div className="zr-reveal">
                            <div className="zr-lbl mb-4">Get In Touch</div>
                            <h2 className="zr-h2 mb-4">Ready to <em>Book?</em></h2>
                            <p style={{ color: 'var(--zr-ink2)', fontSize: '.9rem', maxWidth: '380px', lineHeight: 1.8 }}>
                                Call for the fastest response, or fill the form and we'll confirm your appointment promptly.
                            </p>

                            <a
                                href={biz.phoneHref}
                                style={{
                                    fontFamily: 'var(--ff-disp)',
                                    fontWeight: 700,
                                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                                    letterSpacing: '.02em',
                                    textDecoration: 'none',
                                    display: 'block',
                                    margin: '1.8rem 0 2rem',
                                    color: 'var(--zr-ink)',
                                    transition: 'color .2s',
                                }}
                                className="hover:text-red-600"
                            >
                                {biz.phone}
                            </a>

                            <div className="flex flex-col gap-3">
                                {[
                                    { icon: Phone, label: biz.phone, href: biz.phoneHref },
                                    { icon: Mail, label: biz.email, href: `mailto:${biz.email}` },
                                    { icon: MapPin, label: `${biz.city} ${biz.zip} · ${biz.radius}-mile radius`, href: undefined },
                                    { icon: Clock, label: biz.hours, href: undefined },
                                ].map(({ icon: Icon, label, href }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-3"
                                        style={{
                                            background: 'var(--zr-surface)',
                                            border: '1px solid var(--zr-border)',
                                            borderRadius: '8px',
                                            padding: '1rem 1.3rem',
                                        }}
                                    >
                                        <div style={{
                                            width: '34px', height: '34px', borderRadius: '8px',
                                            background: 'var(--zr-red-dim)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <Icon size={16} style={{ color: 'var(--zr-red)' }} />
                                        </div>
                                        {href ? (
                                            <a
                                                href={href}
                                                style={{ fontSize: '.87rem', textDecoration: 'none', color: 'var(--zr-ink)', transition: 'color .2s' }}
                                                className="hover:text-red-600"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <span style={{ fontSize: '.87rem', color: 'var(--zr-ink2)' }}>{label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — booking form */}
                        <div className="zr-reveal">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Full Name', type: 'text', placeholder: 'Jane Smith', name: 'name' },
                                        { label: 'Phone Number', type: 'tel', placeholder: '(972) 000-0000', name: 'phone' },
                                    ].map((f) => (
                                        <div key={f.label} className="flex flex-col gap-1.5">
                                            <label style={{ fontFamily: 'var(--ff-body)', fontWeight: 600, fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--zr-ink2)' }}>
                                                {f.label}
                                            </label>
                                            <input
                                                type={f.type}
                                                name={f.name}
                                                placeholder={f.placeholder}
                                                required
                                                className="zr-input"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-body)', fontWeight: 600, fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--zr-ink2)' }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email" name="email" placeholder="you@email.com"
                                        className="zr-input"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-body)', fontWeight: 600, fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--zr-ink2)' }}>
                                        Appliance Type
                                    </label>
                                    <select
                                        name="appliance"
                                        className="zr-input"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select appliance…</option>
                                        {[
                                            'Garbage Disposal', 'Dishwasher', 'Refrigerator / Freezer',
                                            'Oven / Range / Stove', 'Washing Machine', 'Dryer',
                                            'Microwave', 'Other Kitchen Appliance',
                                        ].map((o) => (
                                            <option key={o} value={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-body)', fontWeight: 600, fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--zr-ink2)' }}>
                                        Describe the Issue
                                    </label>
                                    <textarea
                                        name="message" rows={4}
                                        placeholder="Tell us what's happening with your appliance…"
                                        className="zr-input"
                                        style={{ resize: 'none' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full transition-all hover:-translate-y-0.5 active:translate-y-0"
                                    style={{
                                        background: formSent ? '#166534' : 'var(--zr-red)',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '1.1rem 2rem',
                                        fontFamily: 'var(--ff-body)',
                                        fontSize: '.9rem',
                                        fontWeight: 600,
                                        letterSpacing: '.06em',
                                        cursor: 'pointer',
                                        transition: 'background .3s, transform .2s',
                                    }}
                                >
                                    {formSent ? '✓ Request Sent' : 'Send Request →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* ══════════════════ FOOTER ══════════════════ */}
                <footer
                    style={{
                        background: 'var(--zr-ink)',
                        padding: '3rem 1.5rem',
                        textAlign: 'center',
                    }}
                >
                    <div style={{
                        fontFamily: 'var(--ff-disp)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        letterSpacing: '.08em',
                        color: '#FDFAF6',
                    }}>
                        Ziva <span style={{ color: 'var(--zr-red)' }}>Appliance</span> Repair
                    </div>

                    <p style={{ fontSize: '.76rem', color: 'rgba(253,250,246,0.5)', marginTop: '.8rem', lineHeight: 1.8 }}>
                        © {new Date().getFullYear()} Ziva Appliance Repair · McKinney, TX 75071 · Residential Service Only
                        <br />
                        Serving a {biz.radius}-mile radius across the DFW North area.
                    </p>

                    <div className="flex justify-center gap-6 mt-4 flex-wrap">
                        <a
                            href={biz.phoneHref}
                            style={{ fontSize: '.76rem', color: 'rgba(253,250,246,0.45)', textDecoration: 'none', transition: 'color .2s' }}
                            className="hover:text-red-400"
                        >
                            {biz.phone}
                        </a>
                        <a
                            href={`mailto:${biz.email}`}
                            style={{ fontSize: '.76rem', color: 'rgba(253,250,246,0.45)', textDecoration: 'none', transition: 'color .2s' }}
                            className="hover:text-red-400"
                        >
                            {biz.email}
                        </a>
                    </div>

                    <div
                        style={{
                            marginTop: '1.8rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(255,255,255,.08)',
                            fontSize: '.72rem',
                            color: 'rgba(253,250,246,0.35)',
                        }}
                    >
                        Powered by{' '}
                        <a
                            href="https://interstaterankers.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--zr-red)', textDecoration: 'none', transition: 'opacity .2s' }}
                            className="hover:opacity-75"
                        >
                            InterState Rankers
                        </a>
                    </div>
                </footer>

            </div>
        </>
    )
}

/* ─────────────────────────────────────────────
   NAV — split out to use its own scroll state
───────────────────────────────────────────── */
function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`zr-nav ${scrolled ? 'scrolled' : ''}`}>

            {/* Logo */}
            <div className="flex items-center gap-3">
                <div
                    className="relative w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ border: '2px solid var(--zr-red)', borderRadius: '4px' }}
                >
                    <span style={{ fontFamily: 'var(--ff-disp)', fontWeight: 700, fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--zr-red)', lineHeight: 1 }}>
                        Z
                    </span>
                </div>
                <div>
                    <span style={{ fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--zr-ink)', letterSpacing: '.04em' }}>
                        Ziva
                    </span>
                    <span
                        className="block"
                        style={{ fontFamily: 'var(--ff-body)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--zr-muted)', marginTop: '-2px' }}
                    >
                        Appliance Repair
                    </span>
                </div>
            </div>

            {/* Desktop links */}
            <div className="zr-nav-links flex items-center gap-8">
                {['Services', 'About', 'Coverage', 'Contact'].map((l) => (
                    <a
                        key={l}
                        href={`#${l.toLowerCase()}`}
                        style={{ color: 'var(--zr-ink2)', fontSize: '.83rem', fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                        className="hover:text-red-600"
                    >
                        {l}
                    </a>
                ))}
            </div>

            {/* Call CTA */}
            <a
                href="tel:9729045655"
                className="flex items-center gap-2 transition-all hover:-translate-y-px"
                style={{
                    background: 'var(--zr-red)',
                    color: '#fff',
                    padding: '.62rem 1.3rem',
                    fontSize: '.8rem',
                    fontWeight: 600,
                    letterSpacing: '.06em',
                    textDecoration: 'none',
                    borderRadius: '4px',
                }}
            >
                <Phone size={14} /> Call Now
            </a>
        </nav>
    )
}