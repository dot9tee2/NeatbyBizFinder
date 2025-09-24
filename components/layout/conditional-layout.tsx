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
  
  if (isBusinessPage) {
    // For business pages, only render the children without main header/footer
    return <>{children}</>;
  }
  
  // For all other pages, render with main header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
