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
}

module.exports = Intern;