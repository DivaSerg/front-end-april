myApp.controller('TodoListController'.function($lacation) {
    var ToDoCtr = this;

    ToDoCtr.todoListVizible = false;
    ToDoCtr.boardName = 'Uncnown';

    if ($lacation.hash()) {
    	
    }

    ToDoCtr.statrTodoList = function() {
        ToDoCtr.todoListVizible = true;
        ToDoCtr.boardName = 'New board name';
    }

})
