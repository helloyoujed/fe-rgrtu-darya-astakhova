'use strict';

$('ul').css({"position": "absolute",
	"top": "-10em",
	"width": "120px",
	"height": "195px",
	"margin": "0",
	"padding": "0",
	"background": "#00ace6",
	"color": "white",
	"list-style-type": "none",
	"text-align": "center",
	"border-radius": "0 0 15px 15px"
});

$('li').css("padding", "7px 5px 7px 5px");

$('.top').css({"border-top": "1px solid gray",
	"border-radius": "0 0 15px 15px"
});

$('.top').hover(
	function() {
		$('.top').css("box-shadow", "0 0 15px rgba(0, 191, 255, 0.6)");
	},
	function() {
		$('.top').css("box-shadow", "none");
	});

$('#tpmn').change( function() {
	if ($('#tpmn').prop('checked') === true) {
		console.log($('input').prop('checked'));
		$('ul').animate({top: 0}, 1500);
	} else {
		console.log('------');
		$('ul').animate({top: -160}, 1500);
	}
});

$('li').hover( 
	function() {
		$('li:not(.top):hover').css("background", "#0099cc");
	},
	function() {
		$('li').css("background", "#00ace6");
	});

$('input').css("display", "none");








