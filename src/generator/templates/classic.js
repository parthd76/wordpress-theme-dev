/**
 * Classic Underscores (_s) Template Generator
 */

export function generateClassicTheme(t) {
  const files = {};

  // 1. style.css
  files['style.css'] = `/*
Theme Name: ${t.themeName}
Theme URI: ${t.themeUri}
Author: ${t.author}
Author URI: ${t.authorUri}
Description: ${t.description}
Version: ${t.version}
Tested up to: ${t.minWpVersion}
Requires PHP: ${t.minPhpVersion}
License: ${t.license}
License URI: ${t.licenseUri}
Text Domain: ${t.textDomain}
Tags: ${t.tags}

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 Normalize & Reset
2.0 Typography
3.0 Elements (Links, Tables, Forms)
4.0 Accessibility & Alignments
5.0 Navigation & Menus
6.0 Layout & Content
7.0 Comments
8.0 Widgets & Sidebar
9.0 Media & Embeds
--------------------------------------------------------------*/

/*--------------------------------------------------------------
1.0 Normalize & Reset
--------------------------------------------------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
  background-color: #ffffff;
}

/*--------------------------------------------------------------
2.0 Typography
--------------------------------------------------------------*/
h1, h2, h3, h4, h5, h6 {
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

dfn, cite, em, i {
  font-style: italic;
}

blockquote {
  margin: 1.5em 0;
  padding: 0 0 0 1.5em;
  border-left: 4px solid #0073aa;
  font-style: italic;
}

code, kbd, tt, var {
  font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
  font-size: 0.9em;
}

pre {
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1.2em;
  background: #f5f5f5;
  border-radius: 4px;
}

/*--------------------------------------------------------------
3.0 Elements
--------------------------------------------------------------*/
a {
  color: #0073aa;
  text-decoration: underline;
  transition: color 0.15s ease-in-out;
}

a:hover,
a:focus,
a:active {
  color: #005177;
  text-decoration: none;
}

ul, ol {
  margin: 0 0 1.5em 2em;
  padding: 0;
}

table {
  margin: 0 0 1.5em;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5em;
  border: 1px solid #e2e8f0;
  text-align: left;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  border: 1px solid #0073aa;
  border-radius: 4px;
  background: #0073aa;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}

button:hover,
input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
  background: #005177;
  border-color: #005177;
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
textarea,
select {
  width: 100%;
  padding: 0.6em 0.8em;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #0073aa;
  border-color: #0073aa;
}

/*--------------------------------------------------------------
4.0 Accessibility & Alignments
--------------------------------------------------------------*/
.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: #f1f1f1;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  clip-path: none;
  color: #21759b;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

.alignleft {
  float: left;
  margin-right: 1.5em;
  margin-bottom: 1.5em;
}

.alignright {
  float: right;
  margin-left: 1.5em;
  margin-bottom: 1.5em;
}

.aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
}

/*--------------------------------------------------------------
5.0 Navigation & Menus
--------------------------------------------------------------*/
.main-navigation {
  display: block;
  clear: both;
}

.main-navigation ul {
  display: none;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.main-navigation ul ul {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  float: left;
  position: absolute;
  top: 100%;
  left: -999em;
  z-index: 99999;
  background-color: #ffffff;
}

.main-navigation ul ul ul {
  left: -999em;
  top: 0;
}

.main-navigation ul ul li:hover > ul,
.main-navigation ul ul li.focus > ul {
  left: 100%;
}

.main-navigation ul ul a {
  width: 200px;
}

.main-navigation ul li:hover > ul,
.main-navigation ul li.focus > ul {
  left: auto;
}

.main-navigation li {
  position: relative;
}

.main-navigation a {
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
}

.menu-toggle {
  display: block;
  margin: 1em 0;
}

@media screen and (min-width: 48em) {
  .menu-toggle {
    display: none;
  }
  .main-navigation ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}

/*--------------------------------------------------------------
6.0 Layout & Content
--------------------------------------------------------------*/
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex-grow: 1;
  max-width: 1200px;
  width: 90%;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
}

@media screen and (min-width: 48em) {
  .site-content {
    flex-direction: row;
  }
  .content-area {
    flex: 1 1 65%;
  }
  .widget-area {
    flex: 1 1 30%;
  }
}

.site-header {
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5em 0;
}

.site-header .site-branding {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.site-title {
  font-size: 1.75rem;
  margin: 0;
}

.site-title a {
  text-decoration: none;
  color: #1e293b;
}

.site-description {
  margin: 0.25em 0 0;
  color: #64748b;
  font-size: 0.95rem;
}

.site-footer {
  border-top: 1px solid #e2e8f0;
  padding: 2em 0;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
}

/* Post Entries */
.entry-header {
  margin-bottom: 1.25em;
}

.entry-title {
  margin-top: 0;
}

.entry-meta {
  color: #64748b;
  font-size: 0.9rem;
}

.entry-footer {
  margin-top: 2em;
  padding-top: 1em;
  border-top: 1px solid #f1f5f9;
  color: #64748b;
  font-size: 0.875rem;
}

.post-thumbnail img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 1.5em;
}

/*--------------------------------------------------------------
7.0 Comments
--------------------------------------------------------------*/
.comments-area {
  margin-top: 3em;
  padding-top: 2em;
  border-top: 2px solid #f1f5f9;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-body {
  padding: 1em;
  margin-bottom: 1.5em;
  background: #f8fafc;
  border-radius: 6px;
}

/*--------------------------------------------------------------
8.0 Widgets
--------------------------------------------------------------*/
.widget {
  margin-bottom: 2em;
}

.widget-title {
  font-size: 1.2rem;
  margin-top: 0;
  padding-bottom: 0.5em;
  border-bottom: 2px solid #0073aa;
}

.widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.widget li {
  padding: 0.4em 0;
  border-bottom: 1px solid #f1f5f9;
}

/*--------------------------------------------------------------
9.0 Media & Embeds
--------------------------------------------------------------*/
img {
  max-width: 100%;
  height: auto;
}
`;

  // 2. functions.php
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
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 */
	load_theme_textdomain( '${t.textDomain}', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', '${t.textDomain}' ),
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'${t.functionPrefix}custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);

	// Gutenberg / Block editor supports
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'editor-styles' );
}
add_action( 'after_setup_theme', '${t.functionPrefix}setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function ${t.functionPrefix}content_width() {
	$GLOBALS['content_width'] = apply_filters( '${t.functionPrefix}content_width', 640 );
}
add_action( 'after_setup_theme', '${t.functionPrefix}content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function ${t.functionPrefix}widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', '${t.textDomain}' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', '${t.textDomain}' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', '${t.functionPrefix}widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ${t.functionPrefix}scripts() {
	wp_enqueue_style( '${t.slug}-style', get_stylesheet_uri(), array(), ${t.constantPrefix}VERSION );

	if ( wp_style_is( '${t.slug}-style', 'enqueued' ) ) {
		wp_style_add_data( '${t.slug}-style', 'rtl', 'replace' );
	}

${t.includeNavigationJs ? `	wp_enqueue_script( '${t.slug}-navigation', get_template_directory_uri() . '/js/navigation.js', array(), ${t.constantPrefix}VERSION, true );
	wp_enqueue_script( '${t.slug}-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), ${t.constantPrefix}VERSION, true );
` : ''}
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '${t.functionPrefix}scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
${t.includeWooCommerce ? `
/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}
` : ''}`;

  // 3. header.php
  files['header.php'] = `<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ${t.packageName}
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', '${t.textDomain}' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<div class="site-identity">
				<?php
				the_custom_logo();
				if ( is_front_page() && is_home() ) :
					?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php
				else :
					?>
					<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php
				endif;
				$${t.functionPrefix}description = get_bloginfo( 'description', 'display' );
				if ( $${t.functionPrefix}description || is_customize_preview() ) :
					?>
					<p class="site-description"><?php echo $${t.functionPrefix}description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
				<?php endif; ?>
			</div><!-- .site-identity -->

			<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Menu', '${t.textDomain}' ); ?>">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', '${t.textDomain}' ); ?></button>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					)
				);
				?>
			</nav><!-- #site-navigation -->
		</div><!-- .site-branding -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
