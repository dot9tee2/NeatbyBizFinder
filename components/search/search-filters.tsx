'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, X, Star } from 'lucide-react';
import { SearchFilters } from '@/types/business';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  className?: string;
}

export default function SearchFilters({ filters, onFiltersChange, className }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilters = (updates: Partial<SearchFilters>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearFilters = () => {
    onFiltersChange({
      location: filters.location,
      category: '',
      rating: undefined,
      priceRange: [],
      distance: undefined,
      sortBy: 'rating'
    });
  };

  const hasActiveFilters = !!(
    filters.category || 
    filters.rating || 
    (filters.priceRange && filters.priceRange.length > 0) || 
    filters.distance
  );

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className={className}>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              Active
            </Badge>
          )}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </CardTitle>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sort By */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Sort By</Label>
              <Select 
                value={filters.sortBy || 'rating'} 
                onValueChange={(value) => updateFilters({ sortBy: value as 'rating' | 'review_count' | 'distance' | 'name' })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="review_count">Most Reviewed</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rating Filter */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Minimum Rating</Label>
              <div className="space-y-3">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <Checkbox
                      checked={filters.rating === rating}
                      onCheckedChange={(checked) => 
                        updateFilters({ rating: checked === true ? rating : undefined })
                      }
                    />
                    <div className="flex items-center space-x-1">
                      {renderStars(rating)}
                      <span className="text-sm text-gray-600 ml-2">& up</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Price Range</Label>
              <div className="space-y-3">
                {['$', '$$', '$$$', '$$$$'].map((price) => (
                  <div key={price} className="flex items-center space-x-3">
                    <Checkbox
                      checked={filters.priceRange?.includes(price) || false}
                      onCheckedChange={(checked) => {
                        const currentPrices = filters.priceRange || [];
                        const newPrices = checked === true
                          ? [...currentPrices, price]
                          : currentPrices.filter(p => p !== price);
                        updateFilters({ priceRange: newPrices });
                      }}
                    />
                    <Badge variant="outline" className="text-sm">
                      {price}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Distance */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Distance: {filters.distance ? `${filters.distance} miles` : 'Any'}
              </Label>
              <div className="px-2">
                <Slider
                  value={[filters.distance || 25]}
                  onValueChange={([value]) => updateFilters({ distance: value })}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 mi</span>
                  <span>50 mi</span>
                </div>
              </div>
            </div>

            {/* Apply Button (Mobile) */}
            <div className="lg:hidden pt-4">
              <Button 
                className="w-full" 
                onClick={() => setIsOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}