$ = jQuery.noConflict();

$(document).ready(function(){

	// Ocultar y Mostrar menu
	$('.mobile-menu a').on('click', function(){
		$('nav.site-nav').toggle('slow');
	});

	// Reaccinaer a Resize en la pantalla
	var breakpoint = 768;

	$(window).resize(function(){
		if($(document).width() >= breakpoint){
			$('nav.site-nav').show();
		}else{
			$('nav.site-nav').hide();
		}
	});

});