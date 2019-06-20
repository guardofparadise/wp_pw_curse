<?php 

function lapizzera_delete_reservation() {
	if($_POST['type'] == 'delete'):
		global $wpdb;

		$table = $wpdb->prefix . 'reservation';
		$id_reservation = $_POST['id'];

		$result = $wpdb->delete($table, array('id' => $id_reservation), array('%d'));

		if($result == 1) {
			$response = array(
				'response' => 'success',
				'id'  => $id_reservation
			);
		} else {
			$response = array(
				'response' => 'error'
			);
		}
	endif;
	die(json_encode($response));
}

add_action('wp_ajax_lapizzera_delete_reservation', 'lapizzera_delete_reservation');

function test_function(){
	global $wpdb;

			$name = sanitize_text_field($_POST['name']);
			$date = sanitize_text_field($_POST['date']);
			$email = sanitize_email($_POST['email']);
			$phone = sanitize_text_field($_POST['phone']);
			$message = sanitize_text_field($_POST['message']);	

		$data2 = array(
			'name' => $name,
			'date' => $date,
			'email' => $email,
			'phone' => $phone,
			'message' => $message,
		);

		foreach($data2 as $item) {
			if(empty($item)) return;
		}

		$format = array(
			'%s',
			'%s',
			'%s',
			'%s',
			'%s'
		);

		$table = $wpdb->prefix . 'reservation';

		try {
			$res = $wpdb->insert($table, $data2, $format);
				// $url = get_page_by_title('Thanks for your reservation!');
				// wp_redirect(get_permalink($url));
				// exit();
		} catch (Exception $e) {
				// $url = get_page_by_title('Oops! Your email has not been sent…');
				// wp_redirect(get_permalink($url));
				// exit();
		}
	}


add_action( 'wp_ajax_ajax-test', 'test_function' ); 
add_action( 'wp_ajax_nopriv_ajax-test', 'test_function' );  