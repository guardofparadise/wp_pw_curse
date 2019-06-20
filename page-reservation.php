<?php
/*
* Template Name: Contact Us
*/
?>
<?php get_header(); ?>

	<?php while(have_posts()) : the_post(); ?>

		<div class="hero" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);">
			<div class="hero-content">
				<div class="hero-text">
					<h2><?php the_title(); ?></h2>
				</div>
			</div>
		</div>

		<div class="main-content container reservation">
			<main class="text-center content-text clear">
				<?php get_template_part('templates/reservation', 'form') ?>
			</main>
		</div>

	<?php endwhile; ?>




<?php get_footer(); ?>
<script>
jQuery(function($){
	$('.submit_reserv').click(function(e){
		e.preventDefault();
		$.ajax({
			url: '<?php echo admin_url("admin-ajax.php") ?>',
			type: 'POST',
			data: {
				action: 'ajax-test',
				name: $('input[name=res_name]').val(),
				date: $('input[name=res_date]').val(),
				email: $('input[name=res_email]').val(),
				phone: $('input[name=res_phone]').val(),
				message: $('input[name=res_message]').val(),
				form_type: $('input[name=res_hidden]').val()
			}, 
			beforeSend: function( xhr ) {
				$('.submit_reserv').text('Загрузка, 5 сек...');	
			},
			success: function( data ) {
				$('.submit_reserv').text('Отправить');	
				$('input[name]').val('');
				$('input[name=res_reservation]').val('Send!');
				return data;
			},
			error: function() {
				alert(1);
			},
			complete: function() {
				alert('complete');
			}
		});
	});
});
	</script>