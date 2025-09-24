# Business Landing Pages

This directory contains manual landing pages for businesses. Each business gets its own folder with customizable pages.

## 📁 Structure

```
app/businesses/
├── garden-bistro/           # Business folder (use kebab-case)
│   ├── page.tsx            # Main business page
│   ├── downtown/           # Location-specific page
│   │   └── page.tsx
│   └── marina/             # Another location
│       └── page.tsx
├── techfix-pro/            # Another business
│   └── page.tsx
├── admin/                  # Admin interface
│   └── page.tsx
└── sitemap.xml/            # Auto-generated sitemap
    └── route.ts
```

## 🚀 How to Add a New Business

### 1. Create Business Folder
Create a new folder with your business slug (kebab-case):
```bash
mkdir app/businesses/my-business-name
```

### 2. Create Main Business Page
Create `app/businesses/my-business-name/page.tsx`:

```tsx
import { Metadata } from 'next';
import Script from 'next/script';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import BusinessHero from '@/components/business-landing/business-hero';
import BusinessContact from '@/components/business-landing/business-contact';
import BusinessHours from '@/components/business-landing/business-hours';
// ... other imports

export const metadata: Metadata = {
  title: 'My Business Name - Category | NearbyBizFinder',
  description: 'Your business description here.',
  alternates: { 
    canonical: '/businesses/my-business-name/',
  },
  openGraph: {
    title: 'My Business Name',
    description: 'Your business description here.',
    images: ['your-featured-image-url'],
  },
};

export default function MyBusinessPage() {
  const businessData = {
    name: 'My Business Name',
    category: 'Your Category',
    rating: 4.5,
    reviewCount: 100,
    priceRange: '$$',
    address: '123 Your Street',
    city: 'Your City',
    state: 'CA',
    zipCode: '12345',
    phone: '(555) 123-4567',
    website: 'https://yourwebsite.com',
    email: 'info@yourbusiness.com',
    featuredImage: 'https://your-image-url.com/image.jpg',
    description: 'Your business description here.',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    amenities: ['Feature 1', 'Feature 2', 'Feature 3'],
    images: [
      'https://your-image-url.com/image1.jpg',
      'https://your-image-url.com/image2.jpg',
    ],
  };

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessData.name,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/my-business-name/`,
    image: businessData.featuredImage,
    priceRange: businessData.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address,
      addressLocality: businessData.city,
      addressRegion: businessData.state,
      postalCode: businessData.zipCode,
      addressCountry: 'US',
    },
    telephone: businessData.phone,
    email: businessData.email,
    url: businessData.website,
    openingHoursSpecification: Object.entries(businessData.hours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours.split(' - ')[0],
      closes: hours.split(' - ')[1],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating,
      reviewCount: businessData.reviewCount,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Header */}
      <BusinessHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
      />

      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <BusinessHero
        name={businessData.name}
        category={businessData.category}
        rating={businessData.rating}
        reviewCount={businessData.reviewCount}
        priceRange={businessData.priceRange}
        address={businessData.address}
        city={businessData.city}
        state={businessData.state}
        zipCode={businessData.zipCode}
        phone={businessData.phone}
        website={businessData.website}
        featuredImage={businessData.featuredImage}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Your custom content here */}
          </div>
          <div className="space-y-8">
            <BusinessContact
              address={businessData.address}
              city={businessData.city}
              state={businessData.state}
              zipCode={businessData.zipCode}
              phone={businessData.phone}
              website={businessData.website}
              email={businessData.email}
            />
            <BusinessHours hours={businessData.hours} />
          </div>
        </div>
      </div>

      {/* Business Footer */}
      <BusinessFooter
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessAddress={businessData.address}
        businessCity={businessData.city}
        businessState={businessData.state}
        businessZipCode={businessData.zipCode}
        businessRating={businessData.rating}
        businessReviewCount={businessData.reviewCount}
        serviceAreas={businessData.serviceAreas}
      />
    </div>
  );
}
```

### 3. Add Location Pages (Optional)
If your business has multiple locations, create subfolders:

```bash
mkdir app/businesses/my-business-name/location-name
```

Create `app/businesses/my-business-name/location-name/page.tsx` with location-specific data.

### 4. Update Data File (Optional)
Add your business data to `lib/business-landing-data.ts` for centralized management.

## 🎨 Available Components

### BusinessHeader
Dedicated header component for business landing pages with:
- Business logo and name display
- Contact information (phone, email, website)
- Call-to-action button
- Mobile-responsive design
- Sticky positioning

### BusinessFooter
Dedicated footer component for business landing pages with:
- Business information and branding
- Contact details and service areas
- Quick links to main website
- Rating and review display
- Professional styling

### BusinessHero
Hero section with business info, rating, and call-to-action buttons.

### BusinessContact
Contact information card with address, phone, email, and website.

### BusinessHours
Hours of operation display.

### BusinessGallery
Photo gallery component.

### BusinessAmenities
Amenities and features display.

### BusinessReviews
Reviews and ratings display.

## 📊 SEO Features

- **Structured Data**: Automatic JSON-LD generation for search engines
- **Meta Tags**: Customizable title, description, and Open Graph tags
- **Canonical URLs**: Proper canonical URL structure
- **Sitemap**: Auto-generated sitemap at `/businesses/sitemap.xml`

## 🔧 Admin Interface

Visit `/businesses/admin/` to:
- View all business landing pages
- See quick stats
- Access management tools
- Get instructions for adding new businesses

## 📝 Best Practices

1. **Use kebab-case** for folder names (e.g., `my-business-name`)
2. **Optimize images** for web (WebP format recommended)
3. **Write compelling descriptions** for better SEO
4. **Keep data consistent** across all pages
5. **Test all links** before going live
6. **Update structured data** when business info changes

## 🚀 URL Structure

- Main business page: `/businesses/business-name/`
- Location page: `/businesses/business-name/location-name/`
- Admin: `/businesses/admin/`
- Sitemap: `/businesses/sitemap.xml`

## 📱 Mobile Responsive

All components are mobile-responsive and follow modern web standards.
