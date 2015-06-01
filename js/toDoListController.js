toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.listDisplay = []

  self.addTask = function() {
    self.listDisplay.push({task: self.taskTerm, completed: false})
  };

  self.empty = function(){
    self.listDisplay = [];
  }

}]);