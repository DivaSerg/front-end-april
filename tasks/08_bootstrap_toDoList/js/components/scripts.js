(function($) {

	// Add serializeObject function to jQuery library

	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};

	// Start our program

  $(document).ready(function() {
  	var
  		$todo = $('#todo'),
  		$inprogress = $('#inprogress'),
  		$done = $('#done'),
  		$addTask = $('.btn-add-new-task'),
  		tasks = {},
  		$body = $('body'),
  		DOMAIN_AND_PORT = 'ec2-54-191-226-244.us-west-2.compute.amazonaws.com:3500';

	  if (location.hash) {
	  	var taskId = location.hash.slice(1);
	    $('.bs-header').addClass('hidden');
	    $('.to-do-hoder').removeClass('hidden');
	    $('h1 .name').text(taskId);

	    $.get('http://' + DOMAIN_AND_PORT + '/tasks?id=' + taskId, function(data) {
	    	tasks = data;
	    	renderTasks();
	    })
	    .fail(function(error) {
	    	console.log(error);
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

	  $addTask.click(function() {
	  	var
	  	 taskId = (Math.round(Math.random() * 100000000)).toString(36),
	  	 $form = $(this).parents('form')
	  	 task = $form.serializeObject();

	  	task.status = 'todo';
			task.type = 'upsert'

			handlerMessage(task);

	  	return false;
	  });

	  $body.on('click', '.item .close', function() {
	  	var $item = $(this).parents('.item');
	  	var taskId = $item.data('task');

	  	handlerMessage({type: 'delete', taskId: taskId});

	  	return false;
	  });

	  function handlerMessage(message) {
	  	if (message.type == 'upsert') {
	  		tasks[message.taskId] = message
	  	} else if (message.type == 'delete') {
	  		delete tasks[message.taskId];
	  	}

	  	renderTasks();
	  }

	  function renderItem(item) {
	  	var
	  		$item = $('<div>').addClass('item').attr('data-task', item.taskId),
	  		$btnClose = $([
	  			'<div class="close">',
	  				'<a href="#" class="btn btn-danger glyphicon glyphicon-remove"></a>',
	  			'</div>'
	  		].join('')),
				$title = $('<h3>').text(item.title),
				$description = $('<p>').text(item.description),
	  		$btnToInprogress = ('<p><a class="btn btn-primary btn-to-inprogress" href="#">Начать делать »</a></p>'),
	  		$btnToDone = ('<p><a class="btn btn-success btn-to-done" href="#">Завершить »</a></p>');

	  	$item.append($btnClose);
	  	$item.append($title);
	  	$item.append($description);

	  	if (item.status == 'todo') {
	  		$item.append($btnToInprogress);
	  	} else if (item.status == 'inprogress') {
	  		$item.append($btnToDone);
	  	}

	  	return $item;
	  }

	  function renderTasks() {
	  	var board = {
			  todo: [],
			  inprogress: [],
			  done: []
			};

			$.each(tasks, function(key, value) {
				value.taskId = key;
			  board[value.status].push(value);
			});

			$todo.html('');
		  $inprogress.html('');
		  $done.html('');

			board.todo.forEach(function(item) {
				$todo.append(renderItem(item));
			});

			board.inprogress.forEach(function(item) {
				$inprogress.append(renderItem(item));
			});

			board.done.forEach(function(item) {
				$done.append(renderItem(item));
			});
	  }

  });

})(jQuery);

