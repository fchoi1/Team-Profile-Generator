const Intern = require('../lib/Intern')


test('Creates a Intern object', () => {
    const intern = new Intern('Person 1', '1', 'some@email.com', 'school1' )

    expect(intern.name).toBe('Person 1');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('some@email.com');
    expect(intern.school).toBe('school1');
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