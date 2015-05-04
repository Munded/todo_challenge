describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list and term', function() {
    expect(ctrl.listDisplay).toEqual([]);
    expect(ctrl.taskTerm).toBeUndefined();
  });

  describe('when viewing the to do list', function(){

    it('displays list items', function() {
      ctrl.taskTerm = "hello";
      ctrl.addTask();
      expect(ctrl.listDisplay[0].task).toBe("hello");
    });

  
  it('is completed when clicked', function() {
     ctrl.taskTerm = "hello";
      ctrl.addTask();
      console.log(ctrl.listDisplay)
      ctrl.setCompleted("hello");
      expect(ctrl.listDisplay[0].completed).toBe(true)
    });

    it('is not completed when clicked again', function() {
      ctrl.taskTerm = "hello";
      ctrl.addTask();
      ctrl.setCompleted("hello");
      ctrl.setCompleted("hello");
      expect(ctrl.listDisplay[0].completed).toBe(false)
    });
  });

  it('can be reset when clicked', function(){
    ctrl.taskTerm = "Laundry";
    ctrl.addTask();
    ctrl.taskTerm = "Cleaning";
    ctrl.addTask();
    ctrl.empty();
    expect(ctrl.listDisplay.length).toEqual(0)
  })
});