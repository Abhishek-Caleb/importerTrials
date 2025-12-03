// scripts/gel-constants.js

const BREAKPOINT_URL =
  'https://app.unpkg.com/@westpac/style-config@0.1.0-canary.1/files/dist/constants/breakpoint.js';

const SPACING_URL =
  'https://app.unpkg.com/@westpac/style-config@0.1.0-canary.1/files/dist/constants/spacing.js';

/**
 * Load GEL breakpoint & spacing constants from unpkg.
 * Returns: { breakpoints, spacing }
 */
export async function loadGelConstants() {
  const [breakpointsMod, spacingMod] = await Promise.all([
    import(BREAKPOINT_URL),
    import(SPACING_URL),
  ]);

  const breakpoints = breakpointsMod.default ?? breakpointsMod;
  const spacing = spacingMod.default ?? spacingMod;

  return { breakpoints, spacing };
}
