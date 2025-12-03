// scripts/gel-tokens.js

import { getBrand } from './gel-init.js';

const TOKENS_URL =
  'https://app.unpkg.com/@westpac/style-config@0.1.0-canary.1/files/dist/tokens/w3c/all_brands.json';

let cachedTokens = null;

/**
 * Fetch all brand tokens once and cache them.
 */
async function loadAllTokens() {
  if (cachedTokens) return cachedTokens;

  const res = await fetch(TOKENS_URL, { cache: 'force-cache' });
  if (!res.ok) {
    console.warn('Failed to load GEL tokens', res.status);
    return {};
  }

  cachedTokens = await res.json();
  return cachedTokens;
}

/**
 * Get tokens for the current brand (based on data-brand on <html>).
 */
export async function getCurrentBrandTokens() {
  const all = await loadAllTokens();
  const brand = getBrand();
  return all[brand] || {};
}

/**
 * Convenience: get tokens for a specific brand if you need to override.
 */
export async function getBrandTokens(brand) {
  const all = await loadAllTokens();
  return all[brand] || {};
}
