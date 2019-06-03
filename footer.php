		<footer>
			<?php
					$args = array(
						'theme_location' => 'header-menu',
						'container'  => 'nav',
						'after' =>  '<span class="seperator"> | </span>'
					);
					wp_nav_menu($args);
			?>

			<div class="location">
				<p>High Hills Down street Up road 434</p>
				<p>Phone Number: 123123 43242 123</p>
			</div>

			<p class="copyright"> All rights reserved <?php echo date('Y'); ?></p>

		</footer>
		<?php wp_footer(); ?>
	</body>
</html>