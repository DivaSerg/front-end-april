myApp.directive('toDoItem', function() {
	function toDoItemController(scope) {
			scope.data = scope.data || {};

			scope.button.Text = 'Начать делать';
		}

	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		template: [


		],
	controller: toDoItemController
	};
});