/**
 * Main Theme Generator Engine
 */
import JSZip from 'jszip';
import { createThemeTokens } from './tokens.js';
import { generateClassicTheme } from './templates/classic.js';
import { generateBlockTheme } from './templates/block.js';
import { generateWooCommerceFiles } from './templates/woocommerce.js';
import { generateSassFiles } from './templates/sass.js';
import { generateThemeJson } from './templates/themejson.js';
import { generateScreenshot } from './screenshot.js';

/**
 * Generates an in-memory map of file paths to content strings
 * @param {Object} options 
 * @returns {Object} { [filepath]: string }
 */
export function generateThemeFiles(options) {
  const tokens = createThemeTokens(options);
  let files = {};

  if (tokens.themeType === 'block') {
    files = { ...generateBlockTheme(tokens) };
  } else {
    // Classic or Hybrid
    files = { ...generateClassicTheme(tokens) };

    if (tokens.themeType === 'hybrid' || tokens.includeThemeJson) {
      files['theme.json'] = generateThemeJson(tokens);
    }
  }

  // Optional WooCommerce support
  if (tokens.includeWooCommerce) {
    const wcFiles = generateWooCommerceFiles(tokens);
    files = { ...files, ...wcFiles };
  }

  // Optional Sass/SCSS files
  if (tokens.includeSass) {
    const sassFiles = generateSassFiles(tokens);
    files = { ...files, ...sassFiles };
  }

  return { files, tokens };
}

/**
 * Bundles the theme into a downloadable ZIP Blob
 * @param {Object} options 
 * @returns {Promise<{ blob: Blob, filename: string, tokens: Object }>}
 */
export async function generateThemeZip(options) {
  const { files, tokens } = generateThemeFiles(options);
  const zip = new JSZip();

  // Root folder in ZIP: ${tokens.slug}/
  const themeFolder = zip.folder(tokens.slug);

  // Add all text files
  for (const [filePath, content] of Object.entries(files)) {
    themeFolder.file(filePath, content);
  }

  // Generate screenshot.png
  try {
    const screenshot = await generateScreenshot(tokens);
    if (screenshot instanceof Blob) {
      themeFolder.file('screenshot.png', screenshot);
    } else if (typeof screenshot === 'string') {
      themeFolder.file('screenshot.png', screenshot, { base64: true });
    }
  } catch (err) {
    console.warn('Screenshot generation skipped or failed:', err);
  }

  // Generate ZIP blob
  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  return {
    blob,
    filename: `${tokens.slug}.zip`,
    tokens,
  };
}
