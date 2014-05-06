function TodoCtrl($scope) {
	$scope.username = 'Kieron Wood'

    $scope.todos = [
        {text:'Job 1', done:false},
        {text:'Job 2', done:false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
    	//jquery filter to return all uncompleted tasks
    	$scope.todos = $scope.todos.filter(function( todo ) {
		   return !todo.done;
		 })
    };

    $scope.addTodo = function () {
    	//add new todo item to the array of uncompleted todo objects
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };
}