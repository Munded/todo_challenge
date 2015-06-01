describe('To Do List finder', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('To Do List')
  });

  // not sure what to put in feature as I have not stubbed out anything in unit so will just be repetition

  it('can input a task', function() {
    browser.get('http://localhost:3000');

  })

  // has submit button

  // when creating an item, has number


});