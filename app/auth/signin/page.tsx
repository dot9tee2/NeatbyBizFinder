import type { Metadata } from 'next';
import { Suspense } from 'react';
import SignInContent from './signin-content';

export const metadata: Metadata = {
  title: 'Sign In | NearbyBizFinder',
  description: 'Access your NearbyBizFinder account to manage saved businesses and add your listings.',
  robots: 'noindex, follow',
  alternates: { canonical: '/auth/signin/' },
};

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
}