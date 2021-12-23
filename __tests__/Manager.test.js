const Manager = require('../lib/Manager')

test('Creates a employee object', () => {
c
    expect(manager).toEqual(expect.any(Manager));
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

test('Returns icon html of Intern', () => {
    const manager = new Manager('Person 1', '1', 'some@email.com', '1' )

    expect(manager.getIcon()).toEqual(expect.stringMatching(/^<i class=..*<\/i>$/));
});