$(window).on('keydown',function(evt) {
    	if (event.keyCode == 32 && event.target == document.body) {
        	$('div.curtain-1').animate({left: '-=45%'}, 1500);
	        $('div.curtain-2').animate({left: '+=45%'}, 1500);
	        $('div.overlay').fadeOut({queue: false, duration: 800});
	        $('div.overlay').animate({top: '-=100%'}, 2500);
        	$(this).fadeOut(500);
        	event.preventDefault();
        	return false;
      	}
      	if (event.which == 37) {
      		event.preventDefault();
        	window.location.replace("http://www.google.com");
    	}
    	if (event.which == 38) {
    		event.preventDefault();
        	alert('up key was pressed');
    	}
    	if (event.which == 39) {
    		event.preventDefault();
        	alert('right key was pressed');
    	}
    	if (event.which == 40) {
    		event.preventDefault();
        	alert('down key was pressed');
     	}
    });