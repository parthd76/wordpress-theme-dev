#!/usr/bin/env node

/**
 * CLI for WordPress Theme Dev Generator
 * Usage:
 *   node bin/generate.js --name "Aura Minimal" --slug "aura-minimal" --woocommerce
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateThemeFiles } from '../src/generator/index.js';
import JSZip from 'jszip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    name: 'Custom Theme',
    slug: '',
    author: 'Anonymous',
    authorUri: 'https://example.com',
    themeUri: 'https://example.com',
    description: 'A clean, modern WordPress starter theme.',
    version: '1.0.0',
    themeType: 'classic',
    includeWooCommerce: false,
    includeSass: false,
    includeThemeJson: true,
    out: './output',
    zipOnly: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--name' && args[i + 1]) options.name = args[++i];
    else if (arg === '--slug' && args[i + 1]) options.slug = args[++i];
    else if (arg === '--author' && args[i + 1]) options.author = args[++i];
    else if (arg === '--author-uri' && args[i + 1]) options.authorUri = args[++i];
    else if (arg === '--desc' && args[i + 1]) options.description = args[++i];
    else if (arg === '--type' && args[i + 1]) options.themeType = args[++i];
    else if (arg === '--woocommerce') options.includeWooCommerce = true;
    else if (arg === '--sass') options.includeSass = true;
    else if (arg === '--out' && args[i + 1]) options.out = args[++i];
    else if (arg === '--zip') options.zipOnly = true;
    else if (arg === '--help' || arg === '-h') {
      console.log(`
WordPress Theme Dev CLI
-----------------------------------------
Options:
  --name <string>        Theme Name (default: "Custom Theme")
  --slug <string>        Theme Slug (default: slugified name)
  --author <string>      Author Name (default: "Anonymous")
  --author-uri <url>     Author URI (default: "https://example.com")
  --desc <string>        Theme Description
  --type <type>          Theme Type: "classic" | "hybrid" | "block" (default: "classic")
  --woocommerce          Include WooCommerce compatibility boilerplate
  --sass                 Include modular SCSS files
  --out <dir>            Output folder (default: "./output")
  --zip                  Generate .zip file instead of folder
      `);
      process.exit(0);
    }
  }

  return options;
}

async function main() {
  const options = parseArgs();
  console.log(`\n🚀 Generating WordPress theme: "${options.name}"...`);

  const { files, tokens } = generateThemeFiles(options);
  const outDir = path.resolve(process.cwd(), options.out, tokens.slug);

  if (options.zipOnly) {
    const zip = new JSZip();
    const folder = zip.folder(tokens.slug);
    for (const [filePath, content] of Object.entries(files)) {
      folder.file(filePath, content);
    }
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
    const zipPath = path.resolve(process.cwd(), options.out, `${tokens.slug}.zip`);
    fs.mkdirSync(path.dirname(zipPath), { recursive: true });
    fs.writeFileSync(zipPath, zipBuffer);
    console.log(`✨ Created theme ZIP package: ${zipPath}`);
  } else {
    fs.mkdirSync(outDir, { recursive: true });
    for (const [filePath, content] of Object.entries(files)) {
      const fullPath = path.join(outDir, filePath);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, content, 'utf8');
    }
    console.log(`✨ Successfully generated theme files at: ${outDir}`);
    console.log(`📦 Total files generated: ${Object.keys(files).length}`);
  }

  console.log(`
Theme Details:
  - Theme Name:      ${tokens.themeName}
  - Slug:            ${tokens.slug}
  - Function Prefix: ${tokens.functionPrefix}
  - Text Domain:     ${tokens.textDomain}
  - Constant Prefix: ${tokens.constantPrefix}
  - Package Name:    ${tokens.packageName}
  - Theme Type:      ${tokens.themeType}
  - WooCommerce:     ${tokens.includeWooCommerce ? 'Yes' : 'No'}
  - Sass:            ${tokens.includeSass ? 'Yes' : 'No'}
`);
}

main().catch(console.error);
