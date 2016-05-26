'use strict';

//Declare two variables and show them
var firstname = 'Darya';
var lastname = 'Astakhova';
alert(firstname);
alert(lastname);



//Write a function that can find triangle's area
console.log('Write a function that can find triangles area');

function trianglesArea(x, y, z) {
	var s = (x + y + z) / 2;
	return Math.sqrt(s*(s - x)*(s - y)*(s - z));
	console.log(area);
}

var side1 = parseInt(prompt("Enter first side of triangle"));
var side2 = parseInt(prompt("Enter second side of triangle"));
var side3 = parseInt(prompt("Enter third side of triangle"));
var area = trianglesArea(side1, side2, side3);
console.log(area);

//Write a function that reverse the given array using three kind of loops
console.log('Write a function that reverse the given array using three kind of loops');
var array = [];
while (true) {
  var value = prompt("Введите элемент массива", 0);
  if (value === "" || value === null || isNaN(value)) break;
  array.push(+value);
}
console.log(array);
array.reverse();
console.log(array);

//While
function reverse(array) {
    var i = 0;
    var j = array.length - 1;
    while (i < j) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
        i++;
        j--;
    }
}

//Do while
function reverse(array) {
    var i = 0;
    var j = array.length - 1;
    do {
    	var x = array[i];
        array[i] = array[j];
        array[j] = x;
        i++;
        j--;
    } while (i < j) 
}

//For
function reverse(array) {
    var temp = [];
    var len = array.length;
    for (var i = (len - 1); i !== 0; i--) {
        temp.push(array[i]);
    }
    return result;
}

//Explain the difference between ++i and i++ with example
console.log('Explain the difference between ++i and i++ with example');
var i = 1;
var a = ++i; console.log('++i увеличит переменную, а затем вернёт ее значение в a. Так что в a попадёт значение i после увеличения.');
console.log(a); //Вернет значение 2

var i = 1;
var a = i++; console.log('i++ возвращает старое значение, бывшее до увеличения');
console.log(a); //Вернет значение 1

//Write a function that checks if the given arguments is positive number or negative number or is 0
console.log('Write a function that checks if the given arguments is positive number or negative number or is 0');
var number = prompt('Введите число');

if (number < 0) {
  console.log( 'Число отрицательное' );
} else if (number > 0) {
  console.log( 'Число положительное' );
} else {
  console.log( 'Число равно нулю' );
}


//Create a page that asks the user his name and alert it back
var name = prompt("Ваше имя?", "");
alert('Вы указали имя '+ name);


//Write a function that calculates factorial
console.log('Write a function that calculates factorial');
var f = [];
function factorial (n) {	
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

var b = prompt('Введите число для вычисления факториала');
var fact = factorial(b);
console.log(fact);
