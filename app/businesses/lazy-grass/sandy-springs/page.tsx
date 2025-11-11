'use client'
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Check } from 'lucide-react';

// Business Data
const lazyGrass = {
  name: 'Lazy Grass',
  phone: '(678) 234-1734',
  phoneHref: 'tel:+16782341734',
  email: 'justinblastick@gmail.com',
  serviceArea: 'Sandy Springs',
  imagesBase: '/lazy-grass/sandy-springs',
  about: "Founded in 2018 by a construction and hardscaping professional, Lazy Grass grew from a vision to bring superior artificial turf installation to the North Atlanta region. What started as a specialized service has evolved into Sandy Springs' go-to artificial turf company. Operating full-time since 2020, we've built our business through word-of-mouth referrals and the trust of homeowners and businesses who value quality workmanship. Our foundation in construction ensures every installation includes proper grading and drainage systems. From Sandy Springs' established neighborhoods to Woodstock's rolling hills, we understand how North Georgia's clay soil and seasonal weather patterns affect turf installation. This local knowledge helps us deliver installations that look beautiful and perform flawlessly year-round. As a family-owned business, we're proud to serve communities throughout the North Atlanta region, helping property owners enjoy low-maintenance, beautiful lawns. Get to know our experienced team and proven approach today.",
  services: [
    {
      slug: 'turf-installation',
      title: 'Artificial Turf Installation',
      desc: 'Our flagship service. We install high-quality, realistic artificial turf for lawns, play areas, and commercial properties, complete with proper grading.'
    },
    {
      slug: 'putting-greens',
      title: 'Backyard Putting Greens',
      desc: "Perfect your short game with a professional-grade putting green, custom-designed and installed to fit your space."
    },
    {
      slug: 'pet-turf',
      title: 'Pet-Safe Turf Systems',
      desc: 'Durable, easy-to-clean turf solutions designed to handle pets, with specialized infill and drainage to keep your yard fresh.'
    },
    {
      slug: 'grading-drainage',
      title: 'Grading & Drainage',
      desc: "Our construction background ensures every project starts right. We solve drainage issues and perfectly grade the site *before* laying turf."
    }
  ],
  faqs: [
    {
      q: 'Are you licensed and insured?',
      a: "Yes, we're fully licensed and insured for all turf installations, protecting both you and our team throughout every project."
    },
    {
      q: 'What areas do you serve?',
      a: 'We primarily serve the North Atlanta region, including Sandy Springs, Woodstock and surrounding communities. If you are in the area, give us a call!'
    },
    {
      q: "What's your experience level?",
      a: 'Our founder has been in construction and hardscaping since 2018. The Lazy Grass team has been operating full-time since 2020, specializing exclusively in artificial turf.'
    },
    {
      q: 'What types of turf do you install?',
      a: 'We install a wide variety of high-quality, durable artificial turf, including pet-safe systems, realistic lawn turf, and professional-grade putting greens.'
    },
    {
      q: 'Do you handle construction and grading?',
      a: 'Yes. Our background is in construction. Every installation includes proper grading and drainage systems to ensure your turf lasts.'
    },
    {
      q: 'Is artificial turf safe for children?',
      a: 'Absolutely. Our turf products are non-toxic, lead-free, and provide a soft, cushioned surface, making them an ideal and safe play area for children.'
    }
  ]
};

