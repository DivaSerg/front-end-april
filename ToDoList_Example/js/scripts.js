(function() {

  $(document).ready(function() {
  	var
  		$todo = $('#todo'),
  		$inprogress = $('#inprogress'),
  		$done = $('#done');

	  if (location.hash) {
	  	var taskId = location.hash.slice(1);
	    $('.bs-header').addClass('hidden');
	    $('.to-do-hoder').removeClass('hidden');
	    $('h1 .name').text(taskId);

	    $.get('http://192.168.1.74:3500/tasks?id=' + taskId, function(data) {
	    	console.log(data);
	    });
	  }
	  
	  $('.start-to-do').click(function() {
	    if (!location.hash) {
	      var toDoKey = (Math.round(Math.random() * 100000000)).toString(36);
	      location.hash = toDoKey;
	      $('.to-do-hoder').removeClass('hidden');
	      $('.bs-header').addClass('hidden');
	      $('h1 .name').text(toDoKey);
	    }
	    
	    return false;
	  });
  
	  $('.col-xs-3').on('click', '.close', function() {
	    console.log('Close!');
	  });
	  
	  $('.col-xs-3').on('click', 'p a.btn', function() {
	    console.log('Go forward!');
	  });

	  function renderTasks(data) {
	  	var board = {
			  todo: [],
			  inprogress: [],
			  done: []
			};

			$.each(data, function(key, value) {
			  board[value.status].push(value);
			});


	  }


  });

})();

