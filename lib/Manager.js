const Employee = require("./Employee");
"use strict";

class Manager extends Employee{    
    #officeNumber
    constructor(name, id, email, office){
        super(name, id, email);
        this.#officeNumber = office;
        Object.seal(this);
    };

    getOffice(){
        return Number(this.#officeNumber);
    };

    getRole(){
        return "Manager";
    };
}

module.exports = Manager;