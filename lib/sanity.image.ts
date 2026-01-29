import createImageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity.client';

export const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
    return imageBuilder.image(source).auto('format').fit('max');
}
