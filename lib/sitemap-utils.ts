// Sitemap management utilities

export interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SitemapStats {
  totalUrls: number;
  businessPages: number;
  locationPages: number;
  lastUpdated: string;
}

/**
 * Generate sitemap XML from URL array
 */
export function generateSitemapXml(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;
}

/**
 * Generate sitemap index XML
 */
export function generateSitemapIndexXml(sitemaps: Array<{loc: string; lastmod: string}>): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
}

/**
 * Validate sitemap URL
 */
export function validateSitemapUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get sitemap statistics
 */
export function getSitemapStats(urls: SitemapUrl[]): SitemapStats {
  const businessPages = urls.filter(url => url.url.includes('/businesses/') && !url.url.includes('/businesses/') || url.url.split('/').length === 5).length;
  const locationPages = urls.filter(url => url.url.includes('/businesses/') && url.url.split('/').length === 6).length;
  
  return {
    totalUrls: urls.length,
    businessPages,
    locationPages,
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Sort URLs by priority (highest first)
 */
export function sortUrlsByPriority(urls: SitemapUrl[]): SitemapUrl[] {
  return urls.sort((a, b) => b.priority - a.priority);
}

/**
 * Filter URLs by change frequency
 */
export function filterUrlsByChangeFrequency(urls: SitemapUrl[], frequency: SitemapUrl['changeFrequency']): SitemapUrl[] {
  return urls.filter(url => url.changeFrequency === frequency);
}

/**
 * Get URLs that need updating (older than specified days)
 */
export function getUrlsNeedingUpdate(urls: SitemapUrl[], daysOld: number = 30): SitemapUrl[] {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysOld);
  
  return urls.filter(url => new Date(url.lastModified) < cutoffDate);
}

/**
 * Generate sitemap for specific business
 */
export function generateBusinessSitemap(businessSlug: string, locations: string[] = []): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString();
  
  // Main business page
  urls.push({
    url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  });
  
  // Location pages
  locations.forEach(locationSlug => {
    urls.push({
      url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });
  
  return urls;
}

/**
 * Check if sitemap is valid XML
 */
export function validateSitemapXml(xml: string): boolean {
  try {
    // Basic XML validation
    if (!xml.includes('<?xml version="1.0" encoding="UTF-8"?>')) return false;
    if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) return false;
    if (!xml.includes('</urlset>')) return false;
    
    // Check for required URL elements
    const urlCount = (xml.match(/<url>/g) || []).length;
    const locCount = (xml.match(/<loc>/g) || []).length;
    const lastmodCount = (xml.match(/<lastmod>/g) || []).length;
    const changefreqCount = (xml.match(/<changefreq>/g) || []).length;
    const priorityCount = (xml.match(/<priority>/g) || []).length;
    
    return urlCount === locCount && urlCount === lastmodCount && 
           urlCount === changefreqCount && urlCount === priorityCount;
  } catch {
    return false;
  }
}

/**
 * Get sitemap size in bytes
 */
export function getSitemapSize(xml: string): number {
  return new Blob([xml]).size;
}

/**
 * Check if sitemap exceeds size limits (50MB for XML, 50,000 URLs)
 */
export function checkSitemapLimits(urls: SitemapUrl[]): {withinLimits: boolean; issues: string[]} {
  const issues: string[] = [];
  
  if (urls.length > 50000) {
    issues.push(`Too many URLs: ${urls.length} (limit: 50,000)`);
  }
  
  const xml = generateSitemapXml(urls);
  const sizeInMB = getSitemapSize(xml) / (1024 * 1024);
  
  if (sizeInMB > 50) {
    issues.push(`Sitemap too large: ${sizeInMB.toFixed(2)}MB (limit: 50MB)`);
  }
  
  return {
    withinLimits: issues.length === 0,
    issues,
  };
}
