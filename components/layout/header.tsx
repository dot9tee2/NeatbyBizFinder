'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Menu, X, User, Heart, Settings, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { auth, supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import HeaderSearchSuggestions from '@/components/search/header-search-suggestions';

export default function Header() {
  const router = useRouter();
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [welcomed, setWelcomed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [showDesktopSuggestions, setShowDesktopSuggestions] = useState(false);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const { user } = await auth.getCurrentUser();
      if (isMounted) {
        setIsLoggedIn(!!user);
        setUserName((user?.user_metadata as any)?.name || null);
        setUserEmail(user?.email || null);
      }
    };
    init();

    const { data: subscription } = supabase?.auth?.onAuthStateChange?.((_event, session) => {
      const loggedIn = !!session?.user;
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        setUserName((session?.user?.user_metadata as any)?.name || null);
        setUserEmail(session?.user?.email || null);
        if (!welcomed) {
          setWelcomed(true);
          toast({ title: 'Welcome back', description: userName || session?.user?.email || 'Signed in' });
        }
        try {
          const redirect = localStorage.getItem('postAuthRedirect');
          if (redirect) {
            localStorage.removeItem('postAuthRedirect');
            router.push(redirect);
          }
        } catch {}
      } else {
        setUserName(null);
        setUserEmail(null);
        setWelcomed(false);
      }
    }) || { data: { subscription: null } } as any;

    return () => {
      isMounted = false;
      subscription?.subscription?.unsubscribe?.();
    };
  }, []);

  const handleSignOut = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
    setUserName(null);
    setUserEmail(null);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/search');
    }
  };

  const handleDesktopSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(mobileSearchQuery);
    setIsMobileMenuOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent, query: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(query);
    }
  };

  const handleDesktopSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
    setShowDesktopSuggestions(false);
  };

  const handleMobileSuggestionClick = (suggestion: string) => {
    setMobileSearchQuery(suggestion);
    handleSearch(suggestion);
    setShowMobileSuggestions(false);
    setIsMobileMenuOpen(false);
  };

  const handleDesktopInputChange = (value: string) => {
    setSearchQuery(value);
    setShowDesktopSuggestions(value.trim().length > 0);
  };

  const handleMobileInputChange = (value: string) => {
    setMobileSearchQuery(value);
    setShowMobileSuggestions(value.trim().length > 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="NearbyBizFinder logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-bold text-gray-900">NearbyBizFinder</span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative flex w-full">
              <form onSubmit={handleDesktopSearch} className="relative flex w-full">
                <Input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => handleDesktopInputChange(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, searchQuery)}
                  onFocus={() => setShowDesktopSuggestions(searchQuery.trim().length > 0)}
                  onBlur={() => setTimeout(() => setShowDesktopSuggestions(false), 200)}
                  className="pr-20 pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </form>
              
              {/* Desktop Search Suggestions */}
              <HeaderSearchSuggestions
                query={searchQuery}
                onSuggestionClick={handleDesktopSuggestionClick}
                isVisible={showDesktopSuggestions}
                onClose={() => setShowDesktopSuggestions(false)}
              />
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
            <Link 
              href="/about/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact/" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Link href={isLoggedIn ? '/business/new/' : '/auth/signin/?redirect=/business/new'}>
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
                    {userName ? userName.split(' ')[0] : 'Account'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {userEmail && (
                    <DropdownMenuItem disabled>
                      {userEmail}
                    </DropdownMenuItem>
                  )}
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
                <form onSubmit={handleMobileSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search businesses..."
                    value={mobileSearchQuery}
                    onChange={(e) => handleMobileInputChange(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, mobileSearchQuery)}
                    onFocus={() => setShowMobileSuggestions(mobileSearchQuery.trim().length > 0)}
                    onBlur={() => setTimeout(() => setShowMobileSuggestions(false), 200)}
                    className="pr-20 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                    Search
                  </Button>
                </form>
                
                {/* Mobile Search Suggestions */}
                <HeaderSearchSuggestions
                  query={mobileSearchQuery}
                  onSuggestionClick={handleMobileSuggestionClick}
                  isVisible={showMobileSuggestions}
                  onClose={() => setShowMobileSuggestions(false)}
                />
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
                  href="/about/" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact/" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href={isLoggedIn ? '/business/new/' : '/auth/signin/?redirect=/business/new'} 
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