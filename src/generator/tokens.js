/**
 * Computes WordPress naming conventions, prefixes, and tokens from user input.
 */
export function sanitizeSlug(input) {
  if (!input) return 'custom-theme';
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'custom-theme';
}

export function toSnakeCase(slug) {
  return slug.replace(/-/g, '_');
}

export function toConstantCase(slug) {
  return toSnakeCase(slug).toUpperCase();
}

export function toPackageName(name) {
  if (!name) return 'Custom_Theme';
  return name
    .trim()
    .split(/[\s_-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('_');
}

export function createThemeTokens(options) {
  const themeName = (options.name || 'Custom Theme').trim();
  const slug = sanitizeSlug(options.slug || themeName);
  const snake = toSnakeCase(slug);
  const functionPrefix = snake + '_';
  const constantPrefix = toConstantCase(slug) + '_';
  const packageName = toPackageName(themeName);
  const textDomain = slug;
  
  const author = (options.author || 'Anonymous').trim();
  const authorUri = (options.authorUri || 'https://example.com').trim();
  const themeUri = (options.themeUri || authorUri).trim();
  const description = (options.description || 'A clean, modern WordPress starter theme created with WordPress Theme Dev.').trim();
  const version = (options.version || '1.0.0').trim();
  const license = options.license || 'GNU General Public License v2 or later';
  const licenseUri = options.licenseUri || 'https://www.gnu.org/licenses/gpl-2.0.html';
  const tags = options.tags || 'custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready';
  const minWpVersion = options.minWpVersion || '6.0';
  const minPhpVersion = options.minPhpVersion || '7.4';

  return {
    themeName,
    slug,
    functionPrefix,
    constantPrefix,
    packageName,
    textDomain,
    author,
    authorUri,
    themeUri,
    description,
    version,
    license,
    licenseUri,
    tags,
    minWpVersion,
    minPhpVersion,
    // Feature flags
    themeType: options.themeType || 'classic', // 'classic' | 'hybrid' | 'block'
    includeWooCommerce: Boolean(options.includeWooCommerce),
    includeSass: Boolean(options.includeSass),
    includeNavigationJs: options.includeNavigationJs !== false,
    includeThemeJson: options.includeThemeJson !== false,
    includeGutenbergSupports: options.includeGutenbergSupports !== false,
  };
}
