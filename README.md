# WordPress Theme Dev 🚀

A modern, fast, and feature-complete WordPress starter theme generator and boilerplate builder.

Just enter your basic theme details (Theme Name, Slug, Author, Description) and instantly download a 100% WordPress-compliant blank theme with all required template hierarchy files, custom function prefixes, actions, and text domains.

---

## ✨ Features

- **Clean WordPress Architecture**: Semantic HTML5, valid WordPress template hierarchy, and accessibility standards (skip-link focus fix, mobile hamburger navigation, keyboard navigation, ARIA tags).
- **Instant Client-Side ZIP Generation**: Generates and packages the `.zip` archive directly in the browser with zero server wait time or latency.
- **Dynamic Prefix & Token Injection**: Automatically sanitizes and replaces:
  - Theme Name: `My Theme`
  - Theme Slug / Text Domain: `my-theme`
  - Function prefix: `my_theme_`
  - Constant prefix: `MY_THEME_`
  - Package docblock: `My_Theme`
- **Interactive Live Preview**:
  - **File Explorer**: Browse the complete tree of generated files and folders in real time.
  - **Code Viewer**: Live code preview with syntax line numbers, copy button, and single-file download.
- **Multiple Theme Architectures**:
  - **Classic Theme**: Complete clean PHP templates (`index.php`, `header.php`, `footer.php`, `single.php`, `page.php`, `archive.php`, `search.php`, `comments.php`, `template-parts/`, `inc/`).
  - **Modern Hybrid Theme**: Classic PHP templates paired with modern WordPress 6.x `theme.json` (Schema v3) for Gutenberg block editor styling.
  - **Block Theme (FSE)**: Full Site Editing HTML block templates (`templates/index.html`, `templates/single.html`, `parts/header.html`, `parts/footer.html`, `theme.json`).
- **Optional Modular Features**:
  - **WooCommerce Boilerplate**: `inc/woocommerce.php`, template wrappers, cart count AJAX fragment, and `css/woocommerce.css`.
  - **Modular Sass (SCSS)**: Organized `sass/` directory with `abstracts/`, `base/`, `components/`, and `layout/`.
  - **Accessible Mobile Navigation**: `js/navigation.js` and `js/skip-link-focus-fix.js`.
  - **Dynamic Theme Screenshot**: Generates a valid 1200x900 `screenshot.png` with theme title, author, and version so WordPress displays a clean preview card.
- **Dual Interface**:
  - Interactive Web App (Vite + React + Tailwind CSS)
  - Headless Terminal CLI for build pipelines and scripts (`node bin/generate.js`)

---

## 🚀 Quick Start

### 1. Run the Web Application

```bash
# Navigate to project directory
cd wordpress-theme-dev

# Install dependencies (if not already done)
npm install

# Start local dev server
npm run dev
# Or
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 2. Run via Terminal CLI

You can also generate themes directly from the command line:

```bash
# Generate a classic starter theme folder
node bin/generate.js --name "Aura Theme" --slug "aura-theme"

# Generate a theme with WooCommerce and Sass support
node bin/generate.js --name "Storefront Starter" --woocommerce --sass

# Generate a Block Theme (Full Site Editing)
node bin/generate.js --name "Aura Block" --type "block"

# Generate as a downloadable .ZIP archive
node bin/generate.js --name "My Project" --zip --out ./themes
```

#### CLI Options:
| Flag | Description | Default |
| --- | --- | --- |
| `--name <string>` | Theme name | `Custom Theme` |
| `--slug <string>` | Theme slug and text domain | Sanitized name |
| `--author <string>` | Author name | `Anonymous` |
| `--author-uri <url>` | Author URL | `https://example.com` |
| `--desc <string>` | Theme description | - |
| `--type <type>` | `classic`, `hybrid`, or `block` | `classic` |
| `--woocommerce` | Include WooCommerce integration files | `false` |
| `--sass` | Include modular Sass (`sass/`) structure | `false` |
| `--out <dir>` | Destination folder | `./output` |
| `--zip` | Package output into a `.zip` archive | `false` |

---

## 📁 Generated Theme Structure (Classic)

```
your-theme/
├── 404.php                     # 404 Not Found template
├── archive.php                 # Category, tag, and date archives
├── comments.php                # Threaded comments template
├── footer.php                  # Site footer closing tags
├── functions.php               # Theme setup, enqueues, sidebars
├── header.php                  # DOCTYPE, <head>, header navigation
├── index.php                   # Fallback loop template
├── page.php                    # Static page template
├── readme.txt                  # Theme readme & changelog
├── screenshot.png              # 1200x900 WordPress theme thumbnail
├── search.php                  # Search results template
├── searchform.php              # Accessible search form markup
├── sidebar.php                 # Dynamic sidebar container
├── single.php                  # Single blog post template
├── style.css                   # Theme header block & CSS reset
├── theme.json                  # Gutenberg block styles & palette
├── css/
│   └── woocommerce.css         # (Optional) WooCommerce styling
├── inc/
│   ├── customizer.php          # Customizer live preview partials
│   ├── template-functions.php  # Body classes, pingback header
│   ├── template-tags.php       # posted_on(), posted_by(), entry_footer()
│   └── woocommerce.php         # (Optional) WooCommerce hooks & wrappers
├── js/
│   ├── navigation.js           # Accessible mobile menu toggle
│   └── skip-link-focus-fix.js  # Keyboard accessibility helper
├── sass/                       # (Optional) Modular Sass structure
└── template-parts/
    ├── content-none.php        # No posts found notice
    ├── content-page.php        # Page content loop
    ├── content-search.php      # Search result excerpt loop
    ├── content-single.php      # Single post content
    └── content.php             # General post content
```

---

## 🛠️ Installing into WordPress

1. Click **"Generate & Download {slug}.zip"** in the web app (or generate via CLI).
2. In your WordPress admin dashboard, navigate to **Appearance > Themes > Add New**.
3. Click **Upload Theme**, select your downloaded `.zip` file, and click **Install Now**.
4. Click **Activate**.
5. Start building! All template tags, function prefixes, and text domains are already calibrated for your project.

---

## 📄 License

GPL-2.0-or-later.
