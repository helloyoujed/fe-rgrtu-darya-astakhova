'use strict';

if ($ === undefined) {
	console.log('jQuery не подключён.');
} else {
	console.log('Версия jQuery: ' + $.fn.jquery);
}


var app = new Application();

var $addButton = document.querySelector('#add');
var $input = document.querySelector('#input');

var $list = document.querySelector('#list');

$addButton.addEventListener('click', onAddButtonClick);


function onAddButtonClick() {
	'use strict';
	var title = $input.value;
	var items = app.items;
	var id = app.items.legth;
	var newTask = new Task(id, title, false);
	
	var newA = document.createElement('a');
	var newLabel = document.createElement('label');
	var newInput = document.createElement('input');
	
	newInput.setAttribute("id",id);
	newInput.setAttribute("type","checkbox");
	
	newLabel.setAttribute("for",id);
	newLabel.innerHTML = " " + title;

	newA.className = "list-group-item";
	newA.setAttribute("href","#");

	newA.appendChild(newLabel);
	newLabel.insertBefore(newInput, newLabel.firstChild);

	$input.value = '';
	$input.setAttribute("placeholder","add new ToDo item");

	$list.insertBefore(newA, $list.firstChild);

	var $inputCheck = document.querySelector('input[type="checkbox"]');
	$inputCheck.addEventListener('change', onInputCheckChange);

	function onInputCheckChange() {
		if($inputCheck.checked) {
			newA.classList.toggle("checked");
			newTask.isCompleted = true;
		} else {
			newA.classList.toggle("checked");
			newTask.isCompleted = false;
		}
		
		if (newTask.isCompleted === true) {
			$list.appendChild(newA);
			if (confirm('Delete this task?')=== true) $list.removeChild(newA);
		} else {
			$list.insertBefore(newA, $list.firstChild);
		}


	}

	items.push(newTask);
}
