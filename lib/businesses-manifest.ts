export type BusinessManifest = Record<string, string[]>;

// Authoritative list of business slugs and their location slugs.
// Keep this in sync with `app/businesses/*`.
export const BUSINESS_MANIFEST: BusinessManifest = {
  'american-gutter-guards': [],
  'clear-choice-cleaning': [],
  'drywall-painting-pro': ['cedar-park', 'georgetown'],
  'lazy-grass': ['cummings', 'rosewell', 'sandy-springs', 'woodstock'],
  'nm-concrete-coating-pros': ['santa-fe', 'rio-rancho', 'los-lunas', 'edgewood'],
  'rc-solutions': ['orlando', 'daytona-beach', 'palm-coast', 'deland'],
  'she-wrote-me-a-letter': [],
  'superior-electric-service': ['prospect', 'hill-view'],
};

