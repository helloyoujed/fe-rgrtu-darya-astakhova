'use strict';

var task = (function(){
	var array = [1,2,3,4,5,6,7,8,9,1,3,5,7,1,1];
	function addArray() {
		var array = [];
		while (true) {
			var value = prompt("Введите элемент массива", 0);
			if (value === "" || value === null || isNaN(value)) break;
			array.push(+value);
		}
		console.log('Вы ввели массив ' + array);
	}

	//1. Write a JavaScript function to check whether an `input` is an array or not
	function is_array(input) {
		if (toString.call(input) === "[object Array]")  
			return true;  
		return false;     
	}

	//2. Write a JavaScript function to deep clone an array using recursion
	function deepCloneArray() {
		var clone = new Object();
		if (typeof(array) == 'object') {
			var clone = new Array();
			for (var objInd in array) {	
				if (typeof(array[objInd]) == 'object') {
					clone[objInd] = deepObjCopy(array[objInd]);
				} else if (typeof(array[objInd]) == 'number') {
					clone[objInd] = array[objInd];
				}
			}
		}
		return clone;
	}

	//3. Write a JavaScript function to find the most frequent item of an array.
	function theMostFrequent(){ 
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

	//4. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
	function removeDuplicates(strArray) {
		var b = {};
		for (var i=0; i<strArray.length; i++) { b[strArray[i].toUpperCase()]=strArray[i].toLowerCase(); }
			var c = [];
		for (var key in b) { c.push(b[key]); }
			return c;
	}

	//5. Write a JavaScript program to shuffle an array
	function shuffle() { 
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

	//6. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
	function compareToSort(x,y) {  
		if (x.title < y.title)  
			return -1;  
		if (x.title > y.title)  
			return 1;  
		return 0;  
	}

	//7. Write a JavaScript function to merge two arrays and removes all duplicates elements
	function mergeAndRemoveDuplicates(array1, array2) { 
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

	//8. Write a JavaScript function to remove a specific element from an array
	function removeArrayElement(array, n) {
		var index = array.indexOf(n);  
		if (index > -1) {  
			array.splice(index, 1);  
		}  
		return array;  
	}  
	
	//9. Write a JavaScript function to get a random item from an array
	function getRandom() {  
		return array[Math.floor(Math.random()*array.length)];  
	}

	//10. Write a JavaScript function to move an array element from one position to another
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

	//11. Write a JavaScript function to split a string and convert it into an array of words
	function stringToArray(str) { 
		return str.trim().split(' ');  
	}

	//12. Write a JavaScript function to capitalize the first letter of a string
	function capitalize(str) { 
		return str.charAt(0).toUpperCase() + str.slice(1);  
	}

	//13. Write a JavaScript function to convert a string into camel case
	function camelize(str) {
		return str.replace(/\W+(.)/g, function(match, chr) {  
			return chr.toUpperCase();  
		});  
	}

	//14. Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire array and calls the given function with the current array element.
		function iterateArray(array, func){
		var res;
		for (var i = 0; i < array.length; i++) {
			var val = array[i];
			res = func(val);
		}
		return res;
	}

	//15. Write a JavaScript program to get the length of an JavaScript object
	function objectSize(obj) {  
		var size = 0, key;  
		for (key in obj) {  
			if (obj.hasOwnProperty(key)) size++;  
		}  
		return size;  
	}

	function test(){
		console.log('*Test all functions*');

		console.log('1. Write a JavaScript function to check whether an `input` is an array or not');
		console.log(is_array('qwe')); 
		console.log(is_array([1, 2, 4, 0]));
		console.log('');

		console.log('2. Write a JavaScript function to deep clone an array using recursion');
		console.log(deepCloneArray()); 
		console.log('');

		console.log('3. Write a JavaScript function to find the most frequent item of an array.'); 
		console.log(theMostFrequent());
		console.log('');

		console.log('4. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)');
		console.log(removeDuplicates(['str', 'Str', 'STR', 'string', 'STRING']));  
		console.log('');

		console.log('5. Write a JavaScript program to shuffle an array'); 
		console.log(shuffle());
		console.log('');

		console.log('6. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method');
		var library = [   
		{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},  
		{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},  
		{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}  
		];  
		console.log(library.sort(compareToSort));
		console.log('');

		console.log('7. Write a JavaScript function to merge two arrays and removes all duplicates elements'); 
		var array1 = [1, 2, 3];  
		var array2 = [2, 30, 1];  
		console.log(mergeAndRemoveDuplicates(array1, array2));
		console.log('');

		console.log('8. Write a JavaScript function to remove a specific element from an array');  
		console.log(removeArrayElement([2, 5, 9, 6], 5));
		console.log('');

		console.log('9. Write a JavaScript function to get a random item from an array');
		console.log(getRandom());
		console.log('');

		console.log('10. Write a JavaScript function to move an array element from one position to another');
		console.log(move([10, 20, 30, 40, 50], 0, 2));  
		console.log('');

		console.log('11. Write a JavaScript function to split a string and convert it into an array of words');
		console.log(stringToArray('convert string into an array of words'));
		console.log('');

		console.log('12. Write a JavaScript function to capitalize the first letter of a string');
		console.log(capitalize('capitalize the first letter of a string'));
		console.log('');

		console.log('13. Write a JavaScript function to convert a string into camel case');
		console.log(camelize("Java Script")); 
		console.log(camelize("java-script")); 
		console.log(camelize("JavaScriptExercises"));
		console.log('');

		console.log('14. Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire array and calls the given function with the current array element.');
		var result = 0;
		console.log(iterateArray([2,4,1,2,4], function(el){
			return result += el;
		}));
		console.log('');

		console.log('15. Write a JavaScript program to get the length of an JavaScript object');
		var student = {   
			firstname : 'Darya',   
			lastname : 'Astakhova',   
			age : 25 
		};
		console.log(objectSize(student));
		console.log('');
	}


	return {
		addArray: addArray,
		is_array: is_array,
		deepCloneArray: deepCloneArray,
		theMostFrequent: theMostFrequent,
		removeDuplicates: removeDuplicates,
		shuffle: shuffle,
		compareToSort: compareToSort,
		mergeAndRemoveDuplicates: mergeAndRemoveDuplicates,
		removeArrayElement: removeArrayElement,
		getRandom: getRandom,
		move: move,
		stringToArray: stringToArray,
		capitalize: capitalize,
		camelize: camelize,
		iterateArray: iterateArray,
		objectSize:objectSize,
		test: test
	};
}());


task.test();