export default function LazyGrassRedesign() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = () => {
    const mailtoHref = `mailto:${lazyGrass.email}?subject=${encodeURIComponent('Estimate Request – Sandy Springs')}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`)}`;
    window.location.href = mailtoHref;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-24 h-12">
                <img src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 font-medium transition">Services</a>
              <a href="#gallery" className="text-gray-600 hover:text-teal-600 font-medium transition">Gallery</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 font-medium transition">About</a>
              <a href="#process" className="text-gray-600 hover:text-teal-600 font-medium transition">Process</a>
              <a href="#faqs" className="text-gray-600 hover:text-teal-600 font-medium transition">FAQs</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a href={lazyGrass.phoneHref} className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium">
                <Phone className="w-4 h-4" />
                {lazyGrass.phone}
              </a>
              <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition font-medium">
                Get Quote
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-teal-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-gray-600 hover:text-teal-600 font-medium">Services</a>
                <a href="#gallery" className="text-gray-600 hover:text-teal-600 font-medium">Gallery</a>
                <a href="#about" className="text-gray-600 hover:text-teal-600 font-medium">About</a>
                <a href="#process" className="text-gray-600 hover:text-teal-600 font-medium">Process</a>
                <a href="#faqs" className="text-gray-600 hover:text-teal-600 font-medium">FAQs</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/lazy-grass/woodstock/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full text-teal-300 font-medium text-sm mb-6 border border-teal-400/30">
              <MapPin className="w-4 h-4" />
              Serving Sandy Springs & North Atlanta
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Lawn Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Masterpiece</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Perfect lawns, pet turf, and putting greens. Family-owned with a background in construction for expert grading and drainage.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={lazyGrass.phoneHref} className="px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                Call {lazyGrass.phone}
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition font-semibold text-lg">
                Request Free Estimate
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '✓', text: 'Licensed & Insured', color: 'from-teal-500 to-cyan-500' },
                { icon: '✓', text: 'Family-Owned', color: 'from-cyan-500 to-blue-500' },
                { icon: '✓', text: 'Expert Grading', color: 'from-blue-500 to-indigo-500' },
                { icon: '✓', text: 'Referral-Based', color: 'from-indigo-500 to-purple-500' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold`}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive turf solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lazyGrass.services.map((service, idx) => (
              <div key={service.slug} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-teal-300 transition duration-300 h-full">
                  <div className="relative h-40 mb-4">
                    <img 
                      src={`${lazyGrass.imagesBase}/service-${service.slug}.png`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">See the quality we bring to every installation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
                <img 
                  src={`${lazyGrass.imagesBase}/gallery-${idx + 1}.webp`}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">Project {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {['team-1.png', 'grading-1.png', 'turf-rolls-1.png', 'putting-green-1.png'].map((file, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={`${lazyGrass.imagesBase}/${file}`}
                    alt={`Lazy Grass ${file.replace('.png', '').replace('-', ' ')}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About {lazyGrass.name}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{lazyGrass.about}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Licensed & Insured',
                  'Family-Owned & Operated',
                  'Local Woodstock Pros',
                  'Construction & Grading Experts'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-teal-100">From expert grading to the final "wow," we handle every step</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: '1. Consultation', desc: 'We visit your site, discuss your goals, and provide a free, no-obligation estimate.' },
              { name: '2. Site Preparation', desc: 'Our construction crew handles all grading and drainage to build a perfect foundation.' },
              { name: '3. Turf Installation', desc: 'Our expert team professionally installs your new turf, seaming and securing it for a flawless look.' },
              { name: '4. Final Walkthrough', desc: 'We review the project with you, explain care, and ensure you are 100% satisfied.' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
                  <div className="w-12 h-12 rounded-xl bg-white text-teal-600 flex items-center justify-center font-bold text-xl mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.name}</h3>
                  <p className="text-teal-100 leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>
          <div className="space-y-4">
            {lazyGrass.faqs.map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h2>
            <p className="text-xl text-gray-600">Ready for a low-maintenance, beautiful lawn? Let's get started!</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                  placeholder="(678) 234-1734"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                >
                  <option value="">Select a service</option>
                  {lazyGrass.services.map(s => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition font-semibold text-lg"
                >
                  Send Request
                </button>
                <a href={lazyGrass.phoneHref} className="text-teal-600 font-semibold hover:text-teal-700 transition">
                  Prefer to call? {lazyGrass.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img src="/lazy-grass/logo/logo-on-dark.webp" alt={`${lazyGrass.name} logo`} className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Transforming North Atlanta lawns with premium artificial turf since 2018. Family-owned, licensed, and built on excellence.
              </p>
              <div className="flex gap-3">
                {['Licensed', 'Insured', 'Family-Owned'].map((badge, idx) => (
                  <div key={idx} className="px-3 py-1 bg-teal-500/20 rounded-lg text-teal-300 text-xs font-semibold">
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {lazyGrass.services.map(s => (
                  <li key={s.slug}>
                    <a href="#services" className="text-gray-400 hover:text-teal-400 transition">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-bold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                {[ 'Sandy Springs, GA','Woodstock, GA', 'Marietta, GA', 'Roswell, GA', 'Alpharetta, GA', 'Canton, GA'].map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a href={lazyGrass.phoneHref} className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition">
                  <Phone className="w-5 h-5" />
                  {lazyGrass.phone}
                </a>
                <a href={`mailto:${lazyGrass.email}`} className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition break-all">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {lazyGrass.email}
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Serving North Atlanta & Surrounding Areas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {lazyGrass.name}. All rights reserved. | Licensed & Insured Artificial Turf Installer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}