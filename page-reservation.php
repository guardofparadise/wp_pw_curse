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
				<form class="reservation-form" method="post">
					<h2>Make a Reservation</h2>
					<div class="field">
						<input type="text" name="name_ee" placeholder="Name" required>
					</div>
					<div class="field">
						<input type="datetime-local" name="date_ee" placeholder="Date" required>
					</div>
					<div class="field">
						<input type="email" name="email_ee" placeholder="E-Mail">
					</div>
					<div class="field">
						<input type="text" name="phone_ee" placeholder="Phone Number" required>
					</div>
					<div class="field">
						<textarea name="message_ee" placeholder="Message" required></textarea>
					</div>
					<input type="submit" name="reservation_ee" class="button" value="Send">
					<input type="hidden" name="hidden_ee" value="1">
				</form>
			</div>
			</main>
		</div>

	<?php endwhile; ?>

<?php get_footer(); ?>