toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.listDisplay = []

  self.addTask = function() {
    self.listDisplay.push({"task": self.taskTerm, completed: false})
  };

  self.completed = function(item) {
    var i = self.listDisplay.indexOf(item) 
    self.listDisplay[i].completed = true
    console.log(item)
  }
}]);