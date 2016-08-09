myApp.controller('TodoListController', function($location, casheService) {
	var toDoCtr = this;

	toDoCtr.toDoListIsVisible = false;

	toDoCtr.boardName = 'Unknown';

	if ($location.hash()) {
		toDoCtr.toDoListIsVisible = true;
		toDoCtr.boardName = $location.hash();
	}

	toDoCtr.statrToDoList = function() {
		var toDoKey = (Math.round(Math.random() * 100000000)).toString(36);

		$location.hash(toDoKey);

		toDoCtr.toDoListIsVisible = true;

		toDoCtr.boardName = toDoKey;
	};

	casheService.getBoardData('example')
	.then(function(data) {
		toDoCtr.board = data;
	})
	.catch(function(error) {
		console.log(error)
	});

	toDoCtr.filterTasks = function(boardItems, status) {
		var filteredColumn = {};

		angular.forEach(boardItems, function(value, key) {
			if (value.status == status) {
				filteredColumn[key] = value;
			}
		});

		return filteredColumn;
	};

	toDoCtr.removeTask = function(taskId) {
		delete toDoCtr.board[taskId];
	}
});