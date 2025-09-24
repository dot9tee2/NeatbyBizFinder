/**
 * Media optimization utilities for Next.js
 */

// Video optimization settings
export const VIDEO_OPTIMIZATION = {
  // Recommended video formats in order of preference
  formats: ['mp4', 'webm', 'ogg'],
  
  // Quality settings for different use cases
  quality: {
    hero: 85,      // High quality for hero videos
    gallery: 75,   // Medium quality for gallery videos
    thumbnail: 60, // Lower quality for thumbnails
  },
  
  // Compression settings
  compression: {
    maxSize: 10 * 1024 * 1024, // 10MB max file size
    maxDuration: 30, // 30 seconds max for autoplay videos
  },
  
  // Responsive breakpoints for video sizing
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large: 1440,
  }
};

// Image optimization settings
export const IMAGE_OPTIMIZATION = {
  // Quality settings for different use cases
  quality: {
    hero: 90,      // High quality for hero images
    gallery: 85,   // Medium quality for gallery images
    thumbnail: 75, // Lower quality for thumbnails
    avatar: 80,    // Medium quality for avatars
  },
  
  // Responsive image sizes
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw',
    gallery: '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw',
  },
  
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
};

// Generate responsive sizes string
export function generateSizes(breakpoint: keyof typeof IMAGE_OPTIMIZATION.sizes): string {
  return IMAGE_OPTIMIZATION.sizes[breakpoint];
}

// Get optimal quality for use case
export function getOptimalQuality(useCase: keyof typeof IMAGE_OPTIMIZATION.quality): number {
  return IMAGE_OPTIMIZATION.quality[useCase];
}

// Generate blur data URL for placeholder
export function generateBlurDataURL(width: number = 10, height: number = 10, color: string = '#f3f4f6'): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
}

// Check if device supports modern video formats
export function supportsModernVideoFormats(): boolean {
  if (typeof window === 'undefined') return true;
  
  const video = document.createElement('video');
  return video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== '';
}

// Get optimal video format for device
export function getOptimalVideoFormat(): string {
  if (typeof window === 'undefined') return 'mp4';
  
  const video = document.createElement('video');
  
  if (video.canPlayType('video/webm; codecs="vp9"') !== '') {
    return 'webm';
  } else if (video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== '') {
    return 'mp4';
  }
  
  return 'mp4'; // Fallback
}

// Preload critical media
export function preloadMedia(src: string, type: 'image' | 'video' = 'image'): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = src;
  link.as = type;
  
  if (type === 'image') {
    link.setAttribute('imagesrcset', src);
    link.setAttribute('imagesizes', '100vw');
  }
  
  document.head.appendChild(link);
}

// Lazy load media with intersection observer
export function createLazyLoadObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
): IntersectionObserver {
  return new IntersectionObserver(callback, options);
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Check if image is WebP supported
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return true;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

// Get optimal image format
export function getOptimalImageFormat(): string {
  if (supportsWebP()) {
    return 'webp';
  }
  return 'jpeg';
}
