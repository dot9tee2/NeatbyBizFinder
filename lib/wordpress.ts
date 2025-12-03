import * as cheerio from 'cheerio';

const WP_API_URL = process.env.WORDPRESS_API_URL;
// Derived base URL (remove /wp-json/...) for frontend fetching
// Assumption: API URL is like https://site.com/wp-json/wp/v2
// So we split by /wp-json/ to get the base.
const WP_BASE_URL = WP_API_URL ? WP_API_URL.split('/wp-json')[0] : '';

export interface WordPressPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
  yoast_head_json?: {
    title: string;
    description: string;
    og_title: string;
    og_description: string;
    og_image: Array<{ url: string; width: number; height: number; type: string; alt?: string }>;
    og_locale: string;
    og_type: string;
    twitter_card: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    canonical: string;
    robots: {
      index: string;
      follow: string;
    };
  };
  elementor_assets?: string[];
}

export interface ParsedWordPressPage {
  head: string;
  body: string;
  bodyClass: string;
}

export async function getWordPressPage(slug: string): Promise<WordPressPage | null> {
  if (!WP_API_URL) {
    console.warn('WORDPRESS_API_URL is not defined in environment variables');
    return null;
  }

  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch from WordPress: ${res.status} ${res.statusText}`);
      return null;
    }

    const pages = await res.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress page:', error);
    return null;
  }
}

export async function getWordPressFullHtml(slug: string): Promise<ParsedWordPressPage | null> {
  if (!WP_BASE_URL) {
    console.warn('WORDPRESS_API_URL not defined, cannot derive base URL');
    return null;
  }

  // Construct the frontend URL
  // Note: This assumes standard permalinks structure (domain.com/slug/)
  // If your WP site uses ?p=123, this needs adjustment, but /slug/ is standard for pretty permalinks.
  const url = `${WP_BASE_URL}/${slug}/`;

  try {
    const res = await fetch(url, {
      // We revalidate every minute
      next: { revalidate: 60 },
      headers: {
        'User-Agent': 'Next.js Proxy',
      },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch full HTML: ${res.status}`);
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    // 1. Extract Head content
    // We want styles and scripts, but we must exclude <title> (Next.js handles it)
    // and meta tags that might duplicate what Next.js generates.
    // BUT for full fidelity, we might want to keep them if we disable Next.js metadata.
    // Let's grab all styles, links (css), and scripts.
    
    // Remove standard WP things that might conflict
    $('title').remove();
    $('meta[charset]').remove();
    $('meta[name="viewport"]').remove();
    
    // Fix relative URLs to absolute
    $('link[href^="/"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href) $(el).attr('href', `${WP_BASE_URL}${href}`);
    });
    $('script[src^="/"]').each((_, el) => {
      const src = $(el).attr('src');
      if (src) $(el).attr('src', `${WP_BASE_URL}${src}`);
    });
    $('img[src^="/"]').each((_, el) => {
      const src = $(el).attr('src');
      if (src) $(el).attr('src', `${WP_BASE_URL}${src}`);
    });

    const headContent = $('head').html() || '';
    
    // 2. Extract Body content
    // We want the inner HTML of body
    const bodyContent = $('body').html() || '';
    const bodyClass = $('body').attr('class') || '';

    return {
      head: headContent,
      body: bodyContent,
      bodyClass
    };

  } catch (error) {
    console.error('Error fetching full HTML:', error);
    return null;
  }
}