`;

  // 4. footer.php
  files['footer.php'] = `<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content up inside <footer>
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ${t.packageName}
 */

?>
	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', '${t.textDomain}' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', '${t.textDomain}' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
			<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %1$s by %2$s.', '${t.textDomain}' ), '${t.themeName}', '<a href="' . esc_url( '${t.authorUri}' ) . '">' . esc_html( '${t.author}' ) . '</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
`;

  // 5. index.php
  files['index.php'] = `<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
`;

  // 6. single.php
  files['single.php'] = `<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

			the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', '${t.textDomain}' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', '${t.textDomain}' ) . '</span> <span class="nav-title">%title</span>',
				)
			);

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
`;

  // 7. page.php
  files['page.php'] = `<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
`;

  // 8. archive.php
  files['archive.php'] = `<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
`;

  // 9. search.php
  files['search.php'] = `<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search Results for: %s', '${t.textDomain}' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
`;

  // 10. searchform.php
  files['searchform.php'] = `<?php
/**
 * The searchform.php template.
 *
 * Used any time that get_search_form() is called.
 *
 * @package ${t.packageName}
 */

?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', '${t.textDomain}' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', '${t.textDomain}' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
	</label>
	<button type="submit" class="search-submit"><?php echo esc_html_x( 'Search', 'submit button', '${t.textDomain}' ); ?></button>
