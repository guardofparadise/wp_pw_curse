<?php get_header(); ?>

	<?php while(have_posts()) : the_post(); ?>

		<div class="hero" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);">
			<div class="hero-content">
				<div class="hero-text">
					<h2><?php echo esc_html( get_option('blog_description') ); ?></h2>
					<?php the_content(); ?>
					<?php $url = get_page_by_title('About Us'); ?>
					<a href="<?php echo get_permalink($url->ID); ?>" class="button secondary">more info</a>
				</div>
			</div>
		</div>
		
		<?php endwhile; ?>

		<div class="main-content container">
			<main class="container-grid clear">
				<h2 class="primary-text text-center">Our specialties</h2>

				<?php 
					$args = array(
						'posts_per_page' => 3,
						'post_type' => 'specialties',
						'category_name' => 'pizzas',
						'orderby' => 'rand'
					);
					$specialties = new WP_Query($args);
					while($specialties->have_posts()) : $specialties->the_post(); ?>
				
					<div class="specialty columns1-3">
						<div class="specialty-content">
							<?php the_post_thumbnail('specialty-portrait'); ?>
							<div class="information">
								<h3><?php the_title(); ?></h3>
								<?php the_content(); ?>
								<p class="price">$<?php the_field('price'); ?></p>
								<a href="<?php the_permalink(); ?>" class="button primary">read more</a>
							</div>
						</div>
					</div>

					<?php endwhile; wp_reset_postdata(); ?>
			</main>
		</div>

		<section class="ingredients">
			<div class="container">
				<div class="container-grid">
					
					<div class="columns2-4">
						<h3><?php the_field('ingredients'); ?></h3>
						<?php the_field('ingredients_text'); ?>
						<?php $url = get_page_by_title('About Us'); ?>
					<a href="<?php echo get_permalink($url->ID); ?>" class="button primary">more info</a>
					</div>
					<div class="columns2-4">
						<img src="<?php the_field('image'); ?>" alt="alt">
					</div>
				
				</div>
			</div>
		</section>

		<section class="container clear">
			<h2 class="primary-text text-center">Gallery</h2>
			<?php 
				$url = get_page_by_title('Gallery');
				echo get_post_gallery($url->ID);
			?>
		</section>

		<section class="location-reservation clear">
			<div class="container-grid">
				<div class="columns2-4">
					<div id="map">
						<img src="img/logo.svg" alt="logo">
					</div>
				</div>
				<div class="columns2-4">
				<?php get_template_part('templates/reservation', 'form') ?>
				</div>
			</div>
		</section>

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



<?php get_footer(); ?>