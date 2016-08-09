myApp.factory('casheService', function($q, apiService) {
	var board = null;

	function _getBoardData(boardName) {
		var deferred = new $q.defer();

		if (board) {
			deferred.resolve(board);
		} else {
			apiService.getBoard(boardName)
				.success(function(data) {
					board = data;

					deferred.resolve(board);
				})
				.error(function(error) {
					deferred.reject(error)
				})
		}

		return deferred.promise;
	}

	return {
		getBoardData: _getBoardData
	}
});