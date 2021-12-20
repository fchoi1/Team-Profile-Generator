const Employee = require('../lib/Employee')

test('Creates a employee object', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.name).toBe('Person 1');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('some@email.com');
});

test('Returns name of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getName()).toBe('Person 1');
});

test('Returns Id of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getId()).toBe('1');
});

test('Returns email of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getEmail()).toBe('some@email.com');
});

test('Returns role of Employee', () => {
    const employee = new Employee('Person 1', '1', 'some@email.com' )

    expect(employee.getRole()).toBe('Employee');
});