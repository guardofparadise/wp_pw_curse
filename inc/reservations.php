<?php 
	function restaurant_save_reservation() {
		global $wpdb;

		if(isset($_POST['res_reservation']) && $_POST['res_hidden'] == '1') {
			
			$res_name = $_POST['res_name'];
			$res_date = $_POST['res_date'];
			$res_email = $_POST['res_email'];
			$res_phone = $_POST['res_phone'];
			$res_message = $_POST['res_message'];
		
			$table = 'wp_reservation';

			$data = array(
				'name' => $res_name,
				'date' => $res_date,
				'email' => $res_email,
				'phone' => $res_phone,
				'message' => $res_message
			);

			$format = array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s'
			);
			try {
				$wpdb->insert($table, $data, $format);
				// $url = get_page_by_title('Thanks for your reservation!');
				// wp_redirect(get_permalink($url));
				// exit();				
			} catch (Exception $e) {
				// $url = get_page_by_title('Oops! Your email has not been sent…');
				// wp_redirect(get_permalink($url));
				// exit();				
			}

		}
	}

	add_action('init', 'restaurant_save_reservation');
?>