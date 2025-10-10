export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  featured?: boolean;
}

export const nmConcreteGalleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/nm-concrete-coating-pros/project-1.jpg',
    alt: 'Epoxy garage floor coating with metallic finish',
    title: 'Luxury Metallic Garage Floor',
    description: 'Premium metallic epoxy coating with copper and silver accents in a residential garage.',
    category: 'Residential',
    featured: true
  },
  {
    id: '2',
    src: '/images/nm-concrete-coating-pros/project-2.jpg',
    alt: 'Commercial warehouse floor coating',
    title: 'Industrial Warehouse Floor',
    description: 'Heavy-duty polyaspartic coating for high-traffic commercial warehouse.',
    category: 'Commercial',
    featured: true
  },
  {
    id: '3',
    src: '/images/nm-concrete-coating-pros/project-3.jpg',
    alt: 'Concrete polishing with mirror finish',
    title: 'Mirror Finish Polishing',
    description: 'Artisan concrete polishing achieving mirror-like finish in luxury home.',
    category: 'Luxury',
    featured: true
  },
  {
    id: '4',
    src: '/images/nm-concrete-coating-pros/project-4.jpg',
    alt: 'Rustic epoxy coating with earth tones',
    title: 'Rustic Mountain Home',
    description: 'Natural earth-tone epoxy coating perfect for mountain and rural properties.',
    category: 'Rustic',
    featured: false
  },
  {
    id: '5',
    src: '/images/nm-concrete-coating-pros/project-5.jpg',
    alt: 'Family-friendly epoxy playroom floor',
    title: 'Family Playroom Floor',
    description: 'Safe, non-toxic epoxy coating designed for children and family spaces.',
    category: 'Family',
    featured: false
  },
  {
    id: '6',
    src: '/images/nm-concrete-coating-pros/project-6.jpg',
    alt: 'Southwestern style epoxy with terracotta colors',
    title: 'Santa Fe Style Coating',
    description: 'Authentic Southwestern design with terracotta and adobe-inspired patterns.',
    category: 'Southwestern',
    featured: false
  },
  {
    id: '7',
    src: '/images/nm-concrete-coating-pros/project-7.jpg',
    alt: 'Diamond metallic coating with 3D effects',
    title: 'Diamond Metallic System',
    description: 'Ultra-premium diamond metallic coating with stunning 3D depth effects.',
    category: 'Luxury',
    featured: true
  },
  {
    id: '8',
    src: '/images/nm-concrete-coating-pros/project-8.jpg',
    alt: 'Barn floor coating for agricultural use',
    title: 'Agricultural Barn Floor',
    description: 'Heavy-duty coating designed for agricultural buildings and equipment.',
    category: 'Agricultural',
    featured: false
  },
  {
    id: '9',
    src: '/images/nm-concrete-coating-pros/project-9.jpg',
    alt: 'Outdoor patio coating with UV protection',
    title: 'Outdoor Patio Coating',
    description: 'Weather-resistant coating for outdoor patios and entertainment areas.',
    category: 'Outdoor',
    featured: false
  },
  {
    id: '10',
    src: '/images/nm-concrete-coating-pros/project-10.jpg',
    alt: 'High-altitude polyaspartic coating',
    title: 'Mountain Home Coating',
    description: 'Specialized coating designed for high-altitude and extreme weather conditions.',
    category: 'Mountain',
    featured: false
  },
  {
    id: '11',
    src: '/images/nm-concrete-coating-pros/project-11.jpg',
    alt: 'Custom color epoxy with flake system',
    title: 'Custom Flake System',
    description: 'Custom color epoxy with decorative flake system for unique appearance.',
    category: 'Custom',
    featured: false
  },
  {
    id: '12',
    src: '/images/nm-concrete-coating-pros/project-12.jpg',
    alt: 'Concrete polishing with natural stone look',
    title: 'Natural Stone Polishing',
    description: 'Concrete polishing that mimics natural stone with organic patterns.',
    category: 'Natural',
    featured: false
  },
  {
    id: '13',
    src: '/images/nm-concrete-coating-pros/project-13.jpg',
    alt: 'Elite polyaspartic system for commercial use',
    title: 'Elite Commercial System',
    description: 'High-performance polyaspartic system for demanding commercial applications.',
    category: 'Commercial',
    featured: true
  },
  {
    id: '14',
    src: '/images/nm-concrete-coating-pros/project-14.jpg',
    alt: 'Artisan concrete polishing with custom textures',
    title: 'Artisan Custom Work',
    description: 'Hand-crafted concrete polishing with custom textures and artistic finishes.',
    category: 'Artisan',
    featured: false
  },
  {
    id: '15',
    src: '/images/nm-concrete-coating-pros/project-15.jpg',
    alt: 'Luxury epoxy with gold accents',
    title: 'Luxury Gold Accents',
    description: 'Premium epoxy system with gold metallic accents for luxury properties.',
    category: 'Luxury',
    featured: true
  },
  {
    id: '16',
    src: '/images/nm-concrete-coating-pros/project-16.jpg',
    alt: 'Family garage transformation',
    title: 'Family Garage Makeover',
    description: 'Complete garage transformation into family-friendly multi-purpose space.',
    category: 'Family',
    featured: false
  },
  {
    id: '17',
    src: '/images/nm-concrete-coating-pros/project-17.jpg',
    alt: 'Rustic workshop floor coating',
    title: 'Rustic Workshop Floor',
    description: 'Durable rustic coating perfect for workshops and rural properties.',
    category: 'Rustic',
    featured: false
  }
];

// Helper functions for different page configurations
export const getGalleryImagesForPage = (pageType: 'main' | 'edgewood' | 'los-lunas' | 'rio-rancho' | 'santa-fe', maxImages?: number) => {
  let filteredImages = nmConcreteGalleryImages;
  
  switch (pageType) {
    case 'main':
      // Main page shows first 6 images
      return nmConcreteGalleryImages.slice(0, maxImages || 6);
    
    case 'edgewood':
      // Edgewood shows rustic and mountain projects (6 images)
      filteredImages = nmConcreteGalleryImages.filter(img => 
        img.category === 'Rustic' || img.category === 'Mountain' || img.category === 'Agricultural'
      );
      return filteredImages.slice(0, maxImages || 6);
    
    case 'los-lunas':
      // Los Lunas shows family-friendly projects (6 images)
      filteredImages = nmConcreteGalleryImages.filter(img => 
        img.category === 'Family' || img.category === 'Residential' || img.category === 'Outdoor'
      );
      return filteredImages.slice(0, maxImages || 6);
    
    case 'rio-rancho':
      // Rio Rancho shows random luxury projects
      const luxuryImages = nmConcreteGalleryImages.filter(img => 
        img.category === 'Luxury' || img.category === 'Commercial' || img.featured
      );
      return luxuryImages.sort(() => 0.5 - Math.random()).slice(0, maxImages || 6);
    
    case 'santa-fe':
      // Santa Fe shows random southwestern and artisan projects
      const santaFeImages = nmConcreteGalleryImages.filter(img => 
        img.category === 'Southwestern' || img.category === 'Artisan' || img.category === 'Natural'
      );
      return santaFeImages.sort(() => 0.5 - Math.random()).slice(0, maxImages || 6);
    
    default:
      return nmConcreteGalleryImages.slice(0, maxImages || 6);
  }
};
