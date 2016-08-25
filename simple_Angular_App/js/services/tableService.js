myApp.service('tableService', function() {
	this.data = [
		{
			id: 1,
			name: 'test 1',
			email: 'test1@gmail.com',
			date: '10.9.1985',
			description: 'Some description',
			isWorking: false
		},
		{
			id: 2,
			name: 'test 2',
			email: 'test2@gmail.com',
			date: '10.03.1975',
			description: 'Some description',
			isWorking: false
		},
		{
			id: 3,
			name: 'test 3',
			email: 'test3@gmail.com',
			date: Date.now(),
			description: 'Some description',
			isWorking: false
		}
	];
});