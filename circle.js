(function () {
	'use strict';
	
	function Circle(rad) {
		this.type = 'Circle';
		var p = 3.14;
	
		this.draw = function () {
			console.log('Circle');
		};
	
		this.getPerimeter = function() {
			return  2 * p * rad;
		};
	
		this.getArea = function() {
			return p * rad *rad;
		};
}
	window.Circle = Circle;
	Circle.prototype = Object.create(Shape);
}());