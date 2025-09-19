'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BusinessList from '@/components/business/business-list';
import SearchForm from '@/components/search/search-form';
import SearchFilters from '@/components/search/search-filters';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { mockBusinesses } from '@/lib/mock-data';
import { Business, SearchFilters as SearchFiltersType } from '@/types/business';
import { businesses as db } from '@/lib/supabase';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  const sortParam = searchParams.get('sortBy');
  function isAllowedSort(value: string | null): value is NonNullable<SearchFiltersType['sortBy']> {
    return value === 'rating' || value === 'distance' || value === 'name' || value === 'review_count';
  }
  const initialSortBy: NonNullable<SearchFiltersType['sortBy']> = isAllowedSort(sortParam) ? sortParam : 'rating';

  const [filters, setFilters] = useState<SearchFiltersType>({
    location: searchParams.get('location') || '',
    category: searchParams.get('category') || '',
    rating: searchParams.get('rating') ? parseInt(searchParams.get('rating')!) : undefined,
    priceRange: searchParams.get('priceRange')?.split(',') || [],
    distance: searchParams.get('distance') ? parseInt(searchParams.get('distance')!) : undefined,
    sortBy: initialSortBy,
  });

  const query = searchParams.get('q') || '';

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 200));

      let records: Business[] = [];
      try {
        if (query || filters.location) {
          const { data, error } = await db.search(query, filters.location);
          if (error) throw error;
          records = data || [];
        } else {
          const { data, error } = await db.getAll();
          if (error) throw error;
          records = data || [];
        }
      } catch {
        records = [...mockBusinesses];
      }

      // Apply client-side filters to match UI
      let filteredBusinesses = [...records];

      if (filters.category) {
        const normalizedCategory = filters.category?.toLowerCase() ?? '';
        filteredBusinesses = filteredBusinesses.filter(business =>
          business.category.toLowerCase().replace(/\s+/g, '-').includes(normalizedCategory)
        );
      }

      if (filters.rating) {
        filteredBusinesses = filteredBusinesses.filter(business => business.rating >= filters.rating!);
      }

      if (filters.priceRange && filters.priceRange.length > 0) {
        filteredBusinesses = filteredBusinesses.filter(business =>
          filters.priceRange!.includes(business.price_range)
        );
      }

      switch (filters.sortBy) {
        case 'rating':
          filteredBusinesses.sort((a, b) => b.rating - a.rating);
          break;
        case 'review_count':
          filteredBusinesses.sort((a, b) => b.review_count - a.review_count);
          break;
        case 'name':
          filteredBusinesses.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'distance':
          filteredBusinesses.sort(() => Math.random() - 0.5);
          break;
      }

      setBusinesses(filteredBusinesses);
      setLoading(false);
    };

    performSearch();
  }, [query, filters]);

  const getSearchSummary = () => {
    const parts = [] as string[];
    if (query) parts.push(`"${query}"`);
    if (filters.location) parts.push(`in ${filters.location}`);
    if (filters.category) parts.push(`in ${filters.category.replace(/-/g, ' ')}`);
    return parts.join(' ') || 'All businesses';
  };

  const clearAllFilters = () => {
    setFilters({
      location: '',
      category: '',
      rating: undefined,
      priceRange: [],
      distance: undefined,
      sortBy: 'rating',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchForm 
            defaultQuery={query}
            defaultLocation={filters.location}
            defaultCategory={filters.category}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Search Results
                  </h1>
                  <p className="text-gray-600">
                    {loading ? 'Searching...' : `${businesses.length} businesses found`} for{' '}
                    <span className="font-semibold">{getSearchSummary()}</span>
                  </p>
                </div>

                {/* Active Filters */}
                <div className="flex flex-wrap gap-2">
                  {filters.rating && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Rating: {filters.rating}+
                      <button
                        onClick={() => setFilters({ ...filters, rating: undefined })}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {filters.priceRange && filters.priceRange.length > 0 && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Price: {filters.priceRange.join(', ')}
                      <button
                        onClick={() => setFilters({ ...filters, priceRange: [] })}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {filters.distance && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Within {filters.distance} mi
                      <button
                        onClick={() => setFilters({ ...filters, distance: undefined })}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <Skeleton className="h-48 w-full rounded-t-lg" />
                      <div className="p-6 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Results */}
            {!loading && (
              <BusinessList 
                businesses={businesses}
                showPagination={true}
                itemsPerPage={9}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}