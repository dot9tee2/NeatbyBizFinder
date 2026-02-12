import { groq } from 'next-sanity';

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{name, image},
  "categories": categories[]->{ _id, title, slug },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
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
  "author": author->{name, image, bio},
  "categories": categories[]->{ _id, title, slug },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
}`;

export const relatedPostsQuery = groq`*[_type == "post" && slug.current != $slug && defined(slug.current) && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{name, image},
  "categories": categories[]->{ _id, title, slug },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
}`;

export interface Category {
  _id: string;
  title: string;
  slug?: { current: string };
}

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
  categories?: Category[];
  estimatedReadingTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: any;
  };
}
