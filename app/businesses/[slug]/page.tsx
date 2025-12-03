import { notFound } from 'next/navigation';
import { getWordPressPage, getWordPressFullHtml } from '@/lib/wordpress';
import type { Metadata } from 'next';

// Params are Promises in Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // We still use the API for clean metadata if available, 
  // but we could also parse it from the HTML if needed.
  // For now, let's stick to the API for metadata as it's cleaner/structured.
  const page = await getWordPressPage(slug);

  if (!page) return { title: 'Page Not Found' };

  const seo = page.yoast_head_json;

  if (seo) {
    return {
      title: seo.title || page.title.rendered,
      description: seo.description || page.excerpt?.rendered.replace(/<[^>]*>?/gm, ''),
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        images: seo.og_image?.map((img) => ({
          url: img.url,
          width: img.width,
          height: img.height,
          alt: img.alt,
        })) || [],
        locale: seo.og_locale,
        // OpenGraph type must be a specific string literal in Next.js types
        type: (seo.og_type as 'website' | 'article' | 'book' | 'profile') || 'website',
      },
      twitter: {
        card: (seo.twitter_card as 'summary' | 'summary_large_image' | 'player' | 'app') || 'summary_large_image',
        title: seo.twitter_title,
        description: seo.twitter_description,
        images: seo.twitter_image ? [seo.twitter_image] : [],
      },
      robots: {
        index: seo.robots?.index !== 'noindex',
        follow: seo.robots?.follow !== 'nofollow',
      },
      alternates: {
        canonical: seo.canonical,
      },
    };
  }

  return {
    title: page.title.rendered,
    description: page.excerpt?.rendered.replace(/<[^>]*>?/gm, '') || '',
    openGraph: {
      title: page.title.rendered,
      images: page._embedded?.['wp:featuredmedia']?.[0]?.source_url 
        ? [page._embedded['wp:featuredmedia'][0].source_url] 
        : [],
    },
  };
}

export default async function WordPressLandingPage({ params }: Props) {
  const { slug } = await params;
  
  // Try to fetch the full HTML (including scripts, styles, Elementor CSS, etc.)
  const parsed = await getWordPressFullHtml(slug);

  if (!parsed) {
    notFound();
  }

  // IMPORTANT: 
  // 1. We inject the <head> content (styles, scripts)
  // 2. We inject the <body> content
  // 3. We add the body classes from WordPress to a wrapper div
  
  return (
    <>
      {/* Inject Styles/Scripts from WordPress Head */}
      <div dangerouslySetInnerHTML={{ __html: parsed.head }} />

      {/* Inject Body Content */}
      <div 
        className={parsed.bodyClass} 
        // Basic reset to ensure WP styles take precedence
        style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}
        dangerouslySetInnerHTML={{ __html: parsed.body }}
      />
    </>
  );
}
