const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('cffhr99', 1011, 'cffhr99@gmail.com', 'GWU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('cffhr99', 1011, 'cffhr99@gmail.com', 'GWU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('cffhr99', 1011, 'cffhr99@gmail.com', 'GWU');

    expect(intern.getRole()).toEqual("Intern");
}); 