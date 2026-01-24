'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 text-center mb-12">
                        Get answers to common questions about gutter guards, cleaning, and installation in Chesapeake, VA.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-emerald-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                                    aria-expanded={openFAQ === index}
                                >
                                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    {openFAQ === index ? (
                                        <Minus className="h-5 w-5 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                                    )}
                                </button>

                                {openFAQ === index && (
                                    <div className="px-6 pb-6 bg-slate-50">
                                        <p className="text-slate-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
