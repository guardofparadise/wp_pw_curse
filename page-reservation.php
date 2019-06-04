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
			<div class="reservation-info">
				<form method="post" class="reservation-form">
					<div class="field">
						<input type="text" name="res_name" placeholder="Name" required>
					</div>
					<div class="field">
						<input type="datetime-local" name="res_date" placeholder="Date" required>
					</div>
					<div class="field">
						<input type="text" name="res_email" placeholder="E-mail" required>
					</div>
					<div class="field">
						<input type="tel" name="res_phone" placeholder="Phone Number" required>
					</div>
					<div class="field">
						<input type="textarea" name="message" placeholder="Message" required>
					</div>
					<input type="submit" name="res_reservation" value="Send" class="button">
					<input type="hidden" name="res_hidden" value="1">
				</form>
				
			</main>
		</div>

	<?php endwhile; ?>

<?php get_footer(); ?>