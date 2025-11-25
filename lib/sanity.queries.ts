export const allCategoriesQuery = `
*[_type == "category"]|order(order asc, name asc){
  _id,
  name,
  "slug": slug.current,
  icon
}
`;

export const featuredBusinessesQuery = `
*[_type == "business"]|order(rating desc)[0...6]{
  _id,
  name,
  "slug": slug.current,
  description,
  "category": category->{
    name,
    "slug": slug.current
  },
  phone,
  website,
  rating,
  reviewCount,
  priceRange,
  "featured_image": featuredImage.asset->url,
  "images": images[].asset->url,
  address, city, state, zip_code
}
`;

export const businessesByCategoryQuery = `
query($slug){
  "items": *[_type == "business" && category->slug.current == $slug]|order(rating desc){
    _id,
    name,
    "slug": slug.current,
    description,
    phone,
    website,
    rating,
    reviewCount,
    priceRange,
    "featured_image": featuredImage.asset->url,
    "images": images[].asset->url,
    address, city, state, zip_code
  }
}
`;

export const businessBySlugQuery = `
*[_type == "business" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  description,
  phone,
  website,
  email,
  rating,
  reviewCount,
  priceRange,
  "featured_image": featuredImage.asset->url,
  "images": images[].asset->url,
  address, city, state, zip_code
}
`;



