// src/lib/sanityContact.js
import { createClient } from '@sanity/client';

// Server-side write client (never expose token in frontend!)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-15';
const writeToken = process.env.SANITY_WRITE_TOKEN; // server-side only

if (!writeToken) {
  console.warn("SANITY_WRITE_TOKEN is not set. Contact form submissions will fail.");
}

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: writeToken, // server-side only
  useCdn: false,
});

/**
 * Save a contact form submission to Sanity.
 * @param {string} name
 * @param {string} email
 * @param {string} message
 * @returns {Promise<object>} The created Sanity document
 */
export async function submitContact(name, email, message) {
  if (!name || !email || !message) {
    throw new Error("All fields (name, email, message) are required");
  }

  const doc = {
    _type: 'contactSubmit',   // must match your Sanity schema name
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    const created = await writeClient.create(doc);
    console.log("Contact form submitted:", created);
    return created;
  } catch (err) {
    console.error("Error submitting contact form:", err);
    throw err;
  }
}
