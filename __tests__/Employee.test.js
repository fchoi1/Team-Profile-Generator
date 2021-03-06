const Employee = require('../lib/Employee')

test('Creates a employee object', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )
    expect(employee).toEqual(expect.any(Employee))
});

test('Returns name of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getName()).toMatch('Person 1');
    expect(typeof employee.getName()).toBe("string")

});

test('Returns Id of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getId()).toBe(1);
    expect(typeof employee.getId()).toBe("number")
});

test('Returns email of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getEmail()).toMatch('some@email.com');
    expect(typeof employee.getEmail()).toBe("string")

});

test('Returns role of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getRole()).toBe('Employee');
});

test('Returns icon html of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getIcon()).toEqual(expect.stringMatching(/^<i class=..*<\/i>$/));
});