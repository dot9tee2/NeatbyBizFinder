'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Menu, X, User, Heart, Settings, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { auth, supabase } from '@/lib/supabase';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const { user } = await auth.getCurrentUser();
      if (isMounted) setIsLoggedIn(!!user);
    };
    init();

    const { data: subscription } = supabase?.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    }) || { data: { subscription: null } } as any;

    return () => {
      isMounted = false;
      subscription?.subscription?.unsubscribe?.();
    };
  }, []);

  const handleSignOut = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-2 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">NearbyBizFinder</span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative flex w-full">
              <Input
                type="text"
                placeholder="Search businesses..."
                className="pr-20 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/search/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/categories/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Categories
            </Link>
            <Link href="/business/new/">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow">
                <Plus className="h-4 w-4 mr-2" />
                Add Business
              </Button>
            </Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="mr-2 h-4 w-4" />
                    Saved Businesses
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/auth/signin/">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search businesses..."
                  className="pr-20 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  href="/search/" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse
                </Link>
                <Link 
                  href="/categories/" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  href="/business/new/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Business
                  </Button>
                </Link>
                
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-2 pt-2 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="justify-start p-0 text-sm text-gray-700 hover:text-blue-600"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2 pt-2 border-t">
                    <Link href="/auth/signin/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}