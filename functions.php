<?php

require get_template_directory() .'/inc/database.php';
require get_template_directory() .'/inc/reservations.php';
require get_template_directory() .'/inc/options.php';

function restaurant_setup() {
	add_theme_support('post-thumbnails');

	add_image_size( 'boxes', 437, 291, true );
  add_image_size( 'specialties', 768, 515, true);
  add_image_size( 'specialty-portrait', 435, 530, true);
  update_option('thumbnail_size_w', 253);
	update_option('thumbnail_size_h', 164);

	
add_theme_support( 'title-tag' );
	
}

add_action('after_setup_theme', 'restaurant_setup');

function lapizzeria_custom_logo() {
	$logo = array(
		'height' => 200,
		'width' => 250
	);
	add_theme_support('custom-logo', $logo);
}

add_action('after_setup_theme', 'lapizzeria_custom_logo');

function restaurant_styles() {

	wp_register_style('googlefont', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700,900', array(), '1.0.0');
	wp_register_style('normalize', get_template_directory_uri() . '/css/normalize.css', array(), '1.0');
	wp_register_style('fluidboxcss', get_template_directory_uri() . '/css/fluidbox.min.css', array(), '1.0');
	wp_register_style('font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array('normalize'), '1.0');
	wp_register_style('style', get_template_directory_uri() . '/style.css', array('normalize'), '1.0');
	
	wp_enqueue_style('normalize');
	wp_enqueue_style('font-awesome');
	wp_enqueue_style('fluidboxcss');
	wp_enqueue_style('style');

	$apikey = esc_html(get_option('lapizzeria_gmap_apikey'));

	if(is_front_page()):
		wp_register_script('googlemaps', 'https://maps.googleapis.com/maps/api/js?key=' . $apikey .'&callback=initMap', array(), '',  true);
	endif;

	wp_register_script('fluidboxjs', get_template_directory_uri() . '/js/jquery.fluidbox.min.js', array('jquery'), '1.0', true);
	wp_register_script('script', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0', true);

	wp_enqueue_script('jquery');
	wp_enqueue_script('fluidboxjs');
	wp_enqueue_script('googlemaps');
	wp_enqueue_script('script');

	wp_localize_script(
		'script',
		'options',
		array(
			'lattitude' => esc_html( get_option('lapizzeria_gmap_latitude') ),
			'longitude' => esc_html( get_option('lapizzeria_gmap_longitude') ),
			'zoom' => esc_html( get_option('lapizzeria_gmap_zoom') )
		)
	);
	
}

function lapizzeria_admin_scripts() {

	wp_enqueue_style('sweetalert', get_template_directory_uri() . '/css/sweetalert.css' );
	wp_enqueue_script('sweetalertjs', get_template_directory_uri() . '/js/sweetalert.js', array('jquery'), 1.0, true );
	wp_enqueue_script('adminjs', get_template_directory_uri() . '/js/admin-ajax.js', array('jquery'), 1.0, true);

	wp_localize_script(
		'adminjs',
		'admin_ajax',
		array('ajaxurl' => admin_url('admin-ajax.php'))
	);
}

add_action('admin_enqueue_scripts', 'lapizzeria_admin_scripts');

add_action('wp_enqueue_scripts', 'restaurant_styles');

function restaurant_menus() {
	register_nav_menus(array(
		'header-menu' => __('Header Menu', 'restaurant'),
		'social-menu' => __('Social Menu', 'restaurant')
	));
}

add_action('init', 'restaurant_menus');

function register_breadcrumbs() {
	register_sidebar( array(
		'name' => 'breadcrumbs_in_header',
		'id'            => "breadcrumbs_in_header",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
	) );
}

add_action('widgets_init', 'register_breadcrumbs');

function pizzeria_widget() {
	register_sidebar( array(
		'name' => 'Blog Sidebar',
		'id'	 => 'blog_sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'		=> '</h3>'
	) );
}

add_action('widgets_init', 'pizzeria_widget');

function restaurant_specialties() {
	$labels = array(
		'name'								=> _x('Pizzas', 'restaurant'),
		'singular_name'				=> _x('Pizza', 'post type singular name', 'restaurant'),
		'menu_name'						=> _x('Pizzas', 'admin menu', 'restaurant'),
		'name_admin_bar'			=> _x('Pizzas', 'add new on admin bar', 'restaurant'),
		'add_new'							=> _x('Add New', 'book', 'restaurant'),
		'add_new_item'				=> __('Add New Pizza', 'restaurant'),
		'new_item'						=> __('New Pizzas', 'restaurant'),
		'edit_item'						=> __('Edit Pizzas', 'restaurant'),
		'view_item'						=> __('View Pizzas', 'restaurant'),
		'all_items'						=> __('All Pizzas', 'restaurant'),
		'search_items'				=> __('Search Pizzas', 'restaurant'),
		'parent_item_colon'		=> __('Parent Pizzas:', 'restaurant'),
		'not_found'						=> __('No Pizzas found', 'restaurant'),
		'not_found_in_trash'	=> __('No Pizzas found in trash', 'restaurant')
	);

	$args = array(
		'labels' 							=> $labels,
		'description'					=> __('Description', 'restaurant'),
		'public'							=> true,
		'publicly_queryable'	=> true,
		'show_ui'							=> true,
		'show_in_munu'				=> true,
		'query_var'						=> true,
		'rewrite'							=> array('slug' => 'specialties'),
		'capability_type'			=> 'post',
		'has_archive'					=> true,
		'hierarchical'				=> false,
		'menu_position'				=> 6,
		'supports'						=> array('title','editor','thumbnail'),
		'taxonomies'					=> array('category'),
	);
	register_post_type('specialties', $args);
}
add_action('init', 'restaurant_specialties');


//google map needs async and defer 
function add_async_defer($tag, $handle){
	if('googlemaps' !== $handle) {
		return $tag;
	} 
	return str_replace(' src', ' async="async" defer="defer" src', $tag);
}
add_filter('script_loader_tag', 'add_async_defer', 10, 2);
 

