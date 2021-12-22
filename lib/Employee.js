class Employee {
    #name
    #id
    #email
    constructor(name, id, email){
        this.#name = name;
        this.#id = id;
        this.#email = email;
        Object.seal(this);
    };

    getName(){
        return this.#name;
    };

    getId(){
        return Number(this.#id);
    };

    getEmail(){
        return this.#email;
    };

    getRole(){
        return 'Employee';
    };
}

module.exports = Employee;