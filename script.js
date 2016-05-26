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

	Triangle.prototype = Object.create(Shape);
}());

function Square(a,b,c,d) {
	this.type = 'Square';
	
	this.draw = function () {
		console.log('Square');
	};
	
	this.getPerimeter = function() {
		return  a + b + c + d;
	};
}

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

Square.prototype = Object.create(Shape);
Circle.prototype = Object.create(Shape);

var tr = new Triangle(1,2,3);
console.log(tr.getPerimeter());

var sq = new Square(2,4,2,4);
console.log(sq.getPerimeter());

var cir = new Circle(6);
console.log(cir.getPerimeter());
console.log(cir.getArea());