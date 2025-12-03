// blocks/hero/hero.js

import { loadGelConstants } from '../../scripts/gel-constants.js';
import { getCurrentBrandTokens } from '../../scripts/gel-tokens.js';

/**
 * EDS block entrypoint
 * @param {HTMLElement} block
 */
export default async function decorate(block) {
  // Apply a base GEL hero class so the CSS picks it up
  block.classList.add('gel-hero', 'bg-surface-mono', 'text-text-body');

  // 1. Use GEL spacing + breakpoints for responsive padding
  const { breakpoints, spacing } = await loadGelConstants();

  const mqLg = window.matchMedia(`(min-width: ${breakpoints.lg}px)`);

  const applyResponsivePadding = () => {
    const pad = mqLg.matches ? spacing.xl : spacing.md;
    block.style.padding = `${pad}px`;
  };

  mqLg.addEventListener('change', applyResponsivePadding);
  applyResponsivePadding();

  // 2. Use tokens for a custom accent (e.g. left border colour)
  const tokens = await getCurrentBrandTokens();
  const primaryColor =
    tokens?.color?.['interactive-primary-default']?.value || '#0055A4';

  block.style.borderLeft = `4px solid ${primaryColor}`;
}
