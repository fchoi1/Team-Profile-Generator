const Engineer = require('../lib/Engineer')

test('Creates a employee object', () => {
    const engineer = new Engineer('Person 1', '1', 'some@email.com' )

    expect(engineer.name).toBe('Person 1');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('some@email.com');
});