const Employee = require("./Employee")

class Intern extends Employee{
    #school;
    constructor(name, id, email, school){
        super(name,id,email);
        this.#school = school;
        Object.seal(this);
    };

    getSchool(){
        return this.#school;
    };

    getRole(){
        return "Intern";
    };

    getIcon(){
        return '<i class="bi bi-mortarboard-fill fs-4"></i>'
    }
}

module.exports = Intern;