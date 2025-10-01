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

/**
 * Auto-discover business pages from file system
 * This function should be used in a build-time context or API route
 * Falls back to static data for static export builds
 */
export async function discoverBusinessPages(): Promise<{businesses: string[], locations: Record<string, string[]>}> {
  // Check if we're in a static export build or serverless environment
  const isStaticBuild = process.env.NODE_ENV === 'production' && !process.env.VERCEL && !process.env.NETLIFY;
  
  if (isStaticBuild) {
    // Fallback to static data for static exports
    console.warn('Using static data fallback for sitemap generation in static build');
    return getStaticBusinessData();
  }
  
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const businessesDir = path.join(process.cwd(), 'app', 'businesses');
    const entries = await fs.readdir(businessesDir, { withFileTypes: true });
    
    const businesses: string[] = [];
    const locations: Record<string, string[]> = {};
    
    for (const entry of entries) {
      if (entry.isDirectory() && !['admin', 'sitemap.xml'].includes(entry.name)) {
        const businessSlug = entry.name;
        businesses.push(businessSlug);
        
        // Check for location subdirectories
        const businessPath = path.join(businessesDir, businessSlug);
        const subEntries = await fs.readdir(businessPath, { withFileTypes: true });
        
        const businessLocations = subEntries
          .filter(subEntry => subEntry.isDirectory() && subEntry.name !== 'README.md')
          .map(subEntry => subEntry.name);
        
        if (businessLocations.length > 0) {
          locations[businessSlug] = businessLocations;
        }
      }
    }
    
    return { businesses, locations };
  } catch (error) {
    console.error('Error discovering business pages, falling back to static data:', error);
    return getStaticBusinessData();
  }
}

/**
 * Static fallback data for when file system access is not available
 */
function getStaticBusinessData(): {businesses: string[], locations: Record<string, string[]>} {
  return {
    businesses: [
      'clear-choice-cleaning',
      'drywall-painting-pro', 
      'superior-electric-service'
    ],
    locations: {
      'drywall-painting-pro': ['cedar-park', 'georgetown'],
      'superior-electric-service': ['prospect', 'hill-view']
    }
  };
}

/**
 * Generate business sitemap from file system discovery
 * This is a more reliable approach than relying on manual data files
 */
export async function generateBusinessSitemapFromFS(): Promise<SitemapUrl[]> {
  const { businesses, locations } = await discoverBusinessPages();
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString();
  
  for (const businessSlug of businesses) {
    // Main business page
    urls.push({
      url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
    
    // Location pages
    const businessLocations = locations[businessSlug] || [];
    for (const locationSlug of businessLocations) {
      urls.push({
        url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }
  
  return urls;
}