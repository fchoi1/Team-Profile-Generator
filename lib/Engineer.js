const Employee = require("./Employee");

class Engineer extends Employee {
    #github
    constructor(name, id, email, github){
        super(name, id, email)
        this.#github = github;
        Object.seal(this);
    };

    getGithub(){
        return this.#github;
    };

    getRole(){
        return 'Engineer';
    };

    getIcon(){
        return '<i class="bi bi-tools fs-4"></i>'
    }
}

module.exports = Engineer;