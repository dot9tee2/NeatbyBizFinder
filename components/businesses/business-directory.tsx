'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Camera,
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
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { BusinessListing } from '@/lib/businesses-manifest';

interface CategoryStyle {
  icon: LucideIcon;
  iconClass: string;
  barClass: string;
  badgeClass: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'Appliance & HVAC': {
    icon: Wind,
    iconClass: 'bg-sky-100 text-sky-800',
    barClass: 'bg-sky-500',
    badgeClass: 'bg-sky-50 text-sky-800 ring-sky-200',
  },
  Cleaning: {
    icon: Sparkles,
    iconClass: 'bg-teal-100 text-teal-800',
    barClass: 'bg-teal-500',
    badgeClass: 'bg-teal-50 text-teal-800 ring-teal-200',
  },
  'Concrete & Flooring': {
    icon: Layers,
    iconClass: 'bg-violet-100 text-violet-800',
    barClass: 'bg-violet-500',
    badgeClass: 'bg-violet-50 text-violet-800 ring-violet-200',
  },
  'Concrete & Masonry': {
    icon: Wrench,
    iconClass: 'bg-amber-100 text-amber-800',
    barClass: 'bg-amber-500',
    badgeClass: 'bg-amber-50 text-amber-800 ring-amber-200',
  },
  'Curb Appeal': {
    icon: Mailbox,
    iconClass: 'bg-rose-100 text-rose-800',
    barClass: 'bg-rose-500',
    badgeClass: 'bg-rose-50 text-rose-800 ring-rose-200',
  },
  Electrical: {
    icon: Zap,
    iconClass: 'bg-yellow-100 text-yellow-800',
    barClass: 'bg-yellow-500',
    badgeClass: 'bg-yellow-50 text-yellow-800 ring-yellow-200',
  },
  'Foundation & Renovation': {
    icon: Hammer,
    iconClass: 'bg-stone-200 text-stone-800',
    barClass: 'bg-stone-500',
    badgeClass: 'bg-stone-100 text-stone-800 ring-stone-300',
  },
  'Garage Doors': {
    icon: DoorOpen,
    iconClass: 'bg-orange-100 text-orange-800',
    barClass: 'bg-orange-500',
    badgeClass: 'bg-orange-50 text-orange-800 ring-orange-200',
  },
  'Landscaping & Turf': {
    icon: Trees,
    iconClass: 'bg-green-100 text-green-800',
    barClass: 'bg-green-500',
    badgeClass: 'bg-green-50 text-green-800 ring-green-200',
  },
  'Locksmith & Security': {
    icon: KeyRound,
    iconClass: 'bg-slate-200 text-slate-800',
    barClass: 'bg-slate-500',
    badgeClass: 'bg-slate-100 text-slate-800 ring-slate-300',
  },
  'Painting & Drywall': {
    icon: Paintbrush,
    iconClass: 'bg-indigo-100 text-indigo-800',
    barClass: 'bg-indigo-500',
    badgeClass: 'bg-indigo-50 text-indigo-800 ring-indigo-200',
  },
  'Real Estate Media': {
    icon: Camera,
    iconClass: 'bg-teal-100 text-teal-900',
    barClass: 'bg-teal-600',
    badgeClass: 'bg-teal-50 text-teal-900 ring-teal-200',
  },
  'Roofing & Gutters': {
    icon: Droplets,
    iconClass: 'bg-blue-100 text-blue-800',
    barClass: 'bg-blue-500',
    badgeClass: 'bg-blue-50 text-blue-800 ring-blue-200',
  },
  'Window & Gutter Cleaning': {
    icon: Sparkles,
    iconClass: 'bg-cyan-100 text-cyan-900',
    barClass: 'bg-cyan-500',
    badgeClass: 'bg-cyan-50 text-cyan-900 ring-cyan-200',
  },
};

const FALLBACK_STYLE: CategoryStyle = {
  icon: Building2,
  iconClass: 'bg-gray-100 text-gray-800',
  barClass: 'bg-gray-500',
  badgeClass: 'bg-gray-50 text-gray-800 ring-gray-200',
};

function primaryBusinessHref(business: BusinessListing) {
  return `/businesses/${business.route ?? business.slug}/`;
}

