'use strict';


$("body").prepend('<h1>Task 21</h1>'
	+ '<h2>Task 1</h2>'
	+ '<p>Use only jQuery for layout and adding styles<br>'
	+'Create such article block<br>'
	+ 'The layout is flexible (its width is changed according to the browser width)</p>'
	+ '<div class="block">'
	+ '<div class="blockborder">'
	+ '<div class="blockheader">Header</div>'
	+ '<div class="blockarrow"></div>'
	+ '<div class="blocktext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 	varius interdum orci quis sodales. Integer at mi eu lectus efficitur bibendum. Aenean eleifend semper euismod. Proin nec rutrum eros. Curabitur bibendum, metus sit amet elementum eleifend, velit erat cursus magna, vel hendrerit neque odio id est. Suspendisse feugiat augue massa, id tristique mi facilisis ut. Curabitur eget odio in quam dapibus scelerisque ut quis augue.</div>'
	+ '</div></div>'
	);


$('.block').css({
	"width": "30%",
	"border": "1px solid #00cccc",
	"border-radius": "10px",
	"padding": "10px",
	"background": "#b3fff0",
	"font-family": "sans-serif"
});

$('.blockborder').css({
	"border": "1px solid #00cccc",
	"background": "white",
	"color": "#009999"
});

$('.blockheader').css({
	"background": "#ffcc00",
	"color": "black",
	"font-size": "20px",
	"padding": "10px"
});

$('.blocktext').css("padding", "10px");

$('.blockarrow').css({
	"width": "0",
	"height": "0",
	"border": "15px solid transparent",
	"border-top-color": "#ffcc00",  
	"border-bottom": "0",
	"margin-left": "10px"
});