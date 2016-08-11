myApp.controller('TodoListController', function($location, casheService, messageService) {
	var toDoCtr = this;

	toDoCtr.toDoListIsVisible = false;

	toDoCtr.boardName = 'Unknown';

	if ($location.hash()) {
		toDoCtr.toDoListIsVisible = true;
		toDoCtr.boardName = $location.hash();

		casheService.getBoardData(toDoCtr.boardName)
		.then(function(data) {
			toDoCtr.board = data;
		})
		.catch(function(error) {
			console.log(error)
		});

		messageService.subscribeOnBoard(toDoCtr.boardName);
	}

	toDoCtr.statrToDoList = function() {
		var toDoKey = (Math.round(Math.random() * 100000000)).toString(36);

		$location.hash(toDoKey);

		toDoCtr.toDoListIsVisible = true;

		toDoCtr.boardName = toDoKey;

		casheService.getBoardData(toDoCtr.boardName)
		.then(function(data) {
			toDoCtr.board = data;
		})
		.catch(function(error) {
			console.log(error)
		});

		messageService.subscribeOnBoard(toDoCtr.boardName);
	};

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
		var task = {
			taskId: taskId,
			type: 'delete'
		}

		messageService.sendTask(task);

		delete toDoCtr.board[taskId];
	}

	toDoCtr.sendTask = function(taskId) {
		if (toDoCtr.board[taskId].status == 'todo') {
  			toDoCtr.board[taskId].status = 'inprogress';
  		} else if (toDoCtr.board[taskId].status == 'inprogress') {
  			toDoCtr.board[taskId].status = 'done';
  		}

		var task = {
			taskId: taskId,
			type: 'upsert',
			title: toDoCtr.board[taskId].title,
			description: toDoCtr.board[taskId].description,
			status: toDoCtr.board[taskId].status
		}

		messageService.sendTask(task);
	}

	toDoCtr.createTask = function(form) {
		if (form.$invalid) {
			form.$setSubmitted();
			alert('Fill the all required fields!');
			return;
		}

		var task = {
			type: 'upsert',
			id: 'createTask',
			title: toDoCtr.title,
			description: toDoCtr.description,
			status: 'todo',
			taskId: (Math.round(Math.random() * 100000000)).toString(36)
		}

		casheService.updateTask(task);
		messageService.sendTask(task);

		form.$setPristine();
		toDoCtr.title = '';
		toDoCtr.description = '';
	}
});