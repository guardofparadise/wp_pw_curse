<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Restaurant</title>
	<?php wp_head(); ?>
</head>
<body <?php body_class() ?>>

<header>
	<div class="container">
		<div class="logo">
			<a href="<?php echo esc_url( home_url('/') ); ?>">
				<img class="logoimage" src="<?php echo get_template_directory_uri() ?>/img/img/logo.svg" alt="logoimage">
			</a>
		</div>
		<div class="header-information">
			<div class="block_right">
				<div class="socials">
					<?php 
						$args = array(
							'theme_location' => 'social-menu',
							'container' => 'nav',
							'container_id' => 'socials',
							'container_class' => 'socials',
							'link_before' => '<span class="sr-text">',
							'link_after' => '</span>'
						);
						wp_nav_menu($args);
					?>
				</div>	
				<div class="address">
					<p>8342 Way Aney Mountain View VM 234234</p>
					<p>Phone Number: -324238 324289 890</p>
				</div>				
			</div>
			<div class="block_left">

			<?php if(is_active_sidebar('breadcrumbs_in_header') && !is_home())  : ?>
				<div class="breadcrumbs">
					<?php dynamic_sidebar('breadcrumbs_in_header'); ?>
				</div>
			<?php endif; ?>

			</div>

		</div>
	</div>
</header>


<nav class="main-menu">
<div class="mobile-menu">
		<a href="#" class="mobile"><i class="fa fa-bars" aria-hidden="true"></i> Menu </a>
		</div>
	<div class="navigation">
		<?php 
			$args = array(
				'theme_location' => 'header-menu',
				'container' => 'nav',
				'container_class' => 'site-nav'
			);
			wp_nav_menu($args);
		?>
	</div>
</nav>