function locationHref(business: BusinessListing, locationSlug: string) {
  return `/businesses/${business.slug}/${locationSlug}/`;
}

interface BusinessDirectoryProps {
  businesses: BusinessListing[];
  categories: string[];
}

export default function BusinessDirectory({ businesses, categories }: BusinessDirectoryProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const resultsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const results = resultsRef.current;
    if (results && results.getBoundingClientRect().top < 0) {
      results.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [query, activeCategory]);

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((category) => [
          category,
          businesses.filter((business) => business.category === category).length,
        ])
      ),
    [businesses, categories]
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return businesses.filter((business) => {
      if (activeCategory !== 'All' && business.category !== activeCategory) return false;
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

  const resetFilters = () => {
    setQuery('');
    setActiveCategory('All');
  };

  return (
    <section id="directory" className="scroll-mt-24 bg-[#f4f7fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-slate-300 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">Local business index</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Browse by name, service, or city.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            Open a business profile for service details, local coverage and direct contact options.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:items-start">
          <aside className="border border-slate-300 bg-white p-5 lg:sticky lg:top-24" aria-label="Directory filters">
            <div>
              <label htmlFor="business-search" className="text-sm font-extrabold text-slate-900">
                Search the directory
              </label>
              <div className="relative mt-3">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  id="business-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Name, city, or service"
                  className="min-h-12 w-full border border-slate-300 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
                />
              </div>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-sm font-extrabold text-slate-900">Service category</p>
              <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1">
                {['All', ...categories].map((category) => {
                  const isActive = category === activeCategory;
                  const count = category === 'All' ? businesses.length : categoryCounts[category];

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`flex min-h-10 items-center justify-between gap-3 border px-3 py-2 text-left text-xs font-bold sm:text-sm ${
                        isActive
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      <span>{category}</span>
                      <span className={isActive ? 'text-blue-100' : 'text-slate-400'}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {(query || activeCategory !== 'All') && (
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-blue-900"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Reset all filters
              </button>
            )}
          </aside>

          <div ref={resultsRef} className="scroll-mt-28">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-slate-600" aria-live="polite">
                Showing <span className="text-slate-950">{visible.length}</span> of {businesses.length} businesses
              </p>
              <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
                Direct local profiles
              </span>
            </div>

            {visible.length === 0 ? (
              <div className="border border-dashed border-slate-400 bg-white p-12 text-center">
                <Building2 className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-slate-950">No matching businesses</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  Try another name, service, or city—or reset the filters to view the full directory.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 bg-blue-700 px-5 py-3 text-sm font-extrabold text-white"
                >
                  View all businesses
                </button>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {visible.map((business, index) => {
                  const style = CATEGORY_STYLES[business.category] ?? FALLBACK_STYLE;
                  const Icon = style.icon;
                  const primaryHref = primaryBusinessHref(business);

                  return (
                    <article key={business.slug} className="group relative flex min-h-[22rem] flex-col overflow-hidden border border-slate-300 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:border-slate-500">
                      <div className={`h-1.5 w-full ${style.barClass}`} />
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="flex items-start justify-between gap-5">
                          <div className={`grid h-12 w-12 shrink-0 place-items-center ${style.iconClass}`}>
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="mt-6">
                          <span className={`inline-flex px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] ring-1 ring-inset ${style.badgeClass}`}>
                            {business.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em] text-slate-950">
                            <Link href={primaryHref} className="hover:text-blue-700">
                              {business.name}
                            </Link>
                          </h3>
                          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-500">
                            <MapPin className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                            {business.location}
                          </p>
                          <p className="mt-4 leading-7 text-slate-600">{business.tagline}</p>
                        </div>

                        {business.locations && business.locations.length > 0 && (
                          <div className="mt-6 border-t border-slate-200 pt-5">
                            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-400">Additional local pages</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {business.locations.map((location) => (
                                <Link
                                  key={location.slug}
                                  href={locationHref(business, location.slug)}
                                  className="border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold leading-5 text-slate-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-800"
                                >
                                  {location.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <Link
                          href={primaryHref}
                          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-blue-700 hover:text-blue-900"
                        >
                          View business profile
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
