(function () {
	'use strict';
	
	function Triangle(a,b,c) {
		this.type = 'Triangle';
		
		this.draw = function () {
			console.log('Triangle');
		};
		
		this.getPerimeter = function() {
			return  a + b + c;
		};
	}
	window.Triangle = Triangle;
	Triangle.prototype = Object.create(Shape);
}());