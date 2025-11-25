'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ReactNode } from 'react';

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if we're on a business page
  const isBusinessPage = pathname.startsWith('/businesses/');
  // Exclude Sanity Studio from site chrome
  const isStudioPage = pathname.startsWith('/studio');
  
  if (isBusinessPage || isStudioPage) {
    // For business pages, only render the children without main header/footer
    return <>{children}</>;
  }
  
  // For all other pages, render with main header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
