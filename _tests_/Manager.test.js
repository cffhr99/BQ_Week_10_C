const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('cffhr99', 1011, 'cffhr99@gmail.com',7031234567);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('cffhr99', 1011, 'cffhr99@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 