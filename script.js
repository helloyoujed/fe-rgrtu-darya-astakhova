'use strict'

//Write a JavaScript program to display the current day and time in the following format.
console.log('Write a JavaScript program to display the current day and time in the following format.');
var d = new Date();
var n = d.getDay();
var h = d.getHours();
if (h > 12) {
	h = h - 12 + "PM";
} else {
	h = h + "AM";
}
var m = d.getMinutes();
var s = d.getSeconds();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + weekday[n]);
console.log("Current Time is : " + h + " " + m + ":" + s);
console.log('');


//Write a JavaScript program to get the current date.
console.log('Write a JavaScript program to get the current date.');
var myDate = new Date();
var year = myDate.getFullYear();
var day = myDate.getDate();
var month = (myDate.getMonth() +1);
if (day < 10) {
	day = '0' + day;
}
if (month < 10) {
	month= '0' + month;
}
console.log(day + '-' + month + '-' + year);
console.log('');


//Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
console.log('Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.');
var year;
for (year=2014; year<= 2050; year++) {
	var d = new Date(year, 0, 1);   
	if (d.getDay() == 0) console.log('1st January is a Sunday in ' + year);
}  
console.log('');


//Write a JavaScript program to calculate days left until next New Year.
console.log('Write a JavaScript program to calculate days left until next New Year.');
var today = new Date();  
var newYear = new Date(today.getFullYear(),11,31);  
var oneDay=1000*60*60*24;  
console.log(Math.ceil((newYear.getTime()-today.getTime())/(oneDay)) + ' days left until New Year!');  
console.log('');


//Write a JavaScript function to check whether an `input` is an array or not.
console.log('Write a JavaScript function to check whether an `input` is an array or not.');
function is_array(input) {  
	return toString.call(input) === "[object Array]" ? true : false;  
}
console.log(is_array('qwe'));  
console.log(is_array([1, 2, 4, 0]));
console.log('');


//Write a JavaScript function to clone an array
console.log('Write a JavaScript function to clone an array');
function arrayClone(array) {  
	return array.slice(0);  
}  
console.log(arrayClone([1, 2, 4, 0]));  
console.log(''); 


//Write a JavaScript function to find the most frequent item of an array.
console.log('Write a JavaScript function to find the most frequent item of an array.');
function mostFrequent(array){  
	var x = 0;
	var y = 1;  
	var temp;  
	for (var i=0; i<array.length; i++)  
	{  
		for (var j=i; j<array.length; j++)  
		{  
			if (array[i] == array[j]) x++;  
			if (y<x) {  
				y = x;   
				temp = array[i];  
			}  
		}  
		x = 0;  
	}  
	return temp + ' (' + y +' times)';
}
console.log(mostFrequent([1,2,2,3,3,3,4,4,4,4]));  
console.log('');


//Write a JavaScript function that inverts the case of the letters of the given string and returns new string
console.log('Write a JavaScript function that inverts the case of the letters of the given string and returns new string');
function invertCase(str) {  
	var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
	var LOWER = 'abcdefghijklmnopqrstuvwxyz';  
	var result = [];  
	for(var i=0; i<str.length; i++) {  
		if(UPPER.indexOf(str[i]) !== -1) {  
			result.push(str[i].toLowerCase());  
		} else if(LOWER.indexOf(str[i]) !== -1) {  
			result.push(str[i].toUpperCase());  
		} else {  
			result.push(str[i]);  
		}  
	}  
	return result.join('');  
}  
console.log(invertCase('AC/DC ac/dc'));
console.log('');

//Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
console.log('Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)');
function removeDuplicates(arr) {
	var b = {};
	for (var i=0; i<arr.length; i++) { b[arr[i].toUpperCase()]=arr[i].toLowerCase(); }
		var c = [];
	for (var key in b) { c.push(b[key]); }
		return c;
}
console.log(removeDuplicates(['str', 'Str', 'STR', 'string', 'STRING']));  
console.log('');

//Write a JavaScript program to shuffle an array
console.log('Write a JavaScript program to shuffle an array');
function shuffle(array) {  
	var ctr = array.length;
	var temp;
	var index;  
	while (ctr > 0) {  
		index = Math.floor(Math.random() * ctr);  
		ctr--;  
		temp = array[ctr];  
		array[ctr] = array[index];  
		array[index] = temp;  
	}  
	return array;  
}  
console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('');


//Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
console.log('Write a JavaScript function to remove. \'null\', \'0\', \'\"\"\', \'false\', \'undefined\' and \'NaN\' values from an array');
function filterArray(array) {  
	var index = -1,  
	arr_length = array ? array.length : 0,  
	resIndex = -1,  
	result = [];  

	while (++index < arr_length) {  
		var value = array[index];  
		if (value) {  
			result[++resIndex] = value;  
		}  
	}  
	return result;  
}  
console.log(filterArray([NaN, 0, 15, false, -22, '',undefined, 47, null])); 
console.log('');


//Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
console.log('Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method');
function compareToSort(x,y) {  
	if (x.title < y.title)  
		return -1;  
	if (x.title > y.title)  
		return 1;  
	return 0;  
}  
var library = [   
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},  
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},  
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}  
];  
console.log(library.sort(compareToSort));
console.log('');


//Write a JavaScript function to merge two arrays and removes all duplicates elements
console.log('Write a JavaScript function to merge two arrays and removes all duplicates elements');
function mergeArray(array1, array2) {  
	var result_array = [];  
	var arr = array1.concat(array2);  
	var len = arr.length;  
	var assoc = {};  
	while(len--) {  
		var item = arr[len];  
		if(!assoc[item]) {   
			result_array.unshift(item);  
			assoc[item] = true;  
		}  
	}  
	return result_array;  
}  
var array1 = [1, 2, 3];  
var array2 = [2, 30, 1];  
console.log(mergeArray(array1, array2));
console.log('');


