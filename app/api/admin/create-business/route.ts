import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

function escapeTemplateLiteral(s: string): string {
  return s.replace(/`/g, '\\`');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name, slug, category, description, address, city, state, zipCode,
      phone, website, email, featuredImage, amenities = [], locations = [],
      locationsDetailed = []
    } = body || {};
    if (!name || !slug || !description || !address || !city || !state || !zipCode || !phone || !featuredImage) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const fs = await import('fs/promises');
    const path = await import('path');
    const baseDir = path.join(process.cwd(), 'app', 'businesses', slug);
    await fs.mkdir(baseDir, { recursive: true });

    const pageContent = `import BusinessHeader from '@/components/business-landing/business-header';
import BusinessHero from '@/components/business-landing/business-hero';
import BusinessAmenities from '@/components/business-landing/business-amenities';
import BusinessHours from '@/components/business-landing/business-hours';
import BusinessContact from '@/components/business-landing/business-contact';
import BusinessFooter from '@/components/business-landing/business-footer';

export default function Page() {
  const data = {
    name: '${escapeTemplateLiteral(name)}',
    category: ${category ? `'${escapeTemplateLiteral(category)}'` : 'undefined'},
    rating: 4.8,
    reviewCount: 0,
    priceRange: '$$',
    address: '${escapeTemplateLiteral(address)}',
    city: '${escapeTemplateLiteral(city)}',
    state: '${escapeTemplateLiteral(state)}',
    zipCode: '${escapeTemplateLiteral(zipCode)}',
    phone: '${escapeTemplateLiteral(phone)}',
    website: ${website ? `'${escapeTemplateLiteral(website)}'` : 'undefined'},
    email: ${email ? `'${escapeTemplateLiteral(email)}'` : 'undefined'},
    featuredImage: '${escapeTemplateLiteral(featuredImage)}',
    description: 
` + '`' + `${escapeTemplateLiteral(description)}` + '`' + `,
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    amenities: ${JSON.stringify(amenities)},
  };

  return (
    <div className="min-h-screen bg-white">
      <BusinessHeader 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessCategory={data.category}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
        <BusinessHero 
          name={data.name}
          category={data.category}
          rating={data.rating}
          reviewCount={data.reviewCount}
          priceRange={data.priceRange}
          address={data.address}
          city={data.city}
          state={data.state}
          zipCode={data.zipCode}
          phone={data.phone}
          website={data.website}
          featuredImage={data.featuredImage}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="prose max-w-none">
              <h2>About {data.name}</h2>
              <p>{data.description}</p>
            </section>
            <BusinessAmenities amenities={data.amenities} />
          </div>
          <div className="space-y-6">
            <BusinessHours hours={data.hours} />
            <BusinessContact 
              address={data.address}
              city={data.city}
              state={data.state}
              zipCode={data.zipCode}
              phone={data.phone}
              website={data.website}
              email={data.email}
            />
          </div>
        </div>
      </main>
      <BusinessFooter 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessAddress={data.address}
        businessCity={data.city}
        businessState={data.state}
        businessZipCode={data.zipCode}
        topStripe
      />
    </div>
  );
}
`;

    await fs.writeFile(path.join(baseDir, 'page.tsx'), pageContent, 'utf8');

    // Generate location pages if provided (simple slug list)
    if (Array.isArray(locations) && locations.length > 0) {
      const normalizeSlug = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      for (const rawLoc of locations) {
        const loc = normalizeSlug(String(rawLoc || ''));
        if (!loc) continue;
        const displayName = loc.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const locDir = path.join(baseDir, loc);
        await fs.mkdir(locDir, { recursive: true });
        const locPage = `import BusinessHeader from '@/components/business-landing/business-header';
import BusinessHero from '@/components/business-landing/business-hero';
import BusinessAmenities from '@/components/business-landing/business-amenities';
import BusinessHours from '@/components/business-landing/business-hours';
import BusinessContact from '@/components/business-landing/business-contact';
import BusinessFooter from '@/components/business-landing/business-footer';

export default function Page() {
  const data = {
    name: '${escapeTemplateLiteral(name)}',
    category: ${category ? `'${escapeTemplateLiteral(category)}'` : 'undefined'},
    rating: 4.8,
    reviewCount: 0,
    priceRange: '$$',
    address: '${escapeTemplateLiteral(address)}',
    city: '${escapeTemplateLiteral(city)}',
    state: '${escapeTemplateLiteral(state)}',
    zipCode: '${escapeTemplateLiteral(zipCode)}',
    phone: '${escapeTemplateLiteral(phone)}',
    website: ${website ? `'${escapeTemplateLiteral(website)}'` : 'undefined'},
    email: ${email ? `'${escapeTemplateLiteral(email)}'` : 'undefined'},
    featuredImage: '${escapeTemplateLiteral(featuredImage)}',
    description: 
` + '`' + `${escapeTemplateLiteral(description)}` + '`' + `,
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    amenities: ${JSON.stringify(amenities)},
  };

  return (
    <div className="min-h-screen bg-white">
      <BusinessHeader 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessCategory={data.category}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
        <BusinessHero 
          name={data.name}
          category={data.category}
          rating={data.rating}
          reviewCount={data.reviewCount}
          priceRange={data.priceRange}
          address={data.address}
          city={data.city}
          state={data.state}
          zipCode={data.zipCode}
          phone={data.phone}
          website={data.website}
          featuredImage={data.featuredImage}
          locationName={'${displayName}'}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="prose max-w-none">
              <h2>About {data.name}</h2>
              <p>{data.description}</p>
            </section>
            <BusinessAmenities amenities={data.amenities} />
          </div>
          <div className="space-y-6">
            <BusinessHours hours={data.hours} />
            <BusinessContact 
              address={data.address}
              city={data.city}
              state={data.state}
              zipCode={data.zipCode}
              phone={data.phone}
              website={data.website}
              email={data.email}
            />
          </div>
        </div>
      </main>
      <BusinessFooter 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessAddress={data.address}
        businessCity={data.city}
        businessState={data.state}
        businessZipCode={data.zipCode}
        topStripe
      />
    </div>
  );
}
`;
        await fs.writeFile(path.join(locDir, 'page.tsx'), locPage, 'utf8');
      }
    }

    // Generate location pages from detailed entries
    if (Array.isArray(locationsDetailed) && locationsDetailed.length > 0) {
      const normalizeSlug = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      for (const d of locationsDetailed as Array<any>) {
        const loc = normalizeSlug(String((d.slug || d.city || '')));
        if (!loc) continue;
        const displayName = (d.city && d.city.trim()) ? d.city.trim() : loc.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const locDir = path.join(baseDir, loc);
        await fs.mkdir(locDir, { recursive: true });
        const locPage = `import BusinessHeader from '@/components/business-landing/business-header';
import BusinessHero from '@/components/business-landing/business-hero';
import BusinessAmenities from '@/components/business-landing/business-amenities';
import BusinessHours from '@/components/business-landing/business-hours';
import BusinessContact from '@/components/business-landing/business-contact';
import BusinessFooter from '@/components/business-landing/business-footer';

export default function Page() {
  const data = {
    name: '${escapeTemplateLiteral(name)}',
    category: ${category ? `'${escapeTemplateLiteral(category)}'` : 'undefined'},
    rating: 4.8,
    reviewCount: 0,
    priceRange: '$$',
    address: '${escapeTemplateLiteral(d.address || address)}',
    city: '${escapeTemplateLiteral(d.city || city)}',
    state: '${escapeTemplateLiteral(d.state || state)}',
    zipCode: '${escapeTemplateLiteral(d.zipCode || zipCode)}',
    phone: '${escapeTemplateLiteral(d.phone || phone)}',
    website: ${(d.website ? `'${escapeTemplateLiteral(d.website)}'` : (website ? `'${escapeTemplateLiteral(website)}'` : 'undefined'))},
    email: ${(d.email ? `'${escapeTemplateLiteral(d.email)}'` : (email ? `'${escapeTemplateLiteral(email)}'` : 'undefined'))},
    featuredImage: '${escapeTemplateLiteral(d.featuredImage || featuredImage)}',
    description: 
` + '`' + `${escapeTemplateLiteral(description)}` + '`' + `,
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    amenities: ${JSON.stringify(amenities)},
  };

  return (
    <div className="min-h-screen bg-white">
      <BusinessHeader 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessCategory={data.category}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
        <BusinessHero 
          name={data.name}
          category={data.category}
          rating={data.rating}
          reviewCount={data.reviewCount}
          priceRange={data.priceRange}
          address={data.address}
          city={data.city}
          state={data.state}
          zipCode={data.zipCode}
          phone={data.phone}
          website={data.website}
          featuredImage={data.featuredImage}
          locationName={'${escapeTemplateLiteral(displayName)}'}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="prose max-w-none">
              <h2>About {data.name}</h2>
              <p>{data.description}</p>
            </section>
            <BusinessAmenities amenities={data.amenities} />
          </div>
          <div className="space-y-6">
            <BusinessHours hours={data.hours} />
            <BusinessContact 
              address={data.address}
              city={data.city}
              state={data.state}
              zipCode={data.zipCode}
              phone={data.phone}
              website={data.website}
              email={data.email}
            />
          </div>
        </div>
      </main>
      <BusinessFooter 
        businessName={data.name}
        businessPhone={data.phone}
        businessEmail={data.email || ''}
        businessWebsite={data.website || ''}
        businessAddress={data.address}
        businessCity={data.city}
        businessState={data.state}
        businessZipCode={data.zipCode}
        topStripe
      />
    </div>
  );
}
`;
        await fs.writeFile(path.join(locDir, 'page.tsx'), locPage, 'utf8');
      }
    }

    try {
      revalidatePath('/businesses/sitemap.xml');
      revalidatePath('/sitemap-index.xml');
      revalidatePath('/sitemap.xml');
      revalidatePath(`/businesses/${slug}/`);
      if (Array.isArray(locations)) {
        for (const rawLoc of locations) {
          const loc = String(rawLoc || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          if (loc) revalidatePath(`/businesses/${slug}/${loc}/`);
        }
      }
      if (Array.isArray(locationsDetailed)) {
        for (const d of locationsDetailed as Array<any>) {
          const loc = String((d.slug || d.city || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          if (loc) revalidatePath(`/businesses/${slug}/${loc}/`);
        }
      }
      try { revalidateTag('sitemap'); } catch {}
    } catch {}

    return NextResponse.json({ ok: true, slug });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Failed to create' }, { status: 500 });
  }
}


