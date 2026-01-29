import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nearbybizfinder.com';
    const businessesDir = path.join(process.cwd(), 'app/businesses');

    // Read business directories from the filesystem
    // This ensures we only list pages that actually exist as static routes
    let businesses: string[] = [];

    try {
        const entries = fs.readdirSync(businessesDir, { withFileTypes: true });
        businesses = entries
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    } catch (error) {
        console.error('Error reading businesses directory:', error);
    }

    return businesses.map((slug) => ({
        url: `${baseUrl}/businesses/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));
}
