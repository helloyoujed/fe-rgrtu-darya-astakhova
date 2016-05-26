'use strict';

//Write a JavaScript function that accept two integers and display the largerst
console.log('Write a JavaScript function that accept two integers and display the largerst');
function largest(x, y) {
	return x > y ? x :
	y > x ? y : alert('Числа равны');
}

var a = parseInt(prompt("Введите первое число"));
var b = parseInt(prompt("Введите второе число"));
console.log(largest(a, b));
console.log('');


//Write a JavaScript for loop that will iterate from 0 to 9. For each iteration, it will check if the current number is odd or even, and display a message to the console
console.log('Write a JavaScript for loop that will iterate from 0 to 9. For each iteration, it will check if the current number is odd or even, and display a message to the console');
var i = 0;
while (i < 10) {
	
	i % 2 == 0 ? console.log('Odd') : console.log('Even');
	i++;
}
console.log('');


//Write a JavaScript function to check whether a string is blank or not
console.log('Write a JavaScript function to check whether a string is blank or not');
function is_Blank(str) {  
	return str.match(/[\wа-я]+/gi) != null ? false : true;
}

console.log(is_Blank(''));
console.log(is_Blank('   '));  
console.log(is_Blank('abc'));
console.log(''); 



//Write a JavaScript function that checks whether a passed string is palindrome or not
console.log('Write a JavaScript function that checks whether a passed string is palindrome or not');
function palindrome(str){  
	var string = str.toLowerCase().replace(/ /g,'');  
	var d = 0;  
	if(string==="") {  
		alert("Введите строку!");  

	}  

	if ((string.length) % 2 === 0) {  
		d = (string.length) / 2;  
	} else {  
		if (string.length === 1) {  
			return console.log("Палиндром :)");  
		} else {  
			d = (string.length - 1) / 2;  
		}  
	}  
	for (var j = 0; j < d; j++) {  
		if (string[j] != string.slice(-1-j)[0])   
			return console.log("Не палиндром :(");  
	}  
	return console.log("Палиндром :)");  
}

var f = prompt('Введите строку (палиндром или нет)');
console.log(f);
palindrome(f);
console.log('');


//Write a JavaScript function that generates all combinations of a string
console.log ('Write a JavaScript function that generates all combinations of a string');  
function substrings(str)  {  
	var array1 = [];  
	for (var x = 0, y=1; x < str.length; x++,y++)   
	{  
		array1[x]=str.substring(x, y);  
	}  
	var combi = [];  
	var temp= "";  
	var slent = Math.pow(2, array1.length);  

	for (var i = 0; i < slent ; i++)  
	{  
		temp= "";  
		for (var j=0;j<array1.length;j++) {  
			if ((i & Math.pow(2,j))){   
				temp += array1[j];  
			}  
		}  
		if (temp !== "")  
		{  
			combi.push(temp);  
		}  
	}  
	console.log(combi.join("\n"));  
} 

substrings("dog");
console.log('');

//Write a JavaScript function that returns a passed string with letters in alphabetical order using "Bubble Sort algorithm"
console.log('Write a JavaScript function that returns a passed string with letters in alphabetical order using "Bubble Sort algorithm"');
function abc(str) {
	var arrayX = [];
	var temp;
	arrayX = str.split('');
	for (i = 0; i <= arrayX.length-1; i++)
	{
		if (arrayX[i] > arrayX[i+1])
		{
			temp = arrayX[i+1];
			arrayX[i+1] = arrayX[i];
			arrayX[i] = temp;
			i = i-2;
		}
	}
	return arrayX.join('');
}

console.log(abc(prompt("Введите слово для сортировки по алфавиту")));
console.log('');


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
console.log('Write a JavaScript function that accepts a string as a parameter and find the longest word within the string');
function find_longest_word(str)  
{  
  var array1 = str.match(/[\wа-яё]+/gi);  
  var result = array1[0];  
  
  for(var x = 1 ; x < array1.length ; x++)  
  {  
    if(result.length < array1[x].length)  
    {  
    result = array1[x];  
    }   
  }  
  return result;  
}  

console.log(find_longest_word(prompt("Введите строку для нахождения самого длинного слова")));
console.log('');


//Write a JavaScript function to extract unique characters from a string
console.log('Write a JavaScript function to extract unique characters from a string.');
function unique(str)  
{  
 var str1=str;  
 var uniq="";  
 for (var x=0;x < str1.length;x++)  
 {  
  
 if(uniq.indexOf(str1.charAt(x))==-1)  
  {  
  uniq += str1[x];    
    
   }  
  }  
  return uniq;    
}    

console.log(unique('thequickbrownfoxjumpsoverthelazydog'));
console.log(unique(prompt("Введите строку (извлечение уникальных символов)")));
console.log('');


