/**
 * Modular Sass (SCSS) Architecture for Underscores
 */

export function generateSassFiles(t) {
  const files = {};

  files['sass/style.scss'] = `/*!
Theme Name: ${t.themeName}
Theme URI: ${t.themeUri}
Author: ${t.author}
Author URI: ${t.authorUri}
Description: ${t.description}
Version: ${t.version}
License: ${t.license}
License URI: ${t.licenseUri}
Text Domain: ${t.textDomain}
Tags: ${t.tags}
*/

// 1. Abstracts
@import "abstracts/variables";
@import "abstracts/mixins";

// 2. Base
@import "base/reset";
@import "base/typography";

// 3. Components
@import "components/buttons";
@import "components/navigation";

// 4. Layout
@import "layout/header";
@import "layout/content";
@import "layout/sidebar";
@import "layout/footer";
`;

  files['sass/abstracts/_variables.scss'] = `// Color Palette
$color__primary: #0073aa;
$color__primary-hover: #005177;
$color__text-main: #333333;
$color__text-muted: #64748b;
$color__background-body: #ffffff;
$color__border: #e2e8f0;

// Typography
$font__main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$font__code: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;

// Layout
$size__site-max-width: 1200px;
$size__site-content-width: 640px;
$breakpoint__tablet: 48em;
$breakpoint__desktop: 64em;
`;

  files['sass/abstracts/_mixins.scss'] = `// Clearfix
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

// Media query helpers
@mixin for-tablet {
  @media screen and (min-width: $breakpoint__tablet) {
    @content;
  }
}

@mixin for-desktop {
  @media screen and (min-width: $breakpoint__desktop) {
    @content;
  }
}
`;

  files['sass/base/_reset.scss'] = `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: $font__main;
  font-size: 1rem;
  line-height: 1.6;
  color: $color__text-main;
  background-color: $color__background-body;
}

img {
  max-width: 100%;
  height: auto;
}
`;

  files['sass/base/_typography.scss'] = `h1, h2, h3, h4, h5, h6 {
  clear: both;
  margin: 1.5em 0 0.5em;
  font-weight: 700;
  line-height: 1.25;
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.85rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.1rem; }
h6 { font-size: 1rem; }

p {
  margin: 0 0 1.5em;
}

a {
  color: $color__primary;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: $color__primary-hover;
    text-decoration: none;
  }
}
`;

  files['sass/components/_buttons.scss'] = `button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  border: 1px solid $color__primary;
  border-radius: 4px;
  background: $color__primary;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: background 0.15s ease-in-out;

  &:hover,
  &:focus {
    background: $color__primary-hover;
    border-color: $color__primary-hover;
  }
}
`;

  files['sass/components/_navigation.scss'] = `.main-navigation {
  display: block;
  clear: both;

  ul {
    display: none;
    list-style: none;
    margin: 0;
    padding-left: 0;

    @include for-tablet {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  li {
    position: relative;
  }

  a {
    display: block;
    text-decoration: none;
    padding: 0.5em 1em;
  }
}

.menu-toggle {
  display: block;
  margin: 1em 0;

  @include for-tablet {
    display: none;
  }
}
`;

  files['sass/layout/_header.scss'] = `.site-header {
  border-bottom: 1px solid $color__border;
  padding: 1.5em 0;

  .site-branding {
    max-width: $size__site-max-width;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}

.site-title {
  font-size: 1.75rem;
  margin: 0;

  a {
    text-decoration: none;
    color: #1e293b;
  }
}
`;

  files['sass/layout/_content.scss'] = `.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex-grow: 1;
  max-width: $size__site-max-width;
  width: 90%;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @include for-tablet {
    flex-direction: row;
  }
}

.content-area {
  @include for-tablet {
    flex: 1 1 65%;
  }
}
`;

  files['sass/layout/_sidebar.scss'] = `.widget-area {
  @include for-tablet {
    flex: 1 1 30%;
  }
}

.widget {
  margin-bottom: 2em;
}

.widget-title {
  font-size: 1.2rem;
  margin-top: 0;
  padding-bottom: 0.5em;
  border-bottom: 2px solid $color__primary;
}
`;

  files['sass/layout/_footer.scss'] = `.site-footer {
  border-top: 1px solid $color__border;
  padding: 2em 0;
  text-align: center;
  color: $color__text-muted;
  font-size: 0.9rem;
}
`;

  return files;
}
