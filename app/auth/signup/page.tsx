import type { Metadata } from 'next';
import SignUpContent from './signup-content';

export const metadata: Metadata = {
  title: 'Create Account | NearbyBizFinder',
  description: 'Sign up to save favorite businesses, add your listings, and explore local spots.',
  robots: 'noindex, follow',
  alternates: { canonical: '/auth/signup/' },
};

export default function SignUpPage() {
  return <SignUpContent />;
}