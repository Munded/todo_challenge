toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.listDisplay = []

  self.addTask = function() {
    self.listDisplay.push({task: self.taskTerm, completed: false})
  };

  self.setCompleted = function(item) {
    var completed=false;
    self.listDisplay.forEach(function (task,index) {
        if (task.task ==item) {
            task.completed=true; //setting it as completed
        }
    });
};

  self.empty = function(){
    self.listDisplay = [];
  }

}]);