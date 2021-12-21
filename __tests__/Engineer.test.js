const Engineer = require('../lib/Engineer')

test('Creates a Engineer object', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )

    expect(engineer.name).toBe('Person 1');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('some@email.com');
    expect(engineer.github).toBe('testGithub');

});

test('Gets github account from engineer', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )
    expect(engineer.getGithub()).toMatch('testGithub');
});