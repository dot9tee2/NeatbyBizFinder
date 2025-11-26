import { createClient } from '@supabase/supabase-js';
// Note: Business data moved to Sanity. Keep Supabase only for auth.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// In static builds or when env is not provided, export no-op client accessors to avoid crashes
if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('Missing Supabase environment variables; supabase client will be unavailable.');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as unknown as ReturnType<typeof createClient>);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, name: string) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  signInWithGoogle: async (nextPath?: string) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    const origin = typeof window !== 'undefined'
      ? window.location.origin
      : (process.env.NEXT_PUBLIC_BASE_URL || '').replace(/\/$/, '');
    const redirectTo = origin
      ? `${origin}/auth/callback${nextPath ? `?next=${encodeURIComponent(nextPath)}` : ''}`
      : undefined;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
      },
    });
    return { data, error };
  },

  signOut: async () => {
    if (!supabase) return { error: new Error('Supabase not configured') };
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  getCurrentUser: async () => {
    if (!supabase) return { user: null, error: new Error('Supabase not configured') };
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },
};

// Business data access has moved to Sanity. Supabase is retained only for auth.