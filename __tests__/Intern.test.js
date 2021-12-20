const Intern = require('../lib/Intern')


test('Creates a employee object', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com' )

    expect(intern.name).toBe('Person 1');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('some@email.com');
});