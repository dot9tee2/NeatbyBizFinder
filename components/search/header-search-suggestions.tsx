'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockBusinesses, businessCategories } from '@/lib/mock-data';
import { Business } from '@/types/business';

interface HeaderSearchSuggestionsProps {
  query: string;
  onSuggestionClick: (suggestion: string) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function HeaderSearchSuggestions({ 
  query, 
  onSuggestionClick, 
  isVisible, 
  onClose 
}: HeaderSearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<{
    businesses: Business[];
    categories: typeof businessCategories;
  }>({
    businesses: [],
    categories: []
  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim() || !isVisible) {
      setSuggestions({ businesses: [], categories: [] });
      return;
    }

    // Add a small delay to avoid too many suggestions while typing
    const timeoutId = setTimeout(() => {
      const searchTerm = query.toLowerCase();
      
      // Business suggestions
      const businessSuggestions = mockBusinesses
        .filter(business => 
          business.name.toLowerCase().includes(searchTerm) ||
          business.description.toLowerCase().includes(searchTerm) ||
          business.category.toLowerCase().includes(searchTerm)
        )
        .slice(0, 4);

      // Category suggestions
      const categorySuggestions = businessCategories
        .filter(category => 
          category.name.toLowerCase().includes(searchTerm)
        )
        .slice(0, 2);

      setSuggestions({
        businesses: businessSuggestions,
        categories: categorySuggestions
      });
      setSelectedIndex(-1);
    }, 100); // Faster response for header

    return () => clearTimeout(timeoutId);
  }, [query, isVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;

      const totalSuggestions = suggestions.businesses.length + suggestions.categories.length;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % totalSuggestions);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev <= 0 ? totalSuggestions - 1 : prev - 1);
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        handleSuggestionClick(selectedIndex);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, selectedIndex, suggestions, onClose]);

  const handleSuggestionClick = (index: number) => {
    let currentIndex = 0;
    
    // Business suggestions
    if (index < suggestions.businesses.length) {
      const business = suggestions.businesses[index];
      onSuggestionClick(business.name);
      return;
    }
    currentIndex += suggestions.businesses.length;
    
    // Category suggestions
    if (index < currentIndex + suggestions.categories.length) {
      const category = suggestions.categories[index - currentIndex];
      onSuggestionClick(category.name);
      return;
    }
  };

  if (!isVisible || (!query.trim())) {
    return null;
  }

  const totalSuggestions = suggestions.businesses.length + suggestions.categories.length;

  if (totalSuggestions === 0) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto"
    >
      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          {/* Business Suggestions */}
          {suggestions.businesses.length > 0 && (
            <div className="border-b border-gray-100">
              <div className="px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Businesses
              </div>
              {suggestions.businesses.map((business, index) => (
                <button
                  key={business.id}
                  onClick={() => onSuggestionClick(business.name)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 ${
                    selectedIndex === index ? 'bg-blue-50' : ''
                  }`}
                >
                  <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {business.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {business.category} • {business.city}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {business.rating}★
                  </Badge>
                </button>
              ))}
            </div>
          )}

          {/* Category Suggestions */}
          {suggestions.categories.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Categories
              </div>
              {suggestions.categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => onSuggestionClick(category.name)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 ${
                    selectedIndex === suggestions.businesses.length + index ? 'bg-blue-50' : ''
                  }`}
                >
                  <Tag className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium text-gray-900">
                      {category.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
