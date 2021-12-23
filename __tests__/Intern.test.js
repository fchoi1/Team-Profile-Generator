const Intern = require('../lib/Intern')


test('Creates a Intern object', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com', 'school1' )

    expect(intern).toEqual(expect.any(Intern))
});


test('Gets school from intern', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com', 'school1' )
    
    expect(intern.getSchool()).toMatch('school1');
    expect(typeof intern.getSchool()).toBe("string")
});


test('Gets role of an intern', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com', 'school1' )
    
    expect(intern.getRole()).toBe('Intern');
});

test('Returns icon html of Intern', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com', 'school1' )

    expect(intern.getIcon()).toEqual(expect.stringMatching(/^<i class=..*<\/i>$/));
});