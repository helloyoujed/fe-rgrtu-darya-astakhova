(function () {
	'use strict';
	
	function Task (id, title, isCompleted) {
		this.id = id;
		this.title = title;
		this.isCompleted = isCompleted;
	}
	
	window.Task = Task;
}());