import React from 'react';

// Metadata has been moved to page.tsx following Next.js App Router best practices
// for page-specific SEO. This layout now only provides a minimal wrapper.

export default function AmericanGutterGuardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
