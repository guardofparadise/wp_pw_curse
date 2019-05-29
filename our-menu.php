<?php 
/*
* Template Name: Our Specialties
*/ 


get_header(); ?>

	<?php while(have_posts()) : the_post(); ?>

		<div class="hero" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);">
			<div class="hero-content">
				<div class="hero-text">
					<h2><?php the_title(); ?></h2>
				</div>
			</div>
		</div>

		<div class="main-content container">
			<main class="text-center content-text">
				<?php the_content(); ?>
			</main>
		</div>

	<?php endwhile; ?>

	<div class="out-specialties container">
		<h3 class="primary-text">
			Pizzas
		</h3>
		<div class="container-grid specialty-content">
			<?php 
			$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
			$args = array(
				'paged' => $paged,
				'posts_per_page' => 1,
				'post_type' => 'specialties',
				'posts_per_page' => 4,
				'order' => 'ASC',		
				'category_name' => 'pizzas'	
			);
			$pizzas = new WP_Query($args);
			while($pizzas->have_posts()) : $pizzas->the_post(); ?>
			<div class="columns2-4 ">
				<a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail('specialties'); ?>
					<h4><?php the_title(); ?><span><?php the_field('price'); ?></span></h4>
					<?php the_content(); ?>
				</a>
			</div>
			
			
			<?php endwhile; wp_reset_postdata(); ?>

						<?php 
			echo paginate_links(array(
				'total' => $pizzas->max_num_pages,
			)); ?>

		<h3 class="primary-text">
			Others
		</h3>

			<?php 
			$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
			$args = array(
				'paged' => $paged,
				'posts_per_page' => 1,
				'post_type' => 'specialties',
				'posts_per_page' => 4,
				'order' => 'ASC',		
				'category_name' => 'other'	
			);
			$pizzas = new WP_Query($args);
			while($pizzas->have_posts()) : $pizzas->the_post(); ?>
			<div class="columns2-4">
				<a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail('specialties'); ?>
					<h4><?php the_title(); ?><span><?php the_field('price'); ?></span></h4>
					<?php the_content(); ?>
				</a>
			</div>
			
			
			<?php endwhile; wp_reset_postdata(); ?>
			
		</div>
	</div>

<?php get_footer(); ?>