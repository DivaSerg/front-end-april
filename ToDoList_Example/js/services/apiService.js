myApp.service('apiService', function($http, settings) {

  this.getBoard = function(boardName) {
  	return $http.get('http://' + settings.DOMAIN_AND_PORT + '/tasks?id=' + boardName);
  };

  this.getAllBoards = function() {
  	return $http.get('http://' + settings.DOMAIN_AND_PORT + '/tasks/all');
  };

  this.getServerStatistic = function() {
  	return $http.get('http://' + settings.DOMAIN_AND_PORT + '/tasks/stat');
  }

});