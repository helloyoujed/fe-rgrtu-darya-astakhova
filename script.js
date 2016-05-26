'use strict';

//Calculator v1
console.log('Calculator v1');
function Calculator1(leftOperand){
  this.multiply = function(rightOperand) {
    return leftOperand*rightOperand;
  };

  this.add = function(rightOperand) {
    return leftOperand+rightOperand;
  };

  this.subtract = function(rightOperand) {
    return leftOperand-rightOperand;
  };

  this.divide = function(rightOperand) {
    return leftOperand/rightOperand;
  };
}

var calc = new Calculator1(12);
console.log(calc.multiply(2)); //24
console.log(calc.add(3)); //15
console.log(calc.subtract(1)); //11
console.log(calc.divide(2)); //6
console.log('');


//Calculator v2
console.log('Calculator v2');
function Calculator2(leftOperand){
  this.answer = leftOperand;
  
  this.add = function(rightOperand) {
    this.answer += rightOperand;
    return this;
  };
  this.subtract = function(rightOperand) {
    this.answer -= rightOperand;
    return this;
  };
  this.multiply = function(rightOperand) {
    this.answer *= rightOperand;
    return this;
  };
  this.divide = function(rightOperand) {
    this.answer /= rightOperand;
    return this;
  };
}

var calc = new Calculator2(12);
console.log(calc.multiply(2).add(3)); //27
console.log('');



//Calculator v3
console.log('Calculator v3');
function Calculator3(leftOperand){
  
  this.multiply = function() {
    var answer = leftOperand;
    for (var i = 0; i < arguments.length; i++) {
      answer *= arguments[i];
    }
    return answer;
  };

  this.add = function() {
    var answer = leftOperand;
    for (var i = 0; i < arguments.length; i++) {
      answer += arguments[i];
    }
    return answer;
  };

  this.subtract = function() {
    var answer = leftOperand;
    for (var i = 0; i < arguments.length; i++) {
      answer -= arguments[i];
    }
    return answer;
  };

  this.divide = function() {
    var answer = leftOperand;
    for (var i = 0; i < arguments.length; i++) {
      answer /= arguments[i];
    }
    return answer;
  };
}

var calc = new Calculator3(12);
console.log(calc.multiply(2, 2, 4, 5));   //960
console.log(calc.add(3, 1, 2));           //18
console.log(calc.subtract(1, 4, 2, 1));   //4
console.log(calc.divide(2, 6));           //1
console.log('');



