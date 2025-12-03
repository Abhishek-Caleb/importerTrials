// scripts/gel-init.js

const DEFAULT_BRAND = 'wbc';
const DEFAULT_THEME = 'light';

/**
 * Ensure the root element has data-brand and data-theme
 * so GEL CSS knows what to do.
 */
function ensureBrandAttributes() {
  const root = document.documentElement;

  if (!root.hasAttribute('data-brand')) {
    root.setAttribute('data-brand', DEFAULT_BRAND);
  }

  if (!root.hasAttribute('data-theme')) {
    root.setAttribute('data-theme', DEFAULT_THEME);
  }
}

ensureBrandAttributes();

/**
 * Optional helpers – you can import these in blocks if needed.
 */
export function getBrand() {
  return document.documentElement.getAttribute('data-brand') || DEFAULT_BRAND;
}

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
}
