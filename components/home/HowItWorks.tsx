import { Search, UserCheck, CalendarCheck } from 'lucide-react';

const steps = [
    {
        title: 'Search',
        description: 'Browse our extensive directory to find local professionals and businesses near you.',
        icon: Search,
    },
    {
        title: 'Connect',
        description: 'Read reviews, view profiles, and contact businesses directly to discuss your needs.',
        icon: UserCheck,
    },
    {
        title: 'Hire',
        description: 'Get quotes, book services, and get your project done with confidence.',
        icon: CalendarCheck,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Connecting with local experts is simple and secure.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center text-center relative bg-white md:bg-transparent p-4 md:p-0">
                            <div className="h-24 w-24 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center mb-6">
                                <step.icon className="h-10 w-10 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Step indicator */}
                            <div className="mt-6 inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
