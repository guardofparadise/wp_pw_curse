<?php

function restaurant_setup() {
	add_theme_support('post-thumbnails');

	add_image_size( 'boxes', 437, 291, true );
  add_image_size( 'specialties', 768, 515, true);
  add_image_size( 'specialty-portrait', 435, 530, true);
  update_option('thumbnail_size_w', 253);
  update_option('thumbnail_size_h', 164);
}

add_action('after_setup_theme', 'restaurant_setup');

function restaurant_styles() {

	wp_register_style('googlefont', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700,900', array(), '1.0.0');
	wp_register_style('normalize', get_template_directory_uri() . '/css/normalize.css', array(), '1.0');
	wp_register_style('font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array('normalize'), '1.0');
	wp_register_style('style', get_template_directory_uri() . '/style.css', array('normalize'), '1.0');
	
	wp_enqueue_style('normalize');
	wp_enqueue_style('font-awesome');
	wp_enqueue_style('style');

	wp_register_script('script', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0', true);

	wp_enqueue_script('jquery');
	wp_enqueue_script('script');
}

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