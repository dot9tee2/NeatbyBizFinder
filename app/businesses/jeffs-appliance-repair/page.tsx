'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    Phone, Mail, MapPin, Clock,
    Shield, Wrench, CheckCircle, Zap,
    Settings, Thermometer, Droplets, Check,
    Star, ChevronDown, UserCheck, HardHat,
    ArrowRight, Refrigerator, Waves, Flame,
    Activity, Trash2
} from 'lucide-react'

/* ─────────────────────────────────────────────
   BUSINESS DATA & SEO CONTENT
   Location: Buffalo, MN 55362
   Service Radius: 40 Miles
───────────────────────────────────────────── */
const biz = {
    name: "Jeff's Appliance Repair",
    phone: '(612) 393-2529',
    phoneHref: 'tel:6123932529',
    email: 'jpl52312@gmail.com',
    zip: '55362',
    city: 'Buffalo, MN',
    radius: '40',
    experience: '23+',
    hours: 'Expert Local Service Since 2000',
}

const services = [
    {
        id: '01',
        name: 'HVAC & Furnace Repair',
        desc: 'Specialized diagnostics for heating and cooling units. We restore your home comfort quickly with professional furnace and AC repair.',
        img: '/jeffs-appliance-repair/hvac-system.png',
        tags: ['Furnaces', 'HVAC System', 'Heating', 'Cooling'],
        icon: Thermometer
    },
    {
        id: '02',
        name: 'Water Heater Service',
        desc: 'Expert repair and installation for all major water heater brands. Get your hot water back today with our reliable local service.',
        img: '/jeffs-appliance-repair/water-heater.png',
        tags: ['Gas', 'Electric', 'Installations', 'Maintenance'],
        icon: Droplets
    },
    {
        id: '03',
        name: 'Kitchen & Laundry',
        desc: "From noisy refrigerators to leaking dishwashers, we fix all major household appliances with precision and genuine parts.",
        img: '/jeffs-appliance-repair/refrigerator-repair.png',
        tags: ['Refrigerators', 'Washers', 'Dryers', 'Dishwashers'],
        icon: Settings
    }
]

const problems = [
    { icon: Flame, title: 'Furnace Issues', desc: 'Blowing cold or not starting at all. We fix Buffalo heating systems fast.' },
    { icon: Refrigerator, title: 'Noisy Fridges', desc: 'Prevent food spoilage. We diagnose compressor and seal issues on all brands.' },
    { icon: Droplets, title: 'Water Heaters', desc: 'Leaking tanks or cold showers. Gas and electric units handled with care.' },
    { icon: Trash2, title: 'Garbage Disposals', desc: 'Jammed motors or clogs cleared in minutes to keep your kitchen flowing.' },
]

const testimonials = [
    {
        name: 'Michael S.',
        location: 'Buffalo, MN',
        text: '"Jeff fixed our furnace in the middle of a blizzard. Fast, professional, and very fairly priced. Highly recommend!"',
    },
    {
        name: 'Sarah L.',
        location: 'Monticello, MN',
        text: '"The only repair expert who accurately diagnosed my noisy fridge after others failed. Exceptional mechanical insight."',
    },
    {
        name: 'David K.',
        location: 'Elk River, MN',
        text: '"Honest advice on a refrigerator seal instead of an upsell. A rare find in this industry. True Buffalo professionalism."',
    },
]

const processSteps = [
    { id: '01', title: 'Call or Message', desc: 'Reach out to Jeff directly for immediate support.' },
    { id: '02', title: 'Schedule Visit', desc: 'We find a diagnostic window that works for your schedule.' },
    { id: '03', title: 'Fast Repair', desc: 'Expert technician arrives equipped for same-day solutions.' },
    { id: '04', title: 'Enjoy Comfort', desc: 'Back to normal with a fully functional Buffalo home.' },
]

const faqs = [
    {
        q: "How soon can you come?",
        a: "We pride ourselves on rapid response. Often we provide same-day or next-day appointments depending on your location within our 40-mile service radius."
    },
    {
        q: "Do you provide warranties?",
        a: "Yes! All our repairs and installations come with a satisfaction guarantee. We stand behind our workmanship and the premium parts we install."
    },
    {
        q: "What areas do you cover?",
        a: "We serve a 40-mile radius around Buffalo (55362). This includes Monticello, Elk River, St. Cloud, Rogers, and all surrounding Wright County communities."
    }
]

