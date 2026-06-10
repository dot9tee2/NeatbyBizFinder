'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Navigation,
  ArrowRight,
  Star,
  Zap,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   BUSINESS DATA
───────────────────────────────────────────── */
const biz = {
  name: "Daniel's Garage Doors",
  phone: '(909) 913-7483',
  phoneHref: 'tel:9099137483',
  email: 'mezapablo77@gmail.com',
  location: 'San Bernardino, CA',
  radius: '30',
  hours: 'Mon – Sat · 7:00 AM – 7:00 PM',
};

const services = [
  {
    id: '01',
    name: 'Garage Door Repair',
    desc: 'Off-track doors, broken cables, bent rollers, or noisy operation. We diagnose and repair all issues to restore smooth, quiet functionality.',
    img: '/daniels-garage-doors/service-repair.png',
  },
  {
    id: '02',
    name: 'Broken Spring Replacement',
    desc: "High-cycle torsion and extension springs replaced safely and efficiently. Don't risk injury—let an expert handle the heavy lifting.",
    img: '/daniels-garage-doors/service-spring.png',
  },
  {
    id: '03',
    name: 'New Door Installation',
    desc: 'Upgrade your home’s curb appeal with a brand new, modern garage door. We offer expert installation of premium, energy-efficient doors.',
    img: '/daniels-garage-doors/service-installation.png',
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fully Residential Focused',
    desc: 'We specialize strictly in residential properties, ensuring specialized care for your home.',
  },
  {
    icon: Wrench,
    title: 'Expert Diagnostics',
    desc: 'We pinpoint the exact issue quickly, saving you time and avoiding unnecessary part replacements.',
  },
  {
    icon: CheckCircle2,
    title: 'Honest & Transparent',
    desc: 'Clear communication and upfront pricing before any work begins. No hidden fees.',
  },
  {
    icon: Navigation,
    title: 'Local to the Inland Empire',
    desc: 'Based in San Bernardino, covering Riverside and surrounding areas up to 30 miles.',
  },
];

const serviceAreas = [
  'San Bernardino',
  'Riverside',
  'Fontana',
  'Rialto',
  'Redlands',
  'Loma Linda',
  'Colton',
  'Highland',
  'Grand Terrace',
  'Bloomington',
];

const problems = [
  {
    title: "Motor runs, but the door won't open",
    desc: 'Often caused by a broken torsion spring or a snapped cable. We safely replace high-tension springs using commercial-grade steel.',
  },
  {
    title: 'Door is crooked or off-track',
    desc: 'Usually due to worn-out rollers or damaged tracks. We realign the tracking system, replace bent tracks, and upgrade to heavy-duty nylon rollers.',
  },
  {
    title: 'Door reverses before hitting the floor',
    desc: 'Commonly a result of misaligned safety sensors or an obstruction. We recalibrate the photo-eye sensors and test the auto-reverse mechanism.',
  },
];

