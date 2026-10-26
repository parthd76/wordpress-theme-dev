/**
 * WooCommerce Boilerplate Templates for Underscores
 */

export function generateWooCommerceFiles(t) {
  const files = {};

  files['inc/woocommerce.php'] = `<?php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package ${t.packageName}
 */

/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)
 *
 * @return void
 */
function ${t.functionPrefix}woocommerce_setup() {
	add_theme_support(
		'woocommerce',
		array(
			'thumbnail_image_width' => 320,
			'single_image_width'    => 600,
			'product_grid'          => array(
				'default_rows'    => 3,
				'min_rows'        => 1,
				'default_columns' => 4,
				'min_columns'     => 1,
				'max_columns'     => 6,
			),
		)
	);
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', '${t.functionPrefix}woocommerce_setup' );

/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function ${t.functionPrefix}woocommerce_scripts() {
	wp_enqueue_style( '${t.slug}-woocommerce-style', get_template_directory_uri() . '/css/woocommerce.css', array(), ${t.constantPrefix}VERSION );

	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style( '${t.slug}-woocommerce-style', $inline_font );
}
add_action( 'wp_enqueue_scripts', '${t.functionPrefix}woocommerce_scripts' );

/**
 * Disable the default WooCommerce stylesheet wrappers.
 */
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

if ( ! function_exists( '${t.functionPrefix}woocommerce_wrapper_before' ) ) {
	/**
	 * Before Content.
	 *
	 * Wraps all WooCommerce content in wrappers which match the theme markup.
	 *
	 * @return void
	 */
	function ${t.functionPrefix}woocommerce_wrapper_before() {
		?>
		<main id="primary" class="site-main content-area">
		<?php
	}
}
add_action( 'woocommerce_before_main_content', '${t.functionPrefix}woocommerce_wrapper_before' );

if ( ! function_exists( '${t.functionPrefix}woocommerce_wrapper_after' ) ) {
	/**
	 * After Content.
	 *
	 * Closes the wrapping divs.
	 *
	 * @return void
	 */
	function ${t.functionPrefix}woocommerce_wrapper_after() {
		?>
		</main><!-- #primary -->
		<?php
	}
}
add_action( 'woocommerce_after_main_content', '${t.functionPrefix}woocommerce_wrapper_after' );

/**
 * Sample implementation of the WooCommerce Mini Cart.
 *
 * You can add the following code to your header.php:
 *
 * <?php
 * if ( function_exists( '${t.functionPrefix}woocommerce_header_cart' ) ) {
 * 	${t.functionPrefix}woocommerce_header_cart();
 * }
 * ?>
 */
if ( ! function_exists( '${t.functionPrefix}woocommerce_cart_link' ) ) {
	/**
	 * Cart Link.
	 *
	 * Displayed a link to the cart including the number of items present and the cart total.
	 *
	 * @return void
	 */
	function ${t.functionPrefix}woocommerce_cart_link() {
		?>
		<a class="cart-contents" href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', '${t.textDomain}' ); ?>">
			<?php
			$item_count_text = sprintf(
				/* translators: number of items in the mini cart. */
				_n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), '${t.textDomain}' ),
				WC()->cart->get_cart_contents_count()
			);
			?>
			<span class="amount"><?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?></span> <span class="count"><?php echo esc_html( $item_count_text ); ?></span>
		</a>
		<?php
	}
}

if ( ! function_exists( '${t.functionPrefix}woocommerce_header_cart' ) ) {
	/**
	 * Display Header Cart.
	 *
	 * @return void
	 */
	function ${t.functionPrefix}woocommerce_header_cart() {
		if ( is_cart() ) {
			$class = 'current-menu-item';
		} else {
			$class = '';
		}
		?>
		<ul id="site-header-cart" class="site-header-cart menu">
			<li class="<?php echo esc_attr( $class ); ?>">
				<?php ${t.functionPrefix}woocommerce_cart_link(); ?>
			</li>
			<li>
				<?php
				$instance = array(
					'title' => '',
				);

				the_widget( 'WC_Widget_Cart', $instance );
				?>
			</li>
		</ul>
		<?php
	}
}
`;

  files['css/woocommerce.css'] = `/**
 * WooCommerce Starter Stylesheet
 */

.woocommerce ul.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2em;
  list-style: none;
  padding: 0;
  margin: 2em 0;
}

.woocommerce ul.products li.product {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25em;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.woocommerce ul.products li.product:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
}

.woocommerce ul.products li.product img {
  border-radius: 4px;
  margin-bottom: 1em;
}

.woocommerce span.onsale {
  background-color: #ef4444;
  color: #ffffff;
  padding: 0.25em 0.75em;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 9999px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.woocommerce a.button,
.woocommerce button.button,
.woocommerce input.button {
  background-color: #0073aa;
  color: #ffffff;
  border-radius: 4px;
  padding: 0.75em 1.5em;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.woocommerce a.button:hover,
.woocommerce button.button:hover,
.woocommerce input.button:hover {
  background-color: #005177;
}

.woocommerce .quantity .qty {
  width: 4em;
  text-align: center;
  padding: 0.5em;
}
`;

  return files;
}
