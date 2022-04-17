jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$(function(){

	window.sr = ScrollReveal();
  
	if ($(window).width() < 600) {
  
		if ($('.timeline-content').hasClass('js--fadeInLeft')) {
			$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
		}
  
		sr.reveal('.js--fadeInRight', {
		  origin: 'right',
		  distance: '200px',
		  easing: 'ease-in-out',
		  duration: 800,
		});
  
	} else {
		
		sr.reveal('.js--fadeInLeft', {
		  origin: 'left',
		  distance: '200px',
			easing: 'ease-in-out',
		  duration: 800,
		});
  
		sr.reveal('.js--fadeInRight', {
		  origin: 'right',
		  distance: '200px',
		  easing: 'ease-in-out',
		  duration: 800,
		});
  
	}
	
	sr.reveal('.js--fadeInLeft', {
		  origin: 'left',
		  distance: '200px',
			easing: 'ease-in-out',
		  duration: 800,
		});
  
		sr.reveal('.js--fadeInRight', {
		  origin: 'right',
		  distance: '200px',
		  easing: 'ease-in-out',
		  duration: 800,
		});
  
  
  });

  $(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

(function(){
	var words = [
		'Hello,',
		'Hallo,',
		'Ahoj,',
		'Bonjour,',
		'Hola,',
		'Hej,'
		
		], i = 0;
	setInterval(function(){
		$('#changingword').fadeOut(function(){
			$(this).html(words[i=(i+1)%words.length]).fadeIn();
		});
	}, 3000);
	  
})();

