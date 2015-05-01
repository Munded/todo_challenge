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

    it('shows completed when clicked', function() {
      ctrl.taskTerm = "hello";
      ctrl.addTask();
      ctrl.complete("hello");
      expect(ctrl.listDisplay[0].completed).toBe(true)
    });
  });
});