import 'server-only';
import { sanityClient } from './sanity.client';

export async function sanityFetch<T>({ query, params = {} }: { query: string; params?: any }): Promise<T> {
    return sanityClient.fetch(query, params);
}

