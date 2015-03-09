angular.module('todoListApp', []);

angular.module('todoListApp').controller('todoListAppController',[
  '$scope',
  function($scope){
    $scope.todoList = [];

    $scope.add = function(){
      var todo = {
        txt: $scope.txt,
        checked: false
      }
      $scope.todoList.push(todo)
      $scope.txt = ''
    }

    $scope.finish = function(todo){
      todo.checked = !todo.checked
    }
  }
  ])