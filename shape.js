(function () {
	'use strict';

	function Shape() {
		this.type = 'Shape';
		
		this.getType = function() {
			return this.type;
		};
		
		this.getPerimeter = function() {};
		
		this.draw = function() {
			console.log('Shape');
		};
	}
	
	window.Shape = Shape;
}());