<?php

function restaurant_database() {
	global $wpdb;

	global $restaurant_db_version;
	$restaurant_db_version = '1.0';

	$table = $wpdb->prefix . 'reservation';

	$charset_collate = $wpdb->get_charset_collate();

	//SQL

	$sql = "CREATE TABLE $table(
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		name varchar(50) NOT NULL,
		date datetime NOT NULL,
		email varchar(50) DEFAULT '' NOT NULL,
		phone varchar(10) NOT NULL,
		message longtext NOT NULL,
		PRIMARY KEY (id)
	) $charset_collate;
	";

	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql);
}

add_action('after_setup_theme', 'restaurant_database');

?>