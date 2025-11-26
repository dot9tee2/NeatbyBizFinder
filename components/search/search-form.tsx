'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin } from 'lucide-react';
import { fetchCategoriesFromSanity } from '@/lib/sanity.fetch';
import SearchSuggestions from './search-suggestions';

interface SearchFormProps {
  className?: string;
  defaultQuery?: string;
  defaultLocation?: string;
  defaultCategory?: string;
}

export default function SearchForm({ 
  className,
  defaultQuery = '',
  defaultLocation = '',
  defaultCategory = ''
}: SearchFormProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [location, setLocation] = useState(defaultLocation);
  const [category, setCategory] = useState(defaultCategory);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedField, setFocusedField] = useState<'query' | 'location' | null>(null);
  const queryRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    
    const searchParams = new URLSearchParams();
    if (query.trim()) searchParams.set('q', query.trim());
    if (location.trim()) searchParams.set('location', location.trim());
    if (category) searchParams.set('category', category);

    router.push(`/search?${searchParams.toString()}`);
  };

  const handleSuggestionClick = (suggestion: string, type: 'query' | 'location') => {
    if (type === 'query') {
      setQuery(suggestion);
      queryRef.current?.focus();
    } else {
      setLocation(suggestion);
      locationRef.current?.focus();
    }
    setShowSuggestions(false);
  };

  const handleInputFocus = (field: 'query' | 'location') => {
    setFocusedField(field);
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false);
      setFocusedField(null);
    }, 300);
  };

  const handleInputChange = (value: string, field: 'query' | 'location') => {
    if (field === 'query') {
      setQuery(value);
    } else {
      setLocation(value);
    }
    // Show suggestions as soon as user starts typing
    if (value.trim()) {
      setShowSuggestions(true);
      setFocusedField(field);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        queryRef.current && !queryRef.current.contains(event.target as Node) &&
        locationRef.current && !locationRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [categories, setCategories] = useState<Array<{ id: string; name: string; slug: string; icon?: string }>>([]);
  useEffect(() => {
    (async () => {
      try {
        const sanityCategories = await fetchCategoriesFromSanity();
        const mapped = (sanityCategories || []).map((c: any) => ({ id: c._id, name: c.name, slug: c.slug, icon: c.icon || '📍' }));
        setCategories(mapped);
      } catch {}
    })();
  }, []);

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 relative">
        {/* Search Query */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            ref={queryRef}
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => handleInputChange(e.target.value, 'query')}
            onFocus={() => handleInputFocus('query')}
            onBlur={handleInputBlur}
            className="pl-10 h-12 text-lg border-0 shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            ref={locationRef}
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => handleInputChange(e.target.value, 'location')}
            onFocus={() => handleInputFocus('location')}
            onBlur={handleInputBlur}
            className="pl-10 h-12 text-lg border-0 shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="w-full md:w-48">
          <Select value={category} onValueChange={(val) => setCategory(val === '__ALL__' ? '' : val)}>
            <SelectTrigger className="h-12 text-lg border-0 shadow-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__ALL__">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.slug}>
                  <div className="flex items-center space-x-2">
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button 
          type="submit" 
          size="lg" 
          className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        >
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>

        {/* Search Suggestions */}
        <SearchSuggestions
          query={query}
          location={location}
          onSuggestionClick={handleSuggestionClick}
          isVisible={showSuggestions}
          onClose={() => setShowSuggestions(false)}
        />
      </div>
    </form>
  );
}