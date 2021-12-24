const Employee = require("./Employee");

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

    getIcon(){
        return '<i class="bi bi-cup-fill fs-4"></i>'
    };
}

module.exports = Manager;