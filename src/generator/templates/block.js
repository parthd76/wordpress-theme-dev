/**
 * Full Site Editing (FSE) / Block Theme Generator
 */
import { generateThemeJson } from './themejson.js';

export function generateBlockTheme(t) {
  const files = {};

  // 1. style.css (Required minimal theme header)
  files['style.css'] = `/*
Theme Name: ${t.themeName}
Theme URI: ${t.themeUri}
Author: ${t.author}
Author URI: ${t.authorUri}
Description: ${t.description}
Version: ${t.version}
Requires at least: ${t.minWpVersion}
Tested up to: ${t.minWpVersion}
Requires PHP: ${t.minPhpVersion}
License: ${t.license}
License URI: ${t.licenseUri}
Text Domain: ${t.textDomain}
Tags: full-site-editing, block-themes, ${t.tags}
*/
`;

  // 2. theme.json
  files['theme.json'] = generateThemeJson(t);

  // 3. functions.php
  files['functions.php'] = `<?php
/**
 * ${t.themeName} functions and definitions
 *
 * @link ${t.themeUri}
 *
 * @package ${t.packageName}
 */

if ( ! defined( '${t.constantPrefix}VERSION' ) ) {
	define( '${t.constantPrefix}VERSION', '${t.version}' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function ${t.functionPrefix}setup() {
	load_theme_textdomain( '${t.textDomain}', get_template_directory() . '/languages' );
	add_theme_support( 'wp-block-styles' );
	add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', '${t.functionPrefix}setup' );

/**
 * Enqueue scripts and styles.
 */
function ${t.functionPrefix}scripts() {
	wp_enqueue_style( '${t.slug}-style', get_stylesheet_uri(), array(), ${t.constantPrefix}VERSION );
}
add_action( 'wp_enqueue_scripts', '${t.functionPrefix}scripts' );
`;

  // 4. parts/header.html
  files['parts/header.html'] = `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:group {"layout":{"type":"flex"}} -->
		<div class="wp-block-group">
			<!-- wp:site-logo {"width":60} /-->
			<!-- wp:site-title {"level":1} /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:navigation {"layout":{"type":"flex","setCascadingProperties":true,"justifyContent":"right"}} /-->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
`;

  // 5. parts/footer.html
  files['parts/footer.html'] = `<!-- wp:group {"layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"3rem","bottom":"3rem"}}}} -->
<div class="wp-block-group" style="padding-top:3rem;padding-bottom:3rem">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size">Proudly powered by <a href="https://wordpress.org">WordPress</a></p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size">${t.themeName} by <a href="${t.authorUri}">${t.author}</a></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
`;

  // 6. templates/index.html
  files['templates/index.html'] = `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:query {"queryId":1,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"align":"wide"} -->
			<!-- wp:post-title {"isLink":true} /-->
			<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
			<!-- wp:post-excerpt {"moreText":"Read more..."} /-->
			<!-- wp:post-date /-->
			<!-- wp:spacer {"height":"2rem"} -->
			<div style="height:2rem" aria-hidden="true" class="wp-block-spacer"></div>
			<!-- /wp:spacer -->
		<!-- /wp:post-template -->

		<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"space-between"}} -->
			<!-- wp:query-pagination-previous /-->
			<!-- wp:query-pagination-numbers /-->
			<!-- wp:query-pagination-next /-->
		<!-- /wp:query-pagination -->
	</div>
	<!-- /wp:query -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

  // 7. templates/single.html
  files['templates/single.html'] = `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:post-title {"level":1} /-->
	<!-- wp:group {"layout":{"type":"flex"}} -->
	<div class="wp-block-group">
		<!-- wp:post-date /-->
		<!-- wp:post-author {"showAvatar":true} /-->
	</div>
	<!-- /wp:group -->
	<!-- wp:post-featured-image /-->
	<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
	<!-- wp:comments /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

  // 8. templates/page.html
  files['templates/page.html'] = `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:post-title {"level":1} /-->
	<!-- wp:post-featured-image /-->
	<!-- wp:post-content {"layout":{"type":"constrained"}} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

  // 9. templates/404.html
  files['templates/404.html'] = `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"5rem","bottom":"5rem"}}}} -->
<main class="wp-block-group" style="padding-top:5rem;padding-bottom:5rem">
	<!-- wp:heading {"level":1} -->
	<h1>Oops! That page can't be found.</h1>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p>It looks like nothing was found at this location. Maybe try a search?</p>
	<!-- /wp:paragraph -->
	<!-- wp:search {"showLabel":false,"buttonText":"Search"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

  // 10. readme.txt
  files['readme.txt'] = `=== ${t.themeName} ===
Contributors: ${t.author}
Tags: full-site-editing, block-themes, ${t.tags}
Requires at least: ${t.minWpVersion}
Tested up to: ${t.minWpVersion}
Requires PHP: ${t.minPhpVersion}
Stable tag: ${t.version}
License: ${t.license}
License URI: ${t.licenseUri}

${t.description}

A modern Full Site Editing (FSE) block theme generated via WordPress Theme Dev.
`;

  return files;
}
