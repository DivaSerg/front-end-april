myApp.factory('casheService', function($q, apiService) {
	var board = null;

	function _getBoardData(boardName) {
		var deferred = new $q.defer();

		if (board) {
			deferred.resolve(board);
		} else {
			apiService.getBoard(boardName)
				.success(function(data) {
					if (!Array.isArray(data)) {
						board = data;
					} else {
						board = {};
					}

					deferred.resolve(board);
				})
				.error(function(error) {
					deferred.reject(error)
				})
		}

		return deferred.promise;
	}

	function _updateTask(task) {
		if (task.type == 'upsert') {
            board[task.taskId] = task;
        } else if (task.type == 'delete') {
            delete board[task.taskId];
        }
	}

	return {
		getBoardData: _getBoardData,
		updateTask: _updateTask
	}
});