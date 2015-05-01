describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list and term', function() {
    expect(ctrl.listDisplay).toBeUndefined();
    expect(ctrl.taskTerm).toBeUndefined();
  });

  describe('when viewing the to do list', function(){

    var items = [
    {
      "task" : "Laundry", 
      "Completed" : false
    },
    {
      "task" : "Shopping",
      "Completed" : false
    },
    {
      "task" : "Cooking",
      "Completed" : false
    }
    ];

    it('displays list items', function() {
      ctrl.taskTerm = "hello";
      ctrl.addTask();
      expect(ctrl.listDisplay.items).toEqual(items);
    });
  })
});