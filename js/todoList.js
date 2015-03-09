angular.module('todoListApp', []);

angular.module('todoListApp').controller('todoListAppController',[
  '$scope',
  function($scope){
    $scope.todoList = [];

    $scope.add = function(){
      if($scope.txt === '' || $scope.txt == undefined){
        alert('请填写todo内容')
      }
      var todo = {
        txt: $scope.txt,
        checked: false
      }
      $scope.todoList.push(todo)
      $scope.txt = ''
    }
  }
])