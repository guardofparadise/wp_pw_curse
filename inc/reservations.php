<?php
  function lapizzeria1_save_reservation() {
    global $wpdb;
    if(isset($_POST['reservation_ee']) && $_POST['hidden_ee'] == "1") {
        $name_ee = sanitize_text_field( $_POST['name_ee'] );
        $date_ee = sanitize_text_field( $_POST['date_ee'] );
        $email_ee= sanitize_email( $_POST['email_ee'] );
        $phone_ee = sanitize_text_field( $_POST['phone_ee'] );
        $message_ee = sanitize_text_field( $_POST['message_ee'] );
        $table = $wpdb->prefix . 'reservation';
        $data = array(
          'name' => $name_ee,
          'date' => $date_ee,
          'email' => $email_ee,
          'phone' => $phone_ee,
          'message' => $message_ee
        );
        $format = array(
          '%s',
          '%s',
          '%s',
          '%s',
          '%s'
				);
				try{
					$wpdb->insert($table, $data, $format );

					$url = get_page_by_title('Thanks for your reservation!');
					wp_redirect( get_permalink($url) );
					exit();
				} catch(Exception $e) {
					$url = get_page_by_title('Oops! Your email has not been sent...');
					wp_redirect( get_permalink($url) );
					exit();
					echo $e;
				}
				
				

    }
  }
  add_action('init', 'lapizzeria1_save_reservation');
?>