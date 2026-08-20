'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  DoorOpen,
  Droplets,
  Hammer,
  KeyRound,
  Layers,
  Mailbox,
  MapPin,
  Paintbrush,
  Search,
  Sparkles,
  Trees,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { BusinessListing } from '@/lib/businesses-manifest';

interface CategoryStyle {
  icon: LucideIcon;
  /** Static Tailwind classes — do not build these strings dynamically. */
  iconClass: string;
  ringClass: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'Appliance & HVAC': {
    icon: Wind,
    iconClass: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
    ringClass: 'group-hover:border-sky-300 dark:group-hover:border-sky-500/40',
  },
  Cleaning: {
    icon: Sparkles,
    iconClass: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300',
    ringClass: 'group-hover:border-teal-300 dark:group-hover:border-teal-500/40',
  },
  'Concrete & Flooring': {
    icon: Layers,
    iconClass: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
    ringClass: 'group-hover:border-violet-300 dark:group-hover:border-violet-500/40',
  },
  'Concrete & Masonry': {
    icon: Wrench,
    iconClass: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    ringClass: 'group-hover:border-amber-300 dark:group-hover:border-amber-500/40',
  },
  'Curb Appeal': {
    icon: Mailbox,
    iconClass: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
    ringClass: 'group-hover:border-rose-300 dark:group-hover:border-rose-500/40',
  },
  Electrical: {
    icon: Zap,
    iconClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300',
    ringClass: 'group-hover:border-yellow-300 dark:group-hover:border-yellow-500/40',
  },
  'Foundation & Renovation': {
    icon: Hammer,
    iconClass: 'bg-stone-200 text-stone-700 dark:bg-stone-500/20 dark:text-stone-200',
    ringClass: 'group-hover:border-stone-400 dark:group-hover:border-stone-500/50',
  },
  'Garage Doors': {
    icon: DoorOpen,
    iconClass: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300',
    ringClass: 'group-hover:border-orange-300 dark:group-hover:border-orange-500/40',
  },
  'Landscaping & Turf': {
    icon: Trees,
    iconClass: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300',
    ringClass: 'group-hover:border-green-300 dark:group-hover:border-green-500/40',
  },
  'Locksmith & Security': {
    icon: KeyRound,
    iconClass: 'bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-200',
    ringClass: 'group-hover:border-slate-400 dark:group-hover:border-slate-500/50',
  },
  'Painting & Drywall': {
    icon: Paintbrush,
    iconClass: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300',
    ringClass: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-500/40',
  },
  'Roofing & Gutters': {
    icon: Droplets,
    iconClass: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
    ringClass: 'group-hover:border-blue-300 dark:group-hover:border-blue-500/40',
  },
};

const FALLBACK_STYLE: CategoryStyle = {
  icon: Building2,
  iconClass: 'bg-gray-100 text-gray-700 dark:bg-gray-500/15 dark:text-gray-300',
  ringClass: 'group-hover:border-gray-300 dark:group-hover:border-gray-500/40',
};

function businessHref(slug: string, locationSlug?: string) {
  return locationSlug
    ? `/businesses/${slug}/${locationSlug}/`
    : `/businesses/${slug}/`;
}

interface BusinessDirectoryProps {
  businesses: BusinessListing[];
  categories: string[];
}

export default function BusinessDirectory({ businesses, categories }: BusinessDirectoryProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const resultsRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  // Filtering can shrink the list to less than a screenful, which would otherwise
  // leave the reader stranded down by the footer. Pull the results back into view.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const results = resultsRef.current;
    if (results && results.getBoundingClientRect().top < 0) {
      results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [query, activeCategory]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return businesses.filter((business) => {
      if (activeCategory !== 'All' && business.category !== activeCategory) {
        return false;
      }
      if (!needle) return true;

      const haystack = [
        business.name,
        business.category,
        business.location,
        business.tagline,
        ...(business.locations ?? []).map((location) => location.label),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [businesses, query, activeCategory]);

  return (
    <>
      {/* Search + category filter */}
      <div className="sticky top-16 z-30 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:bg-gray-900/90 dark:supports-[backdrop-filter]:bg-gray-900/70 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
            <label htmlFor="business-search" className="sr-only">
              Search businesses
            </label>
            <input
              id="business-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, service, or city…"
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          {/* Scrolls sideways on phones so the sticky bar never eats the screen. */}
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:px-0 sm:pb-0">
            {['All', ...categories].map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <section ref={resultsRef} className="scroll-mt-48 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
            Showing {visible.length} of {businesses.length} businesses
          </p>

          {visible.length === 0 ? (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
              <Building2 className="mx-auto mb-4 h-10 w-10 text-gray-300 dark:text-gray-600" aria-hidden="true" />
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">No businesses found</h2>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Try a different search term or clear the filters to see everything.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveCategory('All');
                }}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((business) => {
                const style = CATEGORY_STYLES[business.category] ?? FALLBACK_STYLE;
                const Icon = style.icon;

                return (
                  <article
                    key={business.slug}
                    className={`group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 ${style.ringClass}`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconClass}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        {business.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">
                      <Link
                        href={businessHref(business.slug)}
                        className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {business.name}
                      </Link>
                    </h2>

                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {business.location}
                    </p>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {business.tagline}
                    </p>

                    {business.locations && business.locations.length > 0 && (
                      <div className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                          Also serving
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {business.locations.map((location) => (
                            <Link
                              key={location.slug}
                              href={businessHref(business.slug, location.slug)}
                              className="relative z-10 rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                            >
                              {location.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={businessHref(business.slug)}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
                    >
                      Visit page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