</form>
`;

  // 11. 404.php
  files['404.php'] = `<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package ${t.packageName}
 */

get_header();
?>

	<main id="primary" class="site-main content-area">

		<section class="error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', '${t.textDomain}' ); ?></h1>
			</header><!-- .page-header -->

			<div class="page-content">
				<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', '${t.textDomain}' ); ?></p>

				<?php
				get_search_form();

				the_widget( 'WP_Widget_Recent_Posts' );
				?>

				<div class="widget widget_categories">
					<h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', '${t.textDomain}' ); ?></h2>
					<ul>
						<?php
						wp_list_categories(
							array(
								'orderby'    => 'count',
								'order'      => 'DESC',
								'show_count' => 1,
								'title_li'   => '',
								'number'     => 10,
							)
						);
						?>
					</ul>
				</div><!-- .widget -->

				<?php
				/* translators: %1$s: smiley */
				$${t.functionPrefix}archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', '${t.textDomain}' ), convert_smilies( ':)' ) ) . '</p>';
				the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$${t.functionPrefix}archive_content" );

				the_widget( 'WP_Widget_Tag_Cloud' );
				?>

			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #primary -->

<?php
get_footer();
`;

  // 12. comments.php
  files['comments.php'] = `<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php
	// You can start editing here -- including this comment!
	if ( have_comments() ) :
		?>
		<h2 class="comments-title">
			<?php
			$${t.functionPrefix}comment_count = get_comments_number();
			if ( '1' === $${t.functionPrefix}comment_count ) {
				printf(
					/* translators: 1: title. */
					esc_html__( 'One thought on &ldquo;%1$s&rdquo;', '${t.textDomain}' ),
					'<span>' . wp_kses_post( get_the_title() ) . '</span>'
				);
			} else {
				printf( 
					/* translators: 1: comment count number, 2: title. */
					esc_html( _nx( '%1$s thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $${t.functionPrefix}comment_count, 'comments title', '${t.textDomain}' ) ),
					number_format_i18n( $${t.functionPrefix}comment_count ),
					'<span>' . wp_kses_post( get_the_title() ) . '</span>'
				);
			}
			?>
		</h2><!-- .comments-title -->

		<?php the_comments_navigation(); ?>

		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style'      => 'ol',
					'short_ping' => true,
				)
			);
			?>
		</ol><!-- .comment-list -->

		<?php
		the_comments_navigation();

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) :
			?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.', '${t.textDomain}' ); ?></p>
			<?php
		endif;

	endif; // Check for have_comments().

	comment_form();
	?>

</div><!-- #comments -->
`;

  // 13. sidebar.php
  files['sidebar.php'] = `<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ${t.packageName}
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
`;

  // 14. template-parts/content.php
  files['template-parts/content.php'] = `<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php
				${t.functionPrefix}posted_on();
				${t.functionPrefix}posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php ${t.functionPrefix}post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', '${t.textDomain}' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '${t.textDomain}' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php ${t.functionPrefix}entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
`;

  // 15. template-parts/content-page.php
  files['template-parts/content-page.php'] = `<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<?php ${t.functionPrefix}post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '${t.textDomain}' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit <span class="screen-reader-text">%s</span>', '${t.textDomain}' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
`;

  // 16. template-parts/content-single.php
  files['template-parts/content-single.php'] = files['template-parts/content.php'];

  // 17. template-parts/content-none.php
  files['template-parts/content-none.php'] = `<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

?>

