import { groq } from 'next-sanity';

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{name, image}
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  body,
  seo,
  "author": author->{name, image, bio}
}`;

export interface Author {
  name: string;
  image?: any;
  bio?: any[];
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  excerpt?: string;
  publishedAt: string;
  author?: Author;
  body?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: any;
  };
}
