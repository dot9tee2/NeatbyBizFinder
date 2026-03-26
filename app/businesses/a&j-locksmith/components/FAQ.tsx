'use client'

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    {
        question: "How fast can a locksmith reach me in Wichita, KS?",
        answer: "A&J Locksmith maintains technicians stationed across Wichita and surrounding areas including Derby, Andover, Maize, and Goddard. Our average response time is 14–20 minutes for emergency calls anywhere within our 60-mile service radius. We operate 24 hours a day, 7 days a week — including weekends and holidays."
    },
    {
        question: "Do you service car lockouts in Wichita?",
        answer: "Yes. Automotive lockouts are one of our most common calls. We handle all makes and models — domestic and foreign — using non-destructive entry methods so there's no damage to your vehicle. We can also replace transponder keys and program key fobs on-site, often at a fraction of what a dealership charges."
    },
    {
        question: "How much does a locksmith cost in Wichita, KS?",
        answer: "Pricing depends on the service needed, time of day, and complexity. We offer upfront, transparent quotes before any work begins — no hidden fees. Emergency and after-hours calls may carry a service call fee. We are competitively priced against other Wichita locksmiths and always tell you the cost before we start."
    },
    {
        question: "Are you licensed and insured in Kansas?",
        answer: "Yes. A&J Locksmith is fully licensed, bonded, and insured to operate in the state of Kansas. Our technicians are background-checked and trained in both traditional and modern lock and key systems. You can trust us to work on your home, vehicle, or business."
    },
    {
        question: "What areas around Wichita do you serve?",
        answer: "We serve all of Wichita and surrounding communities within a 60-mile radius. This includes Derby, Andover, Maize, Goddard, Haysville, Valley Center, Newton, El Dorado, and more. If you're not sure whether we cover your location, just call us at (316) 869-3892."
    },
    {
        question: "Should I rekey or replace my locks after moving into a new home?",
        answer: "We always recommend rekeying your locks when moving into a new home in Wichita. You can never be certain how many copies of the old keys exist. Rekeying is faster and more affordable than full lock replacement and gives you complete control over who has access. We can typically complete a full home rekey in under an hour."
    },
    {
        question: "Can you make a new car key if I've lost the original?",
        answer: "Yes. Even without the original key, our automotive locksmiths can cut and program a new key for most vehicle makes and models. This includes transponder keys and smart key fobs. We can handle this on-site at your location — no need to tow your car to a dealership."
    },
    {
        question: "Do you offer commercial locksmith services in Wichita?",
        answer: "Absolutely. We provide a full range of commercial locksmith services for Wichita businesses including master key systems, access control installation, exit device installation, high-security lock upgrades, and commercial rekeying. We work with offices, retail stores, warehouses, and property management companies throughout the Wichita metro."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll('.faq-item')
        if (!items?.length) return

        const ctx = gsap.context(() => {
            gsap.set(items, { autoAlpha: 0, y: 30 })
            gsap.to(items, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="faq"
            className="py-24 px-6 md:px-20 relative z-10 bg-[#080a0e]"
            aria-label="Frequently asked questions — locksmith Wichita KS"
        >
            {/* Schema markup for FAQ rich results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#f7be32] text-sm font-bold tracking-[0.3em] uppercase mb-3">Got Questions?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-[#f7be32]">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything Wichita residents ask about our locksmith services, response times, and pricing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item rounded-2xl border border-[#f7be32]/20 bg-[#f7be32]/5 overflow-hidden transition-all duration-300 hover:border-[#f7be32]/40"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`text-[#f7be32] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                            >
                                <p className="text-gray-300 leading-relaxed px-6">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">Still have a question? Call us anytime.</p>
                    <a
                        href="tel:3168693892"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#f7be32] hover:bg-[#d9a528] text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(247,190,50,0.3)]"
                    >
                        Call (316) 869-3892
                    </a>
                </div>
            </div>
        </section>
    )
}
