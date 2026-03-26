'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const areas = [
    { name: 'Wichita', note: 'Primary Service Area', highlight: true },
    { name: 'Derby', note: '~15 min south', highlight: false },
    { name: 'Andover', note: '~20 min east', highlight: false },
    { name: 'Maize', note: '~15 min northwest', highlight: false },
    { name: 'Goddard', note: '~20 min west', highlight: false },
    { name: 'Haysville', note: '~15 min south', highlight: false },
    { name: 'Valley Center', note: '~20 min north', highlight: false },
    { name: 'Newton', note: '~30 min north', highlight: false },
    { name: 'El Dorado', note: '~35 min east', highlight: false },
    { name: 'Augusta', note: '~30 min east', highlight: false },
    { name: 'Mulvane', note: '~25 min south', highlight: false },
    { name: 'Rose Hill', note: '~20 min southeast', highlight: false },
]

export default function ServiceAreas() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('.area-card')
        if (!cards?.length) return

        const ctx = gsap.context(() => {
            gsap.set(cards, { autoAlpha: 0, y: 20 })
            gsap.to(cards, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="service-areas"
            className="py-24 px-6 md:px-20 relative z-10"
            aria-label="Locksmith service areas near Wichita KS"
        >
            {/* Local Business Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "A&J Mobile Locksmith",
                        "image": "https://nearbybizfinder.com/aj-locksmith/logo.png",
                        "@id": "https://nearbybizfinder.com/businesses/a&j-locksmith/",
                        "url": "https://nearbybizfinder.com/businesses/a&j-locksmith/",
                        "telephone": "+13168693892",
                        "priceRange": "$$",
                        "description": "A&J Locksmith provides 24/7 residential, commercial, and automotive locksmith services in Wichita, KS and surrounding areas including Derby, Andover, Maize, and Goddard.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Wichita",
                            "addressRegion": "KS",
                            "postalCode": "67202",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 37.6872,
                            "longitude": -97.3301
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "areaServed": areas.map(a => ({
                            "@type": "City",
                            "name": a.name
                        })),
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Locksmith Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Lockout Service" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Locksmith" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Locksmith" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Locksmith" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Key Replacement" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lock Rekeying" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Lock Installation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roadside Assistance" } }
                            ]
                        }
                    })
                }}
            />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-3">Where We Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Serving Wichita &amp; <span className="text-[#f7be32]">Surrounding Cities</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Our mobile units cover Wichita and every city within a 60-mile radius. Wherever you're stuck in South-Central Kansas, we're on our way.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {areas.map((area, i) => (
                        <div
                            key={i}
                            className={`area-card flex items-start gap-3 p-5 rounded-2xl border transition-all duration-300 ${
                                area.highlight
                                    ? 'bg-[#f7be32]/15 border-[#f7be32]/60 shadow-[0_0_20px_rgba(247,190,50,0.15)]'
                                    : 'bg-[#f7be32]/5 border-[#f7be32]/20 hover:border-[#f7be32]/40 hover:bg-[#f7be32]/10'
                            }`}
                        >
                            <MapPin
                                size={18}
                                className={`mt-0.5 flex-shrink-0 ${area.highlight ? 'text-[#f7be32]' : 'text-[#f7be32]/60'}`}
                            />
                            <div>
                                <p className={`font-bold ${area.highlight ? 'text-[#f7be32]' : 'text-white'}`}>
                                    {area.name}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">{area.note}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-8 text-sm">
                    Don't see your city? Call <a href="tel:3168693892" className="text-[#f7be32] hover:underline">(316) 869-3892</a> — if you're within 60 miles of Wichita, we'll come to you.
                </p>
            </div>
        </section>
    )
}
