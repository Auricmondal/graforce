// src/lib/sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Use Next.js environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-15';
const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true';
const writeToken = process.env.SANITY_WRITE_TOKEN; // server-side only

if (!projectId) {
  console.warn('NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Set it in your .env.local file.');
}

// Read-only client (frontend safe)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn:false,
});

// Write client (server-side only)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: writeToken,
  useCdn: false,
});

// Image URL builder helper
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

// Optional default export
export default client;
