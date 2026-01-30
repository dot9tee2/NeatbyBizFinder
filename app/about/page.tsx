import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Target, ArrowRight, CheckCircle, Trophy, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About NearbyBizFinder - Connecting You with Local Experts',
  description:
    'NearbyBizFinder is the trusted platform for discovering verified local businesses. Learn about our mission to empower communities and qualified professionals.',
  robots: 'index, follow',
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/about/',
    title: 'About NearbyBizFinder - Empowering Local Communities',
    description: 'Connecting you with the best local businesses across the U.S.',
    images: [{ url: '/og-about.png' }], // Replace with generated image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NearbyBizFinder',
    description: 'Connecting you with the best local businesses across the U.S.',
    images: ['/logo.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="ld-json-aboutpage" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About NearbyBizFinder',
          url: 'https://nearbybizfinder.com/about/',
          mainEntity: {
            '@type': 'Organization',
            name: 'NearbyBizFinder',
            logo: 'https://nearbybizfinder.com/logo.png',
            sameAs: ['https://nearbybizfinder.com']
          }
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span>Driven by Community</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Empowering Local <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Connections</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We believe that finding a trusted professional for your home or business shouldn't be a gamble.
            We're building the most reliable directory for local excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-500 font-medium">Active Businesses</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-500 font-medium">Monthly Visitors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500 font-medium">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-500 font-medium">Support Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Do It</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission is simple: to create a transparent, efficient marketplace where quality meets need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center pb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  We verify business details so you don't have to. Every listing is checked for accuracy and legitimacy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center pb-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We champion small businesses. They are the heartbeat of our neighborhoods and deserve to be seen.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-8 text-center pb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  No more endless scrolling. Our smart categorization helps you find the exact service you need in seconds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to find the right professional?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Browse our curated list of top-rated local businesses and get your project started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12">
                    Start Browsing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12">
                    Add Your Business
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
