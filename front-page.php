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

		<div class="main-content container">
			<main class="text-center content-text clear">

			</main>
		</div>

	<?php endwhile; ?>

<?php get_footer(); ?>