<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', '${t.textDomain}' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) :

			printf(
				'<p>' . wp_kses(
					/* translators: 1: link to WP admin new post page. */
					__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', '${t.textDomain}' ),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url( admin_url( 'post-new.php' ) )
			);

		elseif ( is_search() ) :
			?>

			<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', '${t.textDomain}' ); ?></p>
			<?php
			get_search_form();

		else :
			?>

			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', '${t.textDomain}' ); ?></p>
			<?php
			get_search_form();

		endif;
		?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
`;

  // 18. template-parts/content-search.php
  files['template-parts/content-search.php'] = `<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ${t.packageName}
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php
			${t.functionPrefix}posted_on();
			${t.functionPrefix}posted_by();
			?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php ${t.functionPrefix}post_thumbnail(); ?>

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

	<footer class="entry-footer">
		<?php ${t.functionPrefix}entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
`;

  // 19. inc/template-tags.php
  files['inc/template-tags.php'] = `<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package ${t.packageName}
 */

if ( ! function_exists( '${t.functionPrefix}posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function ${t.functionPrefix}posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			/* translators: %s: post date. */
			esc_html_x( 'Posted on %s', 'post date', '${t.textDomain}' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);

		echo '<span class="posted-on">' . $posted_on . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( '${t.functionPrefix}posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function ${t.functionPrefix}posted_by() {
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', '${t.textDomain}' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);

		echo '<span class="byline"> ' . $byline . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( '${t.functionPrefix}entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function ${t.functionPrefix}entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', '${t.textDomain}' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', '${t.textDomain}' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', '${t.textDomain}' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', '${t.textDomain}' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link(
				sprintf(
					wp_kses(
						/* translators: %s: post title */
						__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', '${t.textDomain}' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);
			echo '</span>';
		}

		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Edit <span class="screen-reader-text">%s</span>', '${t.textDomain}' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			),
			'<span class="edit-link">',
			'</span>'
		);
	}
endif;

if ( ! function_exists( '${t.functionPrefix}post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 */
	function ${t.functionPrefix}post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php
					the_post_thumbnail(
						'post-thumbnail',
						array(
							'alt' => the_title_attribute(
								array(
									'echo' => false,
								)
							),
						)
					);
				?>
			</a>

			<?php
		endif; // End is_singular().
	}
endif;
`;

  // 20. inc/template-functions.php
  files['inc/template-functions.php'] = `<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package ${t.packageName}
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function ${t.functionPrefix}body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', '${t.functionPrefix}body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function ${t.functionPrefix}pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', '${t.functionPrefix}pingback_header' );
`;

  // 21. inc/customizer.php
  files['inc/customizer.php'] = `<?php
/**
 * ${t.themeName} Theme Customizer
 *
 * @package ${t.packageName}
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function ${t.functionPrefix}customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => '${t.functionPrefix}customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => '${t.functionPrefix}customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', '${t.functionPrefix}customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function ${t.functionPrefix}customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function ${t.functionPrefix}customize_partial_blogdescription() {
	bloginfo( 'description' );
}
`;

  // 22. js/navigation.js
  if (t.includeNavigationJs) {
    files['js/navigation.js'] = `/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function() {
	const siteNavigation = document.getElementById('site-navigation');

	// Return early if the navigation doesn't exist.
	if (!siteNavigation) {
		return;
	}

	const button = siteNavigation.querySelector('button');

	// Return early if the button doesn't exist.
	if (!button) {
		return;
	}

	const menu = siteNavigation.querySelector('ul');

	// Hide menu toggle button if menu is empty and return early.
	if (!menu) {
		button.style.display = 'none';
		return;
	}

	if (!menu.classList.contains('nav-menu')) {
		menu.classList.add('nav-menu');
	}

	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
	button.addEventListener('click', function() {
		siteNavigation.classList.toggle('toggled');

		if (button.getAttribute('aria-expanded') === 'true') {
			button.setAttribute('aria-expanded', 'false');
		} else {
			button.setAttribute('aria-expanded', 'true');
		}
	});

	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
	document.addEventListener('click', function(event) {
		const isClickInside = siteNavigation.contains(event.target);

		if (!isClickInside) {
			siteNavigation.classList.remove('toggled');
			button.setAttribute('aria-expanded', 'false');
		}
	});

	// Get all the link elements within the menu.
	const links = menu.getElementsByTagName('a');

	// Each time a menu link is focused or blurred, toggle focus.
	for (const link of links) {
		link.addEventListener('focus', toggleFocus, true);
		link.addEventListener('blur', toggleFocus, true);
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		if (event.type === 'focus' || event.type === 'blur') {
			let self = this;
			// Move up through the ancestors of the current link until we reach .nav-menu
			while (!self.classList.contains('nav-menu')) {
				// On li elements toggle the class .focus.
				if ('li' === self.tagName.toLowerCase()) {
					self.classList.toggle('focus');
				}
				self = self.parentElement;
			}
		}
	}
})();
`;

    // 23. js/skip-link-focus-fix.js
    files['js/skip-link-focus-fix.js'] = `/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function() {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function() {
			var id = location.hash.substring(1),
				element;

			if (!(/^[A-z0-9_-]+$/.test(id))) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();
`;
  }

  // 24. readme.txt
  files['readme.txt'] = `=== ${t.themeName} ===
Contributors: ${t.author}
Tags: ${t.tags}
Requires at least: ${t.minWpVersion}
Tested up to: ${t.minWpVersion}
Requires PHP: ${t.minPhpVersion}
Stable tag: ${t.version}
License: ${t.license}
License URI: ${t.licenseUri}

${t.description}

== Description ==

${t.themeName} is a clean, minimal WordPress starter theme created with WordPress Theme Dev.
It is built as a clean, solid foundation for developers creating custom themes with semantic HTML5,
full accessibility features, and modern WordPress coding standards.

== Installation ==

1. In your WordPress admin panel, go to Appearance > Themes > Add New.
2. Click "Upload Theme" and choose the ${t.slug}.zip file.
3. Click "Install Now" and then "Activate".

== Changelog ==

= 1.0.0 =
* Initial release generated via WordPress Theme Dev.
`;

  return files;
}
