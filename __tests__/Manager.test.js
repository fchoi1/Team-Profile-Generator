const Manager = require('../lib/Manager')

test('Creates a employee object', () => {
    const manager = new Manager('Person 1', '1', 'some@email.com', '1' )

    expect(manager.name).toBe('Person 1');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('some@email.com');
    expect(manager.officeNumber).toBe('1');
});

test('Gets office number from manager', () => {
    const manager = new Manager('Person 1', '1', 'some@email.com', '1' )
    
    expect(manager.getOffice()).toBe(1);
    expect(typeof manager.getOffice()).toBe("number")

});


test('Gets role of an manager', () => {
    const manager = new Manager('Person 1', '1', 'some@email.com', '1' )
    
    expect(manager.getRole()).toBe('Manager');
});