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
				'res_name' => $res_name,
				'res_date' => $res_date,
				'res_email' => $res_email,
				'res_phone' => $res_phone,
				'res_message' => $res_message
			);

			$format = array(
				'%s',
				'%s',
				'%s',
				'%s',
				'%s'
			);

			$wpdb->insert($table, $data, $format);
			$url = get_page_by_title('Thanks fory your reservation!');
			wp_redirect(get_permalink($url));
			exit();
		}
	}

	add_action('init', 'restaurant_save_reservation');
?>