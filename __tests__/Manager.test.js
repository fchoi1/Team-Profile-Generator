const Manager = require('../lib/Manager')

test('Creates a employee object', () => {
    const manager = new Manager('Person 1', '1', 'some@email.com' )

    expect(manager.name).toBe('Person 1');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('some@email.com');
});