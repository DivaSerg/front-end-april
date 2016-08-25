myApp.controller('SimpleController', function($timeout, tableService) {
	var sCtrl = this;

	sCtrl.table = tableService.data;

	sCtrl.addRow = function() {
		sCtrl.table.push({
			id: sCtrl.table.length + 1,
			name: 'New Worker ' + (sCtrl.table.length + 1),
			email: 'test77@gmail.com',
			date: '10.9.1985',
			description: 'Some description',
			isWorking: true
		})
	};

	sCtrl.getDate = function(date) {
		return new Date(date)
	}
});