'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { auth, supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export default function Header() {
  const router = useRouter();
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [welcomed, setWelcomed] = useState(false);

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
        } catch { }
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2 pt-2">
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