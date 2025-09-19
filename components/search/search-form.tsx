'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin } from 'lucide-react';
import { businessCategories } from '@/lib/mock-data';

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
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchParams = new URLSearchParams();
    if (query.trim()) searchParams.set('q', query.trim());
    if (location.trim()) searchParams.set('location', location.trim());
    if (category) searchParams.set('category', category);

    router.push(`/search?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Search Query */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12 text-lg border-0 shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
              {businessCategories.map((cat) => (
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
      </div>
    </form>
  );
}