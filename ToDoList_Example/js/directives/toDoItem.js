myApp.directive('toDoItem', function() {
	function toDoItemController($scope) {
  	$scope.itemData = $scope.itemData || {};

  	$scope.getBtnName = function(status) {
  		if (status == "todo") {
				return 'Начать делать »';
	  	} else if (status == "inprogress") {
	  		return 'Завершить »';
	  	} else if (status == "done") {
	  		return '';
	  	}
  	};

  	$scope.getBtnClass = function(status) {
  		if (status == "todo") {
				return 'btn-primary';
	  	} else if (status == "inprogress") {
	  		return 'btn-success';
	  	}
  	};

  	$scope.removeItem = function($event) {
  		$event.preventDefault();
			
  		$scope.onRemove({taskId: $scope.taskId});
  	};

    $scope.changeStatus = function() { 
      $scope.onStatusChange({taskId: $scope.taskId});
    }
  }

  return {
  	restrict: 'E',
  	scope: {
  		itemData: '=',
  		taskId: '@',
			onRemove: '&',
      onStatusChange: '&'
  	},
    template: ['<div class="item">',
							    '<div class="close">',
								    '<a class="btn btn-danger btn-delete" href="#" ng-click="removeItem($event)">',
								    	'<span class="glyphicon glyphicon-remove"></span>',
								    '</a>',
							    '</div>',
    							'<h3>{{itemData.title}}</h3>',
    							'<p>{{itemData.description}}</p>',
    							'<p>',
    								'<button',
    								' type="button"',
    								' class="btn"',
    								' ng-class="getBtnClass(itemData.status)"',
    								' ng-click="changeStatus(itemData.status)"',
    								'ng-if="getBtnName(itemData.status)">{{getBtnName(itemData.status)}}</button>',
    							'</p>',
    						'</div>'].join(''),
    controller: toDoItemController
  };
});