const faqs = [
  {
    q: 'How much does it cost to repair a garage door in San Bernardino?',
    a: 'Repair costs vary depending on the issue, ranging from a simple sensor alignment to a full torsion spring replacement. We provide transparent, upfront quotes before any work begins.',
  },
  {
    q: 'Do you offer same-day garage door repair?',
    a: 'Yes, whenever possible. A broken garage door is a security risk, so we prioritize emergency and same-day repair requests across Riverside and San Bernardino.',
  },
  {
    q: 'How do I know if my garage door spring is broken?',
    a: 'You might hear a loud bang from the garage, the door will feel extremely heavy to lift manually, or you may visually see a gap in the coils of the spring above the door.',
  },
  {
    q: 'Should I repair or replace my old garage door?',
    a: 'If the door is constantly breaking down, has severe cosmetic damage, or lacks modern safety features, replacement is often more cost-effective. However, many issues can be fixed with affordable repairs.',
  },
];

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.dgd-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('dgd-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function DanielsGarageDoorsPage() {
  const [formSent, setFormSent] = useState(false);
  useReveal();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@500;600;700&display=swap');

                :root {
                    --dgd-bg: #f8fafc;
                    --dgd-surface: #ffffff;
                    --dgd-surface-alt: #f1f5f9;
                    --dgd-primary: #2c3e50; /* Slate Gray */
                    --dgd-primary-light: #34495e;
                    --dgd-accent: #e67e22; /* Industrial Orange */
                    --dgd-accent-hover: #d35400;
                    --dgd-text-main: #1e293b;
                    --dgd-text-muted: #64748b;
                    --dgd-border: #e2e8f0;
                    
                    --ff-heading: 'Oswald', sans-serif;
                    --ff-body: 'Inter', sans-serif;
                }

                .dgd-root {
                    font-family: var(--ff-body);
                    background: var(--dgd-bg);
                    color: var(--dgd-text-main);
                    overflow-x: hidden;
                }

                .dgd-reveal {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
                }
                .dgd-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .dgd-h1, .dgd-h2, .dgd-h3 {
                    font-family: var(--ff-heading);
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .dgd-h1 {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 700;
                    color: var(--dgd-primary);
                }

                .dgd-h2 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 600;
                    color: var(--dgd-primary);
                }

                .dgd-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: var(--dgd-accent);
                    color: #fff;
                    font-family: var(--ff-heading);
                    font-size: 1.1rem;
                    letter-spacing: 0.05em;
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    transition: all 0.2s;
                    text-decoration: none;
                }
                .dgd-btn:hover {
                    background: var(--dgd-accent-hover);
                    transform: translateY(-2px);
                }

                .dgd-card {
                    background: var(--dgd-surface);
                    border: 1px solid var(--dgd-border);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .dgd-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                }

                /* Header */
                .dgd-header {
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid var(--dgd-border);
                }
            `}</style>

      <div className="dgd-root">
        {/* ─── HEADER ─── */}
        <header className="dgd-header px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: 'var(--ff-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--dgd-primary)',
                  lineHeight: 1,
                }}
              >
                DANIEL'S
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'var(--dgd-accent)',
                  textTransform: 'uppercase',
                }}
              >
                Garage Doors
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#coverage"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Service Area
              </a>
              <a
                href={biz.phoneHref}
                className="flex items-center gap-2 text-slate-900 font-bold"
                style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.2rem' }}
              >
                <Phone size={18} color="var(--dgd-accent)" /> {biz.phone}
              </a>
            </div>
            {/* Mobile CTA */}
            <div className="md:hidden">
              <a
                href={biz.phoneHref}
                className="flex items-center gap-2 bg-[#e67e22] text-white px-4 py-2 rounded text-sm font-bold tracking-wide"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* ─── HERO ─── */}
          <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/daniels-garage-doors/hero-garage.png"
                alt="Modern residential garage door installed by Daniel's Garage Doors"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <div className="dgd-reveal flex items-center gap-2 mb-4">
                  <span className="w-8 h-1" style={{ background: 'var(--dgd-accent)' }} />
                  <span className="text-white text-sm font-semibold tracking-widest uppercase">
                    San Bernardino & Riverside
                  </span>
                </div>

                <h1 className="dgd-reveal dgd-h1 text-white mb-6">
                  Expert Residential <span style={{ color: 'var(--dgd-accent)' }}>Garage Door</span>{' '}
                  Repair & Installation
                </h1>

                <p className="dgd-reveal text-slate-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                  Reliable, honest, and professional garage door services within a 30-mile radius of
                  San Bernardino. From broken springs to complete replacements.
                </p>

                <div className="dgd-reveal flex flex-wrap gap-4">
                  <a href={biz.phoneHref} className="dgd-btn">
                    <Phone size={20} /> Call {biz.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-md font-bold uppercase tracking-wide hover:bg-slate-100 transition-colors"
                    style={{ fontFamily: 'var(--ff-heading)' }}
                  >
                    Request a Quote
                  </a>
                </div>

                <div className="dgd-reveal flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Star size={16} fill="var(--dgd-accent)" color="var(--dgd-accent)" />
                    <span>Top Rated on Yelp</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <CheckCircle2 size={16} color="var(--dgd-accent)" />
                    <span>Residential Specialists</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SERVICES ─── */}
          <section id="services" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 dgd-reveal">
                <h2 className="dgd-h2 mb-4">
                  Our <span style={{ color: 'var(--dgd-accent)' }}>Services</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  We handle every aspect of residential garage doors. If it's broken, we can fix it.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="dgd-card dgd-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={s.img}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1 text-sm font-bold tracking-widest"
                        style={{ fontFamily: 'var(--ff-heading)' }}
                      >
                        {s.id}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="dgd-h3 text-xl mb-3">{s.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── COMMON PROBLEMS ─── */}
          <section id="problems" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 dgd-reveal">
                <h2 className="dgd-h2 mb-4">
                  Common <span style={{ color: 'var(--dgd-accent)' }}>Problems</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Not sure what's wrong? Here are the most frequent issues we see and how we solve
                  them.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {problems.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm dgd-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                      <Wrench size={24} />
                    </div>
                    <h3 className="dgd-h3 text-xl mb-3 text-slate-800">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── WHY CHOOSE US ─── */}
          <section
            id="about"
            className="py-24 px-6"
            style={{ background: 'var(--dgd-surface-alt)' }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="dgd-reveal">
                  <h2 className="dgd-h2 mb-6">
                    Why Choose <br />
                    <span style={{ color: 'var(--dgd-accent)' }}>Daniel's?</span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We believe in doing the job right the first time. As a dedicated local business,
                    we rely on the quality of our work and the satisfaction of our neighbors in the
                    Inland Empire to keep us growing.
                  </p>
                  <div className="space-y-6">
                    {reasons.map((r, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: 'rgba(230, 126, 34, 0.1)',
                            color: 'var(--dgd-accent)',
                          }}
                        >
                          <r.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg mb-1">{r.title}</h4>
                          <p className="text-slate-600">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[600px] rounded-xl overflow-hidden dgd-reveal shadow-2xl">
                  <Image
                    src="/daniels-garage-doors/service-repair.png"
                    alt="Garage door technician working"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border-8 border-white/10 rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* ─── COVERAGE ─── */}
          <section
            id="coverage"
            className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full fill-current"
              >
                <polygon points="0,100 100,0 100,100" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h2 className="dgd-h2 text-white mb-6">
                Our Service <span style={{ color: 'var(--dgd-accent)' }}>Area</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
                Proudly serving a {biz.radius}-mile radius around San Bernardino, including
                Riverside County. We bring the repair shop to your driveway.
              </p>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-5 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 text-sm font-medium"
                  >
                    {area}, CA
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 dgd-reveal">
                <h2 className="dgd-h2 mb-4">
                  Frequently Asked <span style={{ color: 'var(--dgd-accent)' }}>Questions</span>
                </h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm dgd-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <h3
                      className="text-lg font-bold text-slate-900 mb-3"
                      style={{ fontFamily: 'var(--ff-heading)', letterSpacing: '0.02em' }}
                    >
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── CONTACT ─── */}
          <section id="contact" className="py-24 px-6 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-16">
                <div className="lg:col-span-2 dgd-reveal">
                  <h2 className="dgd-h2 mb-6">
                    Ready to fix your <span style={{ color: 'var(--dgd-accent)' }}>Door?</span>
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Don't let a broken garage door ruin your day or compromise your home's security.
                    Contact Daniel today for prompt, professional service.
                  </p>

                  {/* TRUST BADGES */}
                  <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <ShieldCheck color="var(--dgd-accent)" size={20} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">
                        1-Year Parts & Labor Warranty
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <Zap color="var(--dgd-accent)" size={20} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">
                        Same-Day Service Available
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <MapPin color="var(--dgd-accent)" size={20} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">
                        Locally Owned & Operated
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">
                          Call Us
                        </div>
                        <a
                          href={biz.phoneHref}
                          className="text-xl font-bold text-slate-900 hover:text-[#e67e22] transition-colors"
                        >
                          {biz.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">
                          Email Us
                        </div>
                        <a
                          href={`mailto:${biz.email}`}
                          className="text-xl font-bold text-slate-900 hover:text-[#e67e22] transition-colors"
                        >
                          {biz.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                        <Clock size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">
                          Hours
                        </div>
                        <div className="text-lg font-medium text-slate-900">{biz.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 dgd-reveal">
                  <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
                    <h3 className="dgd-h3 text-2xl mb-6">Request a Quote</h3>
                    {formSent ? (
                      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg flex flex-col items-center text-center">
                        <CheckCircle2 size={48} className="text-green-500 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                        <p>Thank you for reaching out. Daniel will get back to you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="dgd-name"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Full Name
                            </label>
                            <input
                              id="dgd-name"
                              required
                              type="text"
                              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none transition-shadow"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="dgd-phone"
                              className="block text-sm font-medium text-slate-700 mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                              id="dgd-phone"
                              required
                              type="tel"
                              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none transition-shadow"
                              placeholder="(909) 555-0123"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="dgd-email"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            id="dgd-email"
                            required
                            type="email"
                            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none transition-shadow"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="dgd-message"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            How can we help?
                          </label>
                          <textarea
                            id="dgd-message"
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none transition-shadow resize-none"
                            placeholder="Describe the issue with your garage door..."
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="w-full dgd-btn justify-center"
                          style={{ padding: '1.25rem' }}
                        >
                          Send Message <ArrowRight size={18} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ─── FOOTER ─── */}
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <div>&copy; {new Date().getFullYear()} Daniel's Garage Doors. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
