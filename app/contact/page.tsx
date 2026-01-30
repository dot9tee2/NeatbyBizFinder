import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | NearbyBizFinder - Get in Touch',
  description:
    'Contact NearbyBizFinder for support, feedback, and partnership inquiries. Reach out to our team and we will respond promptly.',
  robots: 'index, follow',
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/contact/',
    title: 'Contact NearbyBizFinder',
    description: 'Get in touch with the NearbyBizFinder team for support and feedback.',
    images: [{ url: '/og-contact.png' }], // Replace with generated image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NearbyBizFinder',
    description: 'Get in touch with the NearbyBizFinder team for support and feedback.',
    images: ['/logo.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="ld-json-contactpage" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact NearbyBizFinder',
          url: 'https://nearbybizfinder.com/contact/',
          contactPoint: [{
            '@type': 'ContactPoint',
            email: 'info@nearbybizfinder.com',
            telephone: '+1-555-123-4567',
            contactType: 'customer support',
            areaServed: 'US',
            availableLanguage: ['English'],
          }],
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>We'd Love to Hear From You</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Questions, feedback, or partnership ideas? We're here to help and respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:info@nearbybizfinder.com" className="text-blue-600 hover:underline">
                  info@nearbybizfinder.com
                </a>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                  (555) 123-4567
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon–Fri, 9am–5pm PT</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">Usually within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form action="mailto:info@nearbybizfinder.com" method="post" encType="text/plain" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input name="name" placeholder="Jane Doe" required className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input name="email" type="email" placeholder="you@example.com" required className="h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input name="subject" placeholder="How can we help?" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea name="message" placeholder="Write your message..." rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 rounded-lg">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Add Your Business?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our growing directory of trusted local professionals and reach more customers in your area.
          </p>
          <Link href="/">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
