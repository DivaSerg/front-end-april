myApp.factory('cashService', function($q, apiService) {
	var board = null;

	function _getBoardData() {
		var deffer = new $q();

		if (board) {
			deffer.reolve(board)
		} else {
			apiService.getBoard(boardName)
			.success(function(data) {
				board = data;

				deferred.reolve(board);
			})
		}
		.error(function(error) {
			deferred.reject(error);
		})
	}

	return {
		getBoardData: _getBoardData
	}
})