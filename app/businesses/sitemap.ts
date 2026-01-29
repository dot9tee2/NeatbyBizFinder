import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nearbybizfinder.com';
    const businessesDir = path.join(process.cwd(), 'app/businesses');

    // Helper to recursively find all page.tsx files
    function getRoutes(dir: string, currentSlug: string = ''): string[] {
        let routes: string[] = [];

        try {
            const entries = fs.readdirSync(dir, { withFileTypes: true });

            // Check if this directory has a page.tsx (it's a valid route)
            const hasPage = entries.some(entry => entry.name === 'types.ts' || entry.name === 'page.tsx');
            // We specifically look for page.tsx, but some maybe page.jsx or index.tsx depending on project, 
            // but here we know it is page.tsx. 
            // The previous check was just 'page.tsx'.

            // Actually, let's stick to the exact logic:
            // If we are in 'app/businesses/foo', currentSlug is 'foo'.
            // If 'app/businesses/foo/page.tsx' exists, we add 'foo'.

            if (currentSlug && entries.some(e => e.name === 'page.tsx')) {
                routes.push(currentSlug);
            }

            // Recurse into subdirectories
            const subdirs = entries.filter(entry => entry.isDirectory());
            for (const subdir of subdirs) {
                const newSlug = currentSlug ? `${currentSlug}/${subdir.name}` : subdir.name;
                routes = [...routes, ...getRoutes(path.join(dir, subdir.name), newSlug)];
            }
        } catch (error) {
            console.error(`Error reading directory ${dir}:`, error);
        }

        return routes;
    }

    const businessSlugs = getRoutes(businessesDir);

    return businessSlugs.map((slug) => ({
        url: `${baseUrl}/businesses/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: slug.split('/').length > 1 ? 0.7 : 0.8, // Slightly lower priority for nested pages
    }));
}
