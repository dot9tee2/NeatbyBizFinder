import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-white/10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                {/* Overlays for depth and readability */}
                <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900"></div>
            </div>

            {/* Animated Glow Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">Connecting Communities</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-display leading-tight">
                        Discover Local <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Excellence</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Your trusted directory for the best home services, contractors, and hidden gems in your neighborhood.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/businesses/american-gutter-guards" className="w-full sm:w-auto">
                            <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 w-full sm:w-auto text-lg">
                                Browse Professionals
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto text-lg transition-all">
                            Read Our Blog
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                            Verified Businesses
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                            Real Reviews
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                            Local Experts
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
