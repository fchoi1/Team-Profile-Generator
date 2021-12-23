const Engineer = require('../lib/Engineer')

test('Creates a Engineer object', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )

    expect(engineer).toEqual(expect.any(Engineer));
});

test('Gets github account from engineer', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )
    expect(engineer.getGithub()).toMatch('testGithub');
    expect(typeof engineer.getGithub()).toBe("string")
});

test('Gets role of an engineer', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )
    expect(engineer.getRole()).toBe('Engineer');
});

test('Returns icon html of Engineer', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com', 'testGithub' )

    expect(engineer.getIcon()).toEqual(expect.stringMatching(/^<i class=..*<\/i>$/));
});