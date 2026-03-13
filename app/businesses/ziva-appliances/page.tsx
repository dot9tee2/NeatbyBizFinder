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
        img: '/ziva-appliances/garbage-disposal.png',
        tags: ['InSinkErator', 'Moen', 'Waste King', 'Badger'],
    },
    {
        id: '02',
        name: 'Dishwasher Repair',
        desc: "Not draining, leaving spots, or won't start? We restore full cycle function quickly so your kitchen routine is back on track.",
        img: '/ziva-appliances/dishwasher.png',
        tags: ['Bosch', 'Samsung', 'LG', 'KitchenAid', 'Whirlpool'],
    },
    {
        id: '03',
        name: 'Refrigerator & Freezer',
        desc: 'Temperature issues, strange noises, ice maker failures — we handle every fridge problem before your food spoils.',
        img: '/ziva-appliances/refrigerator.png',
        tags: ['Samsung', 'LG', 'GE', 'Frigidaire', 'Maytag'],
    },
    {
        id: '04',
        name: 'Oven, Range & Stove',
        desc: 'Burners not igniting, oven not heating evenly, digital controls failing — gas or electric, we get you cooking again.',
        img: '/ziva-appliances/oven.png',
        tags: ['GE', 'Whirlpool', 'KitchenAid', 'Bosch', 'Viking'],
    },
    {
        id: '05',
        name: 'Washer & Dryer',
        desc: 'Not spinning, not heating, leaking or shaking the whole room — front-load, top-load, gas and electric dryers covered.',
        img: '/ziva-appliances/washer-dryer.png',
        tags: ['Samsung', 'LG', 'Maytag', 'Whirlpool', 'Speed Queen'],
    },
    {
        id: '06',
        name: 'Other Kitchen Appliances',
        desc: 'Microwaves, wine coolers, ice makers, and more. If it plugs in and lives in your kitchen, we can likely fix it.',
        img: '/ziva-appliances/kitchen-appliances.png',
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
    const [scrolled, setScrolled] = useState(false)
    const [formSent, setFormSent] = useState(false)
    useReveal()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        :root {
          --zr-black:   #090909;
          --zr-dark:    #111111;
          --zr-card:    #161616;
          --zr-border:  rgba(255,255,255,0.08);
          --zr-red:     #C8233A;
          --zr-red-l:   #E8324A;
          --zr-red-dim: rgba(200,35,58,0.14);
          --zr-white:   #F5F1EC;
          --zr-muted:   rgba(245,241,236,0.48);
          --ff-disp:   'Playfair Display', Georgia, serif;
          --ff-body:   'DM Sans', sans-serif;
          --ff-lbl:    'Bebas Neue', sans-serif;
        }

        .zr-root {
          font-family: var(--ff-body);
          background: var(--zr-black);
          color: var(--zr-white);
          overflow-x: hidden;
        }

        /* Reveal animation */
        .zr-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .zr-visible { opacity: 1; transform: translateY(0); }

        /* Typography helpers */
        .zr-lbl {
          font-family: var(--ff-lbl);
          font-size: .78rem;
          letter-spacing: .28em;
          color: var(--zr-red);
          display: flex;
          align-items: center;
          gap: .7rem;
        }
        .zr-lbl::before {
          content: '';
          width: 1.4rem;
          height: 1px;
          background: var(--zr-red);
          display: block;
        }
        .zr-h2 {
          font-family: var(--ff-disp);
          font-weight: 900;
          font-size: clamp(2.1rem, 3.8vw, 3.3rem);
          line-height: 1.05;
          letter-spacing: -.015em;
        }
        .zr-h2 em { font-style: italic; color: var(--zr-red); }

        /* Marquee */
        @keyframes zr-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .zr-marquee-track {
          display: flex;
          width: max-content;
          animation: zr-marquee 28s linear infinite;
          white-space: nowrap;
        }

        /* Clipped button shape */
        .zr-clip {
          clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px));
        }

        /* Sticky nav */
        .zr-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 90;
          padding: 1.1rem 3rem;
          display: flex; align-items: center; justify-content: space-between;
          transition: background .35s;
        }
        .zr-nav.scrolled {
          background: rgba(9,9,9,.97);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--zr-border);
        }

        /* Hero */
        .zr-hero-bg {
          background:
            radial-gradient(ellipse 55% 70% at 28% 50%, rgba(180,20,40,.11) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 85%, rgba(180,20,40,.06) 0%, transparent 55%),
            var(--zr-black);
        }
        .zr-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* Service card effects */
        .zr-scard { position: relative; overflow: hidden; transition: background .25s; }
        .zr-scard::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; background: var(--zr-red);
          transition: width .45s ease;
        }
        .zr-scard:hover::after  { width: 100%; }
        .zr-scard:hover         { background: #1a1a1a !important; }
        .zr-img-wrap img        { transition: transform .5s ease; }
        .zr-scard:hover .zr-img-wrap img { transform: scale(1.05); }

        /* Hover states */
        .zr-reason    { transition: background .2s; }
        .zr-reason:hover { background: #1c1c1c !important; }
        .zr-tcard     { transition: background .2s, border-color .2s; }
        .zr-tcard:hover { background: #1c1c1c !important; border-color: rgba(200,35,58,.35) !important; }

        /* Mobile */
        @media (max-width: 768px) {
          .zr-nav       { padding: 1rem 1.25rem; }
          .zr-nav-links { display: none !important; }
          .zr-hero-img  { display: none !important; }
        }
      `}</style>

            <div className="zr-root">

                {/* ══════════════════ NAV ══════════════════ */}
                <nav className={`zr-nav ${scrolled ? 'scrolled' : ''}`}>

                    {/* Logo mark */}
                    <div className="flex items-center gap-3">
                        <div
                            className="relative w-9 h-9 flex items-center justify-center flex-shrink-0"
                            style={{ border: '2px solid var(--zr-red)' }}
                        >
                            <span style={{ fontFamily: 'var(--ff-disp)', fontWeight: 900, fontSize: '1.25rem', color: 'var(--zr-red)' }}>
                                Z
                            </span>
                        </div>
                        <div>
                            <span style={{ fontFamily: 'var(--ff-lbl)', fontSize: '1.05rem', letterSpacing: '.12em' }}>ZIVA</span>
                            <span
                                className="block"
                                style={{ fontFamily: 'var(--ff-body)', fontSize: '.6rem', letterSpacing: '.17em', color: 'var(--zr-muted)', marginTop: '-2px' }}
                            >
                                APPLIANCE REPAIR
                            </span>
                        </div>
                    </div>

                    {/* Desktop nav links */}
                    <div className="zr-nav-links flex items-center gap-8">
                        {['Services', 'About', 'Coverage', 'Contact'].map((l) => (
                            <a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                style={{ color: 'var(--zr-muted)', fontSize: '.82rem', letterSpacing: '.09em', textDecoration: 'none' }}
                                className="hover:text-white transition-colors"
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* Call CTA */}
                    <a
                        href={biz.phoneHref}
                        className="zr-clip flex items-center gap-2 transition-all hover:-translate-y-px"
                        style={{
                            background: 'var(--zr-red)',
                            color: 'var(--zr-white)',
                            padding: '.65rem 1.4rem',
                            fontSize: '.78rem',
                            fontWeight: 500,
                            letterSpacing: '.1em',
                            textDecoration: 'none',
                        }}
                    >
                        <Phone size={14} /> CALL NOW
                    </a>
                </nav>

                {/* ══════════════════ HERO ══════════════════ */}
                <section className="zr-hero-bg relative flex items-center min-h-screen overflow-hidden" id="home">

                    {/* Grid overlay */}
                    <div className="zr-hero-grid absolute inset-0 pointer-events-none" />

                    {/* ── RIGHT: Hero technician image ── */}
                    <div
                        className="zr-hero-img absolute right-0 top-0 bottom-0 pointer-events-none"
                        style={{ width: '52%' }}
                    >
                        {/* Left-edge fade: blends image into the text side smoothly */}
                        <div
                            className="absolute inset-y-0 left-0 z-10"
                            style={{ width: '200px', background: 'linear-gradient(to right, #090909 0%, transparent 100%)' }}
                        />
                        {/* Top fade */}
                        <div
                            className="absolute inset-x-0 top-0 z-10"
                            style={{ height: '140px', background: 'linear-gradient(to bottom, #090909 0%, transparent 100%)' }}
                        />
                        {/* Bottom fade */}
                        <div
                            className="absolute inset-x-0 bottom-0 z-10"
                            style={{ height: '160px', background: 'linear-gradient(to top, #090909 0%, transparent 100%)' }}
                        />
                        {/* Subtle red tint */}
                        <div className="absolute inset-0 z-10" style={{ background: 'rgba(200,35,58,0.07)' }} />

                        <Image
                            src="/ziva-appliances/hero-technician.png"
                            alt="Appliance repair technician at work"
                            fill
                            className="object-cover object-center"
                            style={{ opacity: 0.6 }}
                            priority
                            sizes="52vw"
                        />
                    </div>

                    {/* ── LEFT: Text content ── */}
                    <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 pt-28 pb-16">

                        <div className="zr-reveal zr-lbl mb-7">
                            RESIDENTIAL APPLIANCE SPECIALISTS — McKINNEY, TX
                        </div>

                        <h1
                            className="zr-reveal"
                            style={{
                                fontFamily: 'var(--ff-disp)',
                                fontWeight: 900,
                                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                                lineHeight: 1.0,
                                letterSpacing: '-.02em',
                                maxWidth: '640px',
                            }}
                        >
                            When It Breaks,
                            <br />
                            <em style={{ color: 'var(--zr-red)', fontStyle: 'italic' }}>We Fix It Right.</em>
                        </h1>

                        <p
                            className="zr-reveal mt-6 max-w-md"
                            style={{ fontSize: '1.02rem', color: 'var(--zr-muted)', lineHeight: 1.85 }}
                        >
                            Expert residential appliance repair in McKinney and a {biz.radius}-mile radius.
                            Garbage disposals, dishwashers, refrigerators, ovens, washers, dryers — all major brands.
                        </p>

                        <div className="zr-reveal flex flex-wrap items-center gap-4 mt-9">
                            <a
                                href={biz.phoneHref}
                                className="zr-clip flex items-center gap-2 transition-all hover:-translate-y-0.5"
                                style={{
                                    background: 'var(--zr-red)',
                                    color: 'var(--zr-white)',
                                    padding: '1rem 1.9rem',
                                    fontSize: '.9rem',
                                    fontWeight: 500,
                                    letterSpacing: '.07em',
                                    textDecoration: 'none',
                                }}
                            >
                                <Phone size={17} /> {biz.phone}
                            </a>
                            <a
                                href="#contact"
                                style={{
                                    border: '1px solid var(--zr-border)',
                                    color: 'var(--zr-white)',
                                    padding: '1rem 1.9rem',
                                    fontSize: '.9rem',
                                    textDecoration: 'none',
                                }}
                                className="hover:border-white/30 transition-colors"
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
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--zr-red)' }} />
                                    <span style={{ fontSize: '.78rem', color: 'var(--zr-muted)', letterSpacing: '.06em' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ MARQUEE ══════════════════ */}
                <div
                    style={{
                        background: 'var(--zr-red)',
                        padding: '.9rem 0',
                        overflow: 'hidden',
                        borderTop: '1px solid rgba(255,255,255,.12)',
                        borderBottom: '1px solid rgba(255,255,255,.12)',
                    }}
                >
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
                                            fontFamily: 'var(--ff-lbl)',
                                            fontSize: '.85rem',
                                            letterSpacing: '.15em',
                                            color: 'rgba(255,255,255,.88)',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item}
                                        <span style={{ fontSize: '.45rem', color: 'rgba(255,255,255,.45)' }}>✦</span>
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ══════════════════ SERVICES ══════════════════ */}
                <section id="services" className="py-24 px-6 md:px-12">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">OUR SERVICES</div>
                        <h2 className="zr-reveal zr-h2 mb-14">What We <em>Repair</em></h2>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
                            style={{ background: 'var(--zr-border)' }}
                        >
                            {services.map((s) => (
                                <div
                                    key={s.id}
                                    className="zr-scard zr-reveal"
                                    style={{ background: 'var(--zr-card)' }}
                                >
                                    {/* Card image */}
                                    <div className="zr-img-wrap relative" style={{ height: '210px' }}>
                                        <Image
                                            src={s.img}
                                            alt={s.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                        />
                                        {/* Bottom-to-top gradient so text is always readable */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background:
                                                    'linear-gradient(to top, rgba(22,22,22,1) 0%, rgba(22,22,22,0.15) 55%, transparent 100%)',
                                            }}
                                        />
                                        {/* Number */}
                                        <span
                                            className="absolute top-4 right-4"
                                            style={{ fontFamily: 'var(--ff-lbl)', fontSize: '2rem', color: 'rgba(200,35,58,0.65)' }}
                                        >
                                            {s.id}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div style={{ padding: '1.8rem 2rem 2.2rem' }}>
                                        <h3
                                            className="mb-3"
                                            style={{ fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.35rem' }}
                                        >
                                            {s.name}
                                        </h3>
                                        <p style={{ fontSize: '.86rem', color: 'var(--zr-muted)', lineHeight: 1.8 }}>{s.desc}</p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {s.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    style={{
                                                        fontSize: '.7rem',
                                                        letterSpacing: '.07em',
                                                        border: '1px solid var(--zr-border)',
                                                        padding: '.25rem .6rem',
                                                        color: 'var(--zr-muted)',
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
                        background: 'var(--zr-dark)',
                        borderTop: '1px solid var(--zr-border)',
                        borderBottom: '1px solid var(--zr-border)',
                        padding: '6rem 1.5rem',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Copy */}
                        <div className="zr-reveal">
                            <div className="zr-lbl mb-4">WHY ZIVA</div>
                            <h2 className="zr-h2 mb-6">Your Home<br /><em>Deserves Better</em></h2>
                            <p
                                style={{
                                    fontFamily: 'var(--ff-disp)',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    lineHeight: 1.5,
                                    color: 'var(--zr-muted)',
                                    maxWidth: '420px',
                                }}
                            >
                                <strong style={{ color: 'var(--zr-white)', fontStyle: 'normal' }}>
                                    "No parts, no fix" excuses stop here.
                                </strong>
                                <br />
                                We arrive prepared and get the job done right, the first time.
                            </p>

                            <div className="flex gap-8 mt-10">
                                {[['100%', 'Residential Focus'], ['35mi', 'Service Radius'], ['5★', 'Avg. Rating']].map(([n, l]) => (
                                    <div key={l}>
                                        <div style={{ fontFamily: 'var(--ff-lbl)', fontSize: '2.2rem', color: 'var(--zr-red)' }}>{n}</div>
                                        <div style={{ fontSize: '.72rem', color: 'var(--zr-muted)', letterSpacing: '.09em', marginTop: '.2rem' }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reason cards */}
                        <div className="flex flex-col gap-px zr-reveal" style={{ background: 'var(--zr-border)' }}>
                            {reasons.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="zr-reason flex items-start gap-4"
                                    style={{ background: 'var(--zr-card)', padding: '1.6rem 1.8rem' }}
                                >
                                    <div
                                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                                        style={{ border: '1px solid var(--zr-red)', color: 'var(--zr-red)' }}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 500, fontSize: '.92rem', marginBottom: '.25rem' }}>{title}</h4>
                                        <p style={{ fontSize: '.82rem', color: 'var(--zr-muted)', lineHeight: 1.7 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════ COVERAGE ══════════════════ */}
                <section id="coverage" className="py-24 px-6 md:px-12">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">SERVICE AREA</div>
                        <h2 className="zr-reveal zr-h2 mb-3">Where We <em>Operate</em></h2>
                        <p className="zr-reveal mb-10" style={{ color: 'var(--zr-muted)', fontSize: '.9rem' }}>
                            Based in McKinney, TX {biz.zip} — we travel up to {biz.radius} miles to your door.
                        </p>

                        <div
                            className="zr-reveal relative flex flex-col items-center justify-center text-center py-16 overflow-hidden"
                            style={{ background: 'var(--zr-card)', border: '1px solid var(--zr-border)' }}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at 50% 40%, rgba(200,35,58,.13) 0%, transparent 65%)' }}
                            />

                            <div
                                style={{
                                    fontFamily: 'var(--ff-lbl)',
                                    fontSize: 'clamp(5rem, 12vw, 10rem)',
                                    color: 'transparent',
                                    WebkitTextStroke: '1px rgba(200,35,58,.35)',
                                    lineHeight: 1,
                                    position: 'relative',
                                }}
                            >
                                {biz.radius}
                            </div>
                            <div
                                style={{
                                    fontFamily: 'var(--ff-lbl)',
                                    fontSize: '1.1rem',
                                    letterSpacing: '.22em',
                                    color: 'var(--zr-red)',
                                    marginTop: '.4rem',
                                    position: 'relative',
                                }}
                            >
                                MILE SERVICE RADIUS
                            </div>
                            <p
                                style={{
                                    fontSize: '.86rem',
                                    color: 'var(--zr-muted)',
                                    marginTop: '.6rem',
                                    maxWidth: '360px',
                                    position: 'relative',
                                }}
                            >
                                Centered in McKinney, TX — covering the entire DFW North corridor.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl" style={{ position: 'relative' }}>
                                {cities.map((c) => (
                                    <span
                                        key={c}
                                        style={{
                                            border: '1px solid var(--zr-border)',
                                            padding: '.35rem .85rem',
                                            fontSize: '.74rem',
                                            color: 'var(--zr-muted)',
                                            letterSpacing: '.06em',
                                            transition: 'all .2s',
                                            cursor: 'default',
                                        }}
                                        className="hover:border-red-600 hover:text-red-500"
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
                        background: 'var(--zr-dark)',
                        borderTop: '1px solid var(--zr-border)',
                        padding: '6rem 1.5rem',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto">
                        <div className="zr-reveal zr-lbl mb-4">TESTIMONIALS</div>
                        <h2 className="zr-reveal zr-h2 mb-12">What Clients <em>Say</em></h2>

                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-px zr-reveal"
                            style={{ background: 'var(--zr-border)' }}
                        >
                            {testimonials.map((t) => (
                                <div
                                    key={t.name}
                                    className="zr-tcard"
                                    style={{ background: 'var(--zr-card)', border: '1px solid transparent', padding: '2.4rem 2rem' }}
                                >
                                    <div style={{ color: 'var(--zr-red)', fontSize: '.85rem', letterSpacing: '.15em', marginBottom: '1.1rem' }}>
                                        ★★★★★
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: 'var(--ff-disp)',
                                            fontStyle: 'italic',
                                            fontSize: '1rem',
                                            lineHeight: 1.75,
                                            marginBottom: '1.5rem',
                                        }}
                                    >
                                        {t.text}
                                    </p>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '.85rem', fontWeight: 500 }}>{t.name}</strong>
                                        <span style={{ fontSize: '.74rem', color: 'var(--zr-muted)', letterSpacing: '.07em' }}>
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
                            <div className="zr-lbl mb-4">GET IN TOUCH</div>
                            <h2 className="zr-h2 mb-4">Ready to <em>Book?</em></h2>
                            <p style={{ color: 'var(--zr-muted)', fontSize: '.9rem', maxWidth: '380px', lineHeight: 1.8 }}>
                                Call for the fastest response, or fill the form and we'll confirm your appointment promptly.
                            </p>

                            <a
                                href={biz.phoneHref}
                                style={{
                                    fontFamily: 'var(--ff-lbl)',
                                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                                    letterSpacing: '.05em',
                                    textDecoration: 'none',
                                    display: 'block',
                                    margin: '1.8rem 0 2rem',
                                    transition: 'color .2s',
                                    color: 'var(--zr-white)',
                                }}
                                className="hover:text-red-500"
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
                                        style={{ background: 'var(--zr-card)', border: '1px solid var(--zr-border)', padding: '1rem 1.3rem' }}
                                    >
                                        <Icon size={17} style={{ color: 'var(--zr-red)', flexShrink: 0 }} />
                                        {href ? (
                                            <a
                                                href={href}
                                                style={{ fontSize: '.87rem', textDecoration: 'none', color: 'var(--zr-white)', transition: 'color .2s' }}
                                                className="hover:text-red-500"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <span style={{ fontSize: '.87rem', color: 'var(--zr-muted)' }}>{label}</span>
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
                                        { label: 'FULL NAME', type: 'text', placeholder: 'Jane Smith', name: 'name' },
                                        { label: 'PHONE NUMBER', type: 'tel', placeholder: '(972) 000-0000', name: 'phone' },
                                    ].map((f) => (
                                        <div key={f.label} className="flex flex-col gap-1.5">
                                            <label style={{ fontFamily: 'var(--ff-lbl)', fontSize: '.7rem', letterSpacing: '.15em', color: 'var(--zr-muted)' }}>
                                                {f.label}
                                            </label>
                                            <input
                                                type={f.type}
                                                name={f.name}
                                                placeholder={f.placeholder}
                                                required
                                                style={{
                                                    background: 'var(--zr-card)', border: '1px solid var(--zr-border)',
                                                    color: 'var(--zr-white)', padding: '.85rem 1rem',
                                                    fontFamily: 'var(--ff-body)', fontSize: '.87rem', outline: 'none', width: '100%',
                                                }}
                                                className="focus:border-red-600 transition-colors placeholder:opacity-30"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-lbl)', fontSize: '.7rem', letterSpacing: '.15em', color: 'var(--zr-muted)' }}>
                                        EMAIL ADDRESS
                                    </label>
                                    <input
                                        type="email" name="email" placeholder="you@email.com"
                                        style={{
                                            background: 'var(--zr-card)', border: '1px solid var(--zr-border)',
                                            color: 'var(--zr-white)', padding: '.85rem 1rem',
                                            fontFamily: 'var(--ff-body)', fontSize: '.87rem', outline: 'none', width: '100%',
                                        }}
                                        className="focus:border-red-600 transition-colors placeholder:opacity-30"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-lbl)', fontSize: '.7rem', letterSpacing: '.15em', color: 'var(--zr-muted)' }}>
                                        APPLIANCE TYPE
                                    </label>
                                    <select
                                        name="appliance"
                                        style={{
                                            background: 'var(--zr-card)', border: '1px solid var(--zr-border)',
                                            color: 'var(--zr-white)', padding: '.85rem 1rem',
                                            fontFamily: 'var(--ff-body)', fontSize: '.87rem', outline: 'none', width: '100%',
                                        }}
                                        className="focus:border-red-600 transition-colors"
                                    >
                                        <option value="" disabled>Select appliance…</option>
                                        {[
                                            'Garbage Disposal', 'Dishwasher', 'Refrigerator / Freezer',
                                            'Oven / Range / Stove', 'Washing Machine', 'Dryer',
                                            'Microwave', 'Other Kitchen Appliance',
                                        ].map((o) => (
                                            <option key={o} value={o} style={{ background: '#161616' }}>{o}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label style={{ fontFamily: 'var(--ff-lbl)', fontSize: '.7rem', letterSpacing: '.15em', color: 'var(--zr-muted)' }}>
                                        DESCRIBE THE ISSUE
                                    </label>
                                    <textarea
                                        name="message" rows={4}
                                        placeholder="Tell us what's happening with your appliance…"
                                        style={{
                                            background: 'var(--zr-card)', border: '1px solid var(--zr-border)',
                                            color: 'var(--zr-white)', padding: '.85rem 1rem',
                                            fontFamily: 'var(--ff-body)', fontSize: '.87rem',
                                            outline: 'none', width: '100%', resize: 'none',
                                        }}
                                        className="focus:border-red-600 transition-colors placeholder:opacity-30"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="zr-clip w-full transition-all hover:-translate-y-0.5 active:translate-y-0"
                                    style={{
                                        background: formSent ? '#166534' : 'var(--zr-red)',
                                        color: 'var(--zr-white)', border: 'none',
                                        padding: '1.1rem 2rem', fontFamily: 'var(--ff-body)',
                                        fontSize: '.9rem', fontWeight: 500, letterSpacing: '.09em',
                                        cursor: 'pointer', transition: 'background .3s, transform .2s',
                                    }}
                                >
                                    {formSent ? '✓ REQUEST SENT' : 'SEND REQUEST →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* ══════════════════ FOOTER ══════════════════ */}
                <footer
                    style={{
                        background: 'var(--zr-black)',
                        borderTop: '1px solid var(--zr-border)',
                        padding: '3rem 1.5rem',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ fontFamily: 'var(--ff-lbl)', fontSize: '1.4rem', letterSpacing: '.14em' }}>
                        ZIVA <span style={{ color: 'var(--zr-red)' }}>APPLIANCE</span> REPAIR
                    </div>

                    <p style={{ fontSize: '.76rem', color: 'var(--zr-muted)', marginTop: '.8rem' }}>
                        © {new Date().getFullYear()} Ziva Appliance Repair · McKinney, TX 75071 · Residential Service Only
                        <br />
                        Serving a {biz.radius}-mile radius across the DFW North area.
                    </p>

                    <div className="flex justify-center gap-6 mt-4 flex-wrap">
                        <a
                            href={biz.phoneHref}
                            style={{ fontSize: '.76rem', color: 'var(--zr-muted)', textDecoration: 'none' }}
                            className="hover:text-red-500 transition-colors"
                        >
                            {biz.phone}
                        </a>
                        <a
                            href={`mailto:${biz.email}`}
                            style={{ fontSize: '.76rem', color: 'var(--zr-muted)', textDecoration: 'none' }}
                            className="hover:text-red-500 transition-colors"
                        >
                            {biz.email}
                        </a>
                    </div>

                    {/* InterState Rankers attribution */}
                    <div
                        style={{
                            marginTop: '1.8rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--zr-border)',
                            fontSize: '.72rem',
                            color: 'var(--zr-muted)',
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