const cities = [
    'Buffalo', 'Monticello', 'Elk River', 'Otsego', 'St. Cloud',
    'Maple Lake', 'Annandale', 'Delano', 'Hanover', 'Rockford',
    'St. Michael', 'Albertville', 'Rogers', 'Big Lake', 'Becker'
]

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.jr-reveal')
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('jr-visible')
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
export default function JeffsApplianceRepairPage() {
    const [formSent, setFormSent] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    useReveal()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setFormSent(true)
        setTimeout(() => setFormSent(false), 4000)
            ; (e.target as HTMLFormElement).reset()
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --jr-primary: #002c45;
          --jr-primary-container: #154360;
          --jr-secondary: #4c616c;
          --jr-tertiary: #702900;
          --jr-background: #f8f9fa;
          --jr-surface: #ffffff;
          --jr-surface-variant: #e1e3e4;
          --jr-on-surface: #191c1d;
          --jr-on-surface-variant: #42474d;
          --jr-outline: #72787e;
          --jr-glass: rgba(255, 255, 255, 0.85);
          
          --ff-main: 'Work Sans', sans-serif;
        }

        .jr-root {
          font-family: var(--ff-main);
          background: var(--jr-background);
          color: var(--jr-on-surface);
          overflow-x: hidden;
        }

        .jr-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .jr-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-nav {
          background: var(--jr-glass);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .hero-gradient {
          background: radial-gradient(circle at 10% 20%, rgba(21, 67, 96, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(112, 41, 0, 0.03) 0%, transparent 50%);
        }

        .service-card {
          background: var(--jr-surface);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          border-color: rgba(21, 67, 96, 0.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--jr-primary) 0%, var(--jr-primary-container) 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 44, 69, 0.2);
        }
        .btn-primary:hover {
          opacity: 0.95;
          transform: translateY(-1px);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .faq-item {
          background: var(--jr-surface);
          border: 1px solid var(--jr-surface-variant);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          border-color: var(--jr-primary);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
      `}</style>

            <div className="jr-root">
                {/* ─── NAVIGATION ─── */}
                <nav className="fixed top-0 w-full z-50 glass-nav">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="font-extrabold text-xl tracking-tighter text-[--jr-primary] uppercase">
                            Jeff's <span className="font-light">Appliance Repair</span>
                        </div>
                        <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-[--jr-on-surface-variant]">
                            <a href="#services" className="hover:text-[--jr-tertiary] transition-colors">Services</a>
                            <a href="#about" className="hover:text-[--jr-tertiary] transition-colors">Experience</a>
                            <a href="#process" className="hover:text-[--jr-tertiary] transition-colors">Process</a>
                            <a href="#faq" className="hover:text-[--jr-tertiary] transition-colors">FAQ</a>
                            <a href={biz.phoneHref} className="bg-[--jr-primary] text-white px-5 py-2.5 rounded-lg flex items-center gap-2">
                                <Phone size={14} /> {biz.phone}
                            </a>
                        </div>
                    </div>
                </nav>

                {/* ─── HERO SECTION ─── */}
                <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="z-10">
                            <div className="jr-reveal inline-flex items-center gap-2 px-3 py-1 bg-[#ffdbcd] text-[--jr-tertiary] text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded">
                                <Shield size={12} fill="currentColor" /> Serving Buffalo, MN Since 2000
                            </div>
                            <h1 className="jr-reveal text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[--jr-primary] mb-6">
                                Fast, Reliable<br />
                                <span className="text-[--jr-tertiary]">Appliance Repair</span><br />
                                You Can Trust.
                            </h1>
                            <p className="jr-reveal text-lg text-[--jr-on-surface-variant] mb-9 max-w-lg leading-relaxed">
                                Expert diagnostics and same-day service for {biz.zip} and a {biz.radius}-mile radius. Specializing in HVAC, furnaces, and major household appliances.
                            </p>
                            <div className="jr-reveal flex flex-col sm:flex-row gap-4">
                                <a href={biz.phoneHref} className="btn-primary inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl transition-all">
                                    Call Today: {biz.phone}
                                </a>
                                <a href="#contact" className="bg-white border-2 border-[--jr-primary] text-[--jr-primary] inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all">
                                    Book a Repair
                                </a>
                            </div>
                        </div>

                        <div className="jr-reveal relative">
                            <div className="absolute -inset-4 bg-[--jr-primary] opacity-[0.03] rounded-[2rem] rotate-3 translate-x-4"></div>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border-[8px] border-white shadow-2xl">
                                <Image
                                    src="/jeffs-appliance-repair/hero-technician.png"
                                    alt="Expert Appliance Repair Technician in Buffalo MN"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-[--jr-tertiary] text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-3xl font-black">23+</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── MARQUEE ─── */}
                <div className="bg-[--jr-primary] py-4 overflow-hidden">
                    <div className="marquee-track">
                        {[1, 2].map(i => (
                          <div key={i} className="flex whitespace-nowrap">
                            {['Appliance Repair Buffalo MN', 'Furnace Service 55362', 'Refrigerator Repair Specialists', 'HVAC Diagnostics', 'Water Heater Installation', 'Expert Local Repairs', 'Trusted Since 2000'].map((txt, j) => (
                                <span key={j} className="text-white text-[10px] font-bold uppercase tracking-[0.3em] px-12 flex items-center gap-4">
                                    {txt} <span className="w-1.5 h-1.5 bg-[--jr-tertiary] rounded-full"></span>
                                </span>
                            ))}
                          </div>
                        ))}
                    </div>
                </div>

                {/* ─── PROBLEM SECTION ─── */}
                <section className="py-24 px-6 md:px-12 bg-[--jr-background] border-b border-gray-200/50">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="jr-reveal lg:col-span-5">
                            <h2 className="text-4xl font-black text-[--jr-primary] mb-6 leading-tight">Is a broken appliance slowing down your Buffalo home?</h2>
                            <p className="text-lg text-[--jr-on-surface-variant] mb-8 leading-relaxed">
                                Don't let mechanical failure disrupt your rhythm. We handle the heavy diagnostics and restoration so you can get back to what matters. Reliable, fast, and local.
                            </p>
                        </div>
                        <div className="jr-reveal lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problems.map((p) => (
                                <div key={p.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-[--jr-tertiary] mb-4"><p.icon size={32} /></div>
                                    <h3 className="text-xl font-bold text-[--jr-primary] mb-2">{p.title}</h3>
                                    <p className="text-sm text-[--jr-on-surface-variant]">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SERVICES SECTION ─── */}
                <section id="services" className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <div className="jr-reveal text-[--jr-tertiary] font-black text-xs uppercase tracking-[0.3em] mb-3">Our Expertise</div>
                                <h2 className="jr-reveal text-4xl md:text-5xl font-black text-[--jr-primary] tracking-tight">Jeff's Expert Solutions.</h2>
                                <p className="jr-reveal mt-4 text-[--jr-on-surface-variant]">We fix it right the first time. Specializing in HVAC, Water Heaters, and Refrigerators since 2000.</p>
                            </div>
                            <div className="jr-reveal bg-[--jr-primary] text-white p-6 rounded-2xl shrink-0 text-center">
                                <p className="text-[10px] uppercase tracking-widest mb-1 font-bold opacity-80">Response Time</p>
                                <p className="text-2xl font-black">Fast & Same-Day</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((s) => (
                                <div key={s.id} className="jr-reveal service-card rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4 inline-block p-3 bg-gray-50 rounded-xl text-[--jr-primary]">
                                            <s.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-black text-[--jr-primary] mb-3">{s.name}</h3>
                                        <p className="text-[14px] text-[--jr-on-surface-variant] leading-relaxed mb-6">{s.desc}</p>
                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {s.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold bg-gray-50 text-[--jr-on-surface-variant] px-3 py-1 rounded-full border border-gray-100 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY CHOOSE US ─── */}
                <section id="about" className="py-24 bg-[--jr-primary] text-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: Clock, label: '23+ Years', sub: 'Experience' },
                            { icon: HardHat, label: 'HVAC', sub: 'Certified Experts' },
                            { icon: MapPin, label: 'Fast Local', sub: '40-Mile Service' },
                            { icon: Waves, label: 'Affordable', sub: 'Pricing Strategy' }
                        ].map((b, i) => (
                            <div key={i} className="jr-reveal flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-[--jr-tertiary] border border-white/5">
                                    <b.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-1">{b.label}</h4>
                                <p className="text-xs opacity-60 uppercase tracking-widest font-bold">{b.sub}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── SOCIAL PROOF ─── */}
                <section className="py-24 bg-[--jr-background] px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="jr-reveal text-4xl font-black text-[--jr-primary] mb-4">What Neighbors Are Saying</h2>
                            <div className="jr-reveal flex justify-center gap-1 text-[--jr-tertiary]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <div key={i} className="jr-reveal bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between italic text-[--jr-on-surface-variant]">
                                    <p className="mb-8 leading-relaxed">"{t.text}"</p>
                                    <div className="not-italic font-black text-[--jr-primary] flex items-center justify-between">
                                        <span>— {t.name}</span>
                                        <span className="text-[10px] uppercase text-[--jr-tertiary]">{t.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS SECTION ─── */}
                <section id="process" className="py-24 bg-white px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="jr-reveal text-4xl font-black text-[--jr-primary] text-center mb-20 uppercase tracking-tighter">Our 4-Step Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-px bg-gray-100 -z-0"></div>
                            {processSteps.map((step) => (
                                <div key={step.id} className="jr-reveal relative z-10 text-center group">
                                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl transition-all ${step.id === '04' ? 'bg-[--jr-tertiary] text-white' : 'bg-gray-50 text-[--jr-primary]'}`}>
                                        <span className="text-3xl font-black">{step.id}</span>
                                    </div>
                                    <h5 className="text-lg font-black text-[--jr-primary] mb-3">{step.title}</h5>
                                    <p className="text-sm text-[--jr-on-surface-variant] leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── OFFER SECTION ─── */}
                <section className="py-12 bg-[#ffdbcd]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-white/40 backdrop-blur-sm px-10 py-8 rounded-[2rem] border border-white/60 shadow-lg">
                            <div className="mb-6 md:mb-0 text-center md:text-left">
                                <h3 className="text-2xl font-black text-[--jr-primary] leading-none mb-2">Free consultation for new installations.</h3>
                                <p className="text-[--jr-tertiary] font-semibold text-sm">Ready for an upgrade? Get an expert's eyes on it at no cost.</p>
                            </div>
                            <a href={biz.phoneHref} className="btn-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider flex items-center gap-2">
                                Claim Offer Now <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ─── FAQ SECTION ─── */}
                <section id="faq" className="py-24 bg-[--jr-background] px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="jr-reveal text-4xl font-black text-[--jr-primary] text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((f, i) => (
                                <div key={i} className={`jr-reveal faq-item ${openFaq === i ? 'open' : ''}`}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-black text-[--jr-primary]">
                                        {f.q}
                                        <ChevronDown size={20} className={`text-[--jr-tertiary] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                                        <div className="px-6 pb-6 text-sm leading-relaxed text-[--jr-on-surface-variant]">
                                            {f.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── SERVICE AREA & MAP ─── */}
                <section id="coverage" className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="jr-reveal lg:col-span-12 text-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-black text-[--jr-primary] mb-6 leading-tight uppercase tracking-tighter">Where We Work</h2>
                        </div>
                        <div className="jr-reveal lg:col-span-5">
                            <p className="text-xl text-[--jr-on-surface-variant] mb-10 leading-relaxed">
                                Jeff's Appliance Repair is proud to serve our local neighbors. Expert diagnostics and restoration across a <span className="font-bold text-[--jr-primary]">40-mile radius around Buffalo (55362)</span>.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cities.map(city => (
                                    <span key={city} className="text-[11px] font-bold bg-[--jr-background] border border-gray-200 px-4 py-2 rounded-full text-[--jr-primary] hover:border-[--jr-tertiary] transition-colors cursor-default">
                                        {city}, MN
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="jr-reveal lg:col-span-7 relative">
                            <div className="aspect-video bg-gray-50 rounded-[2rem] border-[10px] border-white shadow-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                                    <MapPin size={240} className="text-[--jr-primary]" />
                                </div>
                                <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
                                    <div className="bg-white/95 backdrop-blur-sm p-10 rounded-[1.5rem] shadow-xl border border-gray-100 max-w-sm">
                                        <MapPin className="mx-auto text-[--jr-tertiary] mb-6" size={40} />
                                        <h4 className="font-black text-2xl text-[--jr-primary] mb-3">Centralized in Buffalo</h4>
                                        <p className="text-sm text-[--jr-on-surface-variant] leading-relaxed font-medium">Ready-response repair and installation for Monticello, Elk River, and St. Cloud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── CONTACT SECTION ─── */}
                <section id="contact" className="py-24 bg-[--jr-primary] text-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="jr-reveal">
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Ready to Restore<br/>Your Home's Flow?</h2>
                            <p className="text-lg opacity-80 mb-12 max-w-md">Call for immediate support, or use the form to schedule a diagnostic visit. We confirm all appointments promptly.</p>
                            
                            <div className="space-y-8">
                                <a href={biz.phoneHref} className="flex items-start gap-6 group">
                                    <div className="bg-white/10 p-5 rounded-2xl group-hover:bg-[--jr-tertiary] transition-all">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Direct Call</div>
                                        <div className="text-4xl font-black group-hover:text-[--jr-tertiary] transition-colors">{biz.phone}</div>
                                    </div>
                                </a>
                                <div className="flex items-start gap-6">
                                    <div className="bg-white/10 p-5 rounded-2xl text-[--jr-tertiary]">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Email Us</div>
                                        <div className="text-xl font-black">{biz.email}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-white/10 p-5 rounded-2xl text-[--jr-tertiary]">
                                        <Clock size={28} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Response Window</div>
                                        <div className="text-xl font-black">Same-Day / Next-Day Service</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="jr-reveal bg-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
                            {formSent ? (
                                <div className="text-center py-12">
                                    <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black text-[--jr-primary] mb-2">Message Sent!</h3>
                                    <p className="text-[--jr-on-surface-variant] font-medium">Jeff will reach out shortly to confirm your repair visit.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-[--jr-on-surface-variant] mb-2">Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-[--jr-on-surface] focus:outline-none focus:ring-2 focus:ring-[--jr-tertiary]/20 focus:bg-white transition-all font-medium" placeholder="Enter name" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-[--jr-on-surface-variant] mb-2">Phone</label>
                                            <input required type="tel" className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-[--jr-on-surface] focus:outline-none focus:ring-2 focus:ring-[--jr-tertiary]/20 focus:bg-white transition-all font-medium" placeholder="(000) 000-0000" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-[--jr-on-surface-variant] mb-2">Service Needed</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-[--jr-on-surface] focus:outline-none focus:ring-2 focus:ring-[--jr-tertiary]/20 focus:bg-white transition-all appearance-none font-bold">
                                            <option>HVAC / Furnace Repair</option>
                                            <option>Water Heater Repair</option>
                                            <option>Refrigerator Service</option>
                                            <option>Washer / Dryer Service</option>
                                            <option>Other Appliance Issue</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-[--jr-on-surface-variant] mb-2">Description</label>
                                        <textarea className="w-full bg-gray-50 border border-gray-100 px-5 py-4 rounded-xl text-[--jr-on-surface] focus:outline-none focus:ring-2 focus:ring-[--jr-tertiary]/20 focus:bg-white transition-all h-36 resize-none font-medium" placeholder="Briefly describe the issue..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full btn-primary py-5 rounded-2xl font-black text-xl uppercase tracking-tighter transition-all">
                                        Request Repair Quote
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* ─── TRUST BAR ─── */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-16 gap-y-8 items-center opacity-70">
                        {[
                            { icon: UserCheck, label: '100% Satisfaction Guarantee' },
                            { icon: Shield, label: 'Licensed and Insured' },
                            { icon: HardHat, label: 'Master Craftsmanship' }
                        ].map((t, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <t.icon size={36} className="text-[--jr-primary]" />
                                <span className="font-black text-[--jr-primary] uppercase tracking-[0.2em] text-[11px]">{t.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── FOOTER ─── */}
                <footer className="py-20 bg-gray-50 border-t border-gray-200/60">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
                        <div>
                            <div className="font-black text-3xl tracking-tighter text-[--jr-primary] uppercase mb-4">
                                Jeff's <span className="font-light">Appliance Repair</span>
                            </div>
                            <p className="text-sm text-[--jr-on-surface-variant] max-w-xs leading-relaxed font-medium">
                                Providing expert mechanical solutions to Buffalo and Wright County families since 2000. Licensed, insured, and deeply local.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h6 className="font-black text-[--jr-primary] uppercase tracking-widest text-[10px] mb-6">Quick Links</h6>
                                <ul className="space-y-3 text-sm font-bold text-[--jr-on-surface-variant]">
                                    <li><a href="#services" className="hover:text-[--jr-tertiary] transition-colors">Services</a></li>
                                    <li><a href="#about" className="hover:text-[--jr-tertiary] transition-colors">About Us</a></li>
                                    <li><a href="#coverage" className="hover:text-[--jr-tertiary] transition-colors">Service Area</a></li>
                                    <li><a href="#faq" className="hover:text-[--jr-tertiary] transition-colors">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:items-end text-left md:text-right">
                                <h6 className="font-black text-[--jr-primary] uppercase tracking-widest text-[10px] mb-6">Contact</h6>
                                <div className="text-2xl font-black text-[--jr-primary] mb-2">{biz.phone}</div>
                                <div className="text-sm text-[--jr-on-surface-variant] font-bold mb-4">{biz.email}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-[--jr-tertiary]">© 2024 · Buffalo MN 55362</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
