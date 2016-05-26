(function () {
	'use strict';
	
	function Square(a,b,c,d) {
		this.type = 'Square';
	
		this.draw = function () {
			console.log('Square');
		};
	
		this.getPerimeter = function() {
			return  a + b + c + d;
		};
	}
	window.Square = Square;
	Square.prototype = Object.create(Shape);
}());