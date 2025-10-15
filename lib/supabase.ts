import { createClient } from '@supabase/supabase-js';
import type { Business, SearchFilters as SearchFiltersType } from '@/types/business';

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
        flowType: 'pkce',
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

// Business database operations
export const businesses = {
  getAll: async (filters?: Partial<Pick<SearchFiltersType, 'category' | 'rating'>>) => {
    if (!supabase) return { data: [], error: new Error('Supabase not configured') };
    let query = supabase.from('businesses').select('*');
    
    if (filters?.category) {
      query = query.eq('category', filters.category);
    }
    
    if (filters?.rating) {
      query = query.gte('rating', filters.rating);
    }
    
    const { data, error } = await query.order('rating', { ascending: false });
    return { data, error };
  },

  getById: async (id: string) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  search: async (query: string, location: string) => {
    if (!supabase) return { data: [], error: new Error('Supabase not configured') };
    
    // Enhanced search across multiple fields
    const searchFields = [
      `name.ilike.%${query}%`,
      `description.ilike.%${query}%`,
      `category.ilike.%${query}%`,
      `address.ilike.%${query}%`,
      `phone.ilike.%${query}%`,
      `email.ilike.%${query}%`,
      `amenities.cs.{${query}}` // Search in amenities array
    ].join(',');
    
    let supabaseQuery = supabase
      .from('businesses')
      .select('*')
      .or(searchFields);
    
    // Add location filter if provided
    if (location) {
      supabaseQuery = supabaseQuery.or(`city.ilike.%${location}%,state.ilike.%${location}%,address.ilike.%${location}%`);
    }
    
    const { data, error } = await supabaseQuery;
    return { data, error };
  },

  create: async (business: Omit<Business, 'id' | 'created_at' | 'updated_at'>) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    // Attempt to include owner_id for common RLS policies; if column doesn't exist, retry without it
    let toInsert: Record<string, unknown> = { ...business };
    try {
      const { data: authData } = await supabase.auth.getUser();
      const userId = authData?.user?.id;
      if (userId) {
        toInsert = { ...toInsert, owner_id: userId };
      }
    } catch {}

    let { data, error } = await supabase
      .from('businesses')
      .insert([toInsert])
      .select()
      .single();

    // If insert failed due to unknown column owner_id, retry without it
    if (error && /column\s+"?owner_id"?\s+of\s+relation/i.test(error.message || '')) {
      const fallbackInsert = { ...business } as Record<string, unknown>;
      const retry = await supabase
        .from('businesses')
        .insert([fallbackInsert])
        .select()
        .single();
      data = retry.data;
      error = retry.error;
    }

    return { data, error };
  },

  update: async (id: string, updates: Partial<Business>) => {
    if (!supabase) return { data: null, error: new Error('Supabase not configured') };
    const { data, error } = await supabase
      .from('businesses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  },
};