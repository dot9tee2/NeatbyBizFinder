#!/usr/bin/env node

/**
 * Build-time sitemap generation script
 * This ensures sitemaps are generated correctly for static exports
 */

const fs = require('fs').promises;
const path = require('path');

// Static business data - keep this in sync with actual pages
const BUSINESS_DATA = {
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

function generateSitemapXml(urls) {
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

function generateSitemapIndexXml(sitemaps) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
}

async function generateBusinessSitemap() {
  const urls = [];
  const currentDate = new Date().toISOString();
  
  // Generate business main pages
  for (const businessSlug of BUSINESS_DATA.businesses) {
    urls.push({
      url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
    
    // Generate location pages
    const locations = BUSINESS_DATA.locations[businessSlug] || [];
    for (const locationSlug of locations) {
      urls.push({
        url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }
  
  return generateSitemapXml(urls);
}

async function generateMainSitemap() {
  const currentDate = new Date().toISOString();
  
  const corePages = [
    {
      url: 'https://nearbybizfinder.com/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://nearbybizfinder.com/about/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nearbybizfinder.com/contact/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nearbybizfinder.com/search/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://nearbybizfinder.com/categories/',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://nearbybizfinder.com/privacy/',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://nearbybizfinder.com/terms/',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://nearbybizfinder.com/auth/signin/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://nearbybizfinder.com/auth/signup/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://nearbybizfinder.com/business/new/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://nearbybizfinder.com/business/claim/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://nearbybizfinder.com/business/support/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const categories = [
    'restaurants',
    'shopping', 
    'health-medical',
    'automotive',
    'beauty-spas',
    'home-services',
    'entertainment',
    'professional-services'
  ];

  const categoryPages = categories.map(category => ({
    url: `https://nearbybizfinder.com/categories/${category}/`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const allUrls = [...corePages, ...categoryPages];
  return generateSitemapXml(allUrls);
}

async function generateSitemapIndex() {
  const currentDate = new Date().toISOString();
  
  return generateSitemapIndexXml([
    {
      loc: 'https://nearbybizfinder.com/sitemap.xml',
      lastmod: currentDate,
    },
    {
      loc: 'https://nearbybizfinder.com/businesses/sitemap.xml',
      lastmod: currentDate,
    },
  ]);
}

async function main() {
  try {
    console.log('🗺️  Generating sitemaps...');
    
    // Ensure output directory exists
    const outDir = path.join(process.cwd(), 'out');
    await fs.mkdir(outDir, { recursive: true });
    
    // Generate sitemaps
    const mainSitemap = await generateMainSitemap();
    const businessSitemap = await generateBusinessSitemap();
    const sitemapIndex = await generateSitemapIndex();
    
    // Write sitemaps to out directory
    await fs.writeFile(path.join(outDir, 'sitemap.xml'), mainSitemap);
    await fs.writeFile(path.join(outDir, 'sitemap-index.xml'), sitemapIndex);
    
    // Create businesses directory and write business sitemap
    const businessesDir = path.join(outDir, 'businesses');
    await fs.mkdir(businessesDir, { recursive: true });
    await fs.writeFile(path.join(businessesDir, 'sitemap.xml'), businessSitemap);
    
    console.log('✅ Sitemaps generated successfully!');
    console.log('📁 Files created:');
    console.log('   - out/sitemap.xml');
    console.log('   - out/sitemap-index.xml');
    console.log('   - out/businesses/sitemap.xml');
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  generateMainSitemap,
  generateBusinessSitemap,
  generateSitemapIndex,
};
