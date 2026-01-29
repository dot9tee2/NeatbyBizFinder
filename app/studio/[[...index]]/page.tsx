'use client';

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path will be handled by this file using Next.js's 
 * optional catch-all routes: [[...index]]
 */

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config'; // Using the alias path

export default function StudioPage() {
    return <NextStudio config={config} />;
}