//Write a JavaScript function to remove a specific element from an array
console.log('Write a JavaScript function to remove a specific element from an array');
function removeArrayElement(array, n) {  
	var index = array.indexOf(n);  
	if (index > -1) {  
		array.splice(index, 1);  
	}  
	return array;  
}  
console.log(removeArrayElement([2, 5, 9, 6], 5));
console.log('');


//Write a JavaScript function to get a random item from an array
console.log('Write a JavaScript function to get a random item from an array');
function randomItem(items) {  
	return items[Math.floor(Math.random()*items.length)];  
}  
console.log(randomItem([254, 45, 212, 365, 2543])); 
console.log('');


//Write a JavaScript function to move an array element from one position to another
console.log('Write a JavaScript function to move an array element from one position to another');
function move(arr, old_index, new_index) {  
	while (old_index < 0) {  
		old_index += arr.length;  
	}  
	while (new_index < 0) {  
		new_index += arr.length;  
	}  
	if (new_index >= arr.length) {  
		var k = new_index - arr.length;  
		while ((k--) + 1) {  
			arr.push(undefined);  
		}  
	}  
	arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);    
	return arr;  
}  
console.log(move([10, 20, 30, 40, 50], 0, 2));  
console.log(''); 


//Write a JavaScript function to get difference between two dates in days
console.log('Write a JavaScript function to get difference between two dates in days');
function dateDiffInDays(a, b) {
	var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
}
var date1 = new Date('7/13/2016');
var date2 = new Date('12/19/2016');
console.log(dateDiffInDays(date1, date2));
console.log('');


//Write a JavaScript function to get the maximum date from an array of dates
console.log('Write a JavaScript function to get the maximum date from an array of dates');
function maxDate(all_dates) {  
	var max_dt = all_dates[0],  
	max_dtObj = new Date(all_dates[0]);  
	all_dates.forEach(function(dt, index) {  
		if ( new Date( dt ) > max_dtObj) {  
			max_dt = dt;  
			max_dtObj = new Date(dt);  
		}  
	});  
	return max_dt;  
}  
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
console.log(''); 


//Write a JavaScript function to split a string and convert it into an array of words
console.log('Write a JavaScript function to split a string and convert it into an array of words');
function stringToArray (str) {  
	return str.trim().split(' ');  
};  
console.log(stringToArray('convert string into an array of words'));
console.log('');


//Write a JavaScript function to capitalize the first letter of a string
console.log('Write a JavaScript function to capitalize the first letter of a string');
function capitalize(str) {  
	return str.charAt(0).toUpperCase() + str.slice(1);  
}  
console.log(capitalize('capitalize the first letter of a string'));
console.log('');


//Write a JavaScript function to convert a string into camel case
console.log('Write a JavaScript function to convert a string into camel case');
function camelize(str) {  
	return str.replace(/\W+(.)/g, function(match, chr) {  
		return chr.toUpperCase();  
	});  
}  
console.log(camelize("Java Script")); 
console.log(camelize("java-script")); 
console.log(camelize("JavaScriptExercises"));
console.log('');


//Write a JavaScript function to find the highest value in an array
console.log('Write a JavaScript function to find the highest value in an array');
function max(input) {  
	return Math.max.apply(null, input);  
}  
console.log(max([1,2,3,4,5]));  
console.log('');


//Write a JavaScript function to find the lowest value in an array
console.log('Write a JavaScript function to find the lowest value in an array');
function min(input) {  
	return Math.min.apply(null, input);  
}  
console.log(min([1,2,3,4,5]));  
console.log('');


//Write a JavaScript function to check whether a variable is numeric or not
console.log('Write a JavaScript function to check whether a variable is numeric or not');
function isNumeric(num) {  
	return !isNaN(parseFloat(num)) && isFinite(num);  
}  
console.log(isNumeric(123));  
console.log(isNumeric('one two three'));  
console.log('');


//Write a JavaScript function to calculate the sum of values in an array
console.log('Write a JavaScript function to calculate the sum of values in an array');
function sum(input){  
	if (toString.call(input) !== "[object Array]")  
		return false;  
	var total =  0;  
	for(var i=0;i<input.length;i++)  
	{                    
		if(isNaN(input[i])){  
			continue;  
		}  
		total += Number(input[i]);  
	}  
	return total;  
}  
console.log(sum([1,2,3]));  
console.log('');


//Write a JavaScript program to get the length of an JavaScript object
console.log('Write a JavaScript program to get the length of an JavaScript object');
function objectSize(obj) {  
	var size = 0, key;  
	for (key in obj) {  
		if (obj.hasOwnProperty(key)) size++;  
	}  
	return size;  
}
var student = {   
	firstname : 'Darya',   
	lastname : 'Astakhova',   
	age : 25 };
console.log(objectSize(student));
console.log('');


//Write a JavaScript program to list the properties of a JavaScript object
console.log('Write a JavaScript program to list the properties of a JavaScript object');
function objectProperties(obj) {  
    if (!isObject(obj)) return [];  
    if (Object.keys) return Object.keys(obj);  
    var keys = [];  
    for (var key in obj) {
		if (obj.hasOwnProperty(key)) { 
			keys.push(key);
		}
	}
    return keys;  
  }  
function isObject(obj) {  
    var type = typeof obj;  
    return type === 'function' || type === 'object' && !!obj; 
}

console.log(objectProperties(student));
console.log('');