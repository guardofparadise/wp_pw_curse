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

	console.log('sdf')
	$('.gallery a').each(function() {$(this).attr({'data-fluidbox': ''})})

	if ($('[data-fluidbox]').length > 0) {
			$('[data-fluidbox]').fluidbox();
	}

});


// $('.submit_reserv').on('click', function(e) {
// 	e.preventDefault();
// 	var data = {
// 		action: 'reserver',
// 		name: $('input[name=res_name]').val(),
// 		date: $('input[name=res_date]').val(),
// 		email: $('input[name=res_email]').val(),
// 		phone: $('input[name=res_phone]').val(),
// 		message: $('input[name=res_message]').val(),
// 		form_type: $('input[name=res_hidden]').val()
// 	};

// 	$.post(window.wp.ajax_url, data, function(res){
// 		alert(1)
// 	}, 'json');
// })
