myApp.factory('messageService', function($http, $q, settings, casheService) {
  var ws = new WebSocket('ws://' + settings.DOMAIN_AND_PORT + '/');

  var
   wsOpen = new $q.defer(),
   wsOpenPromise = wsOpen.promise;

  ws.onopen = function() {
  	wsOpen.resolve();
  }

  function _sendTask(task) {
  	wsOpenPromise.then(function() {
			ws.send(JSON.stringify(task));
	  });
  }

  function _subscribeOnBoard(boardName) {
  	var subscribeRequest = {
  		name: boardName, 
      id: "errOnLoad",
  		type: 'connect'
  	}

  	wsOpenPromise.then(function() {
			ws.send(JSON.stringify(subscribeRequest));
	  });
  }
  
  ws.onmessage = function(message) {
		var task;

		try {
			task = JSON.parse(message.data);
		} catch (error) {
			console.warn(error);
		}        	

		casheService.updateTask(task);
	}

	return {
		subscribeOnBoard: _subscribeOnBoard,
		sendTask: _sendTask
	}
});