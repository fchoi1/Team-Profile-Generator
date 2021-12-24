const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const employeeIdList = [];

const checkID = (input) => {
    if(isNaN(input) || !input) return 'Please enter a valid ID Number'

    if(employeeIdList.indexOf(input) != -1) return 'ID exists already, enter a new one'
    
    return true
}

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is the person's job position?",
        choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
        default: 'Employee'
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name (Required)",
        validate: input => input ? true : 'Please enter a name'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID? (Required)",
        validate: checkID
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the person's email? (Required)",
        validate: input => /\S+@\S+\.\S+/.test(input) ? true :  'Please enter a valid email'
    },
];

const moreEmployees = [
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: "Add more employees",
        default: false
    }
]

const roleQuestions = {
    Employee: [],
    Engineer: [{
        type: 'input',
        name: 'github',
        message: "What is the github account name? (Required)",
        validate: input => input ? true :  'Please enter a name'
    }],
    Intern: [{
        type: 'input',
        name: 'school',
        message: "Which school is the intern from? (Required)",
        validate: input => input ? true :  'Please enter a school name'
    }],
    Manager: [{
        type: 'input',
        name: 'office',
        message: "What the office number? (Required)",
        validate: input => isNaN(input) || !input ? 'Please enter a valid Office Number' : true
    }]
}

const promptMember = (questionList) => {
    let employeeObj = {}
    return inquirer.prompt(questionList)
    .then(ans => {
        employeeObj = {...employeeObj, ...ans};
        return inquirer.prompt(roleQuestions[employeeObj.role])
    })
    .then(ans => {
        employeeObj = {...employeeObj, ...ans};
        return employeeObj;
    });
}

const getEmployeeList = (employeeRawList=[]) => {
    return promptMember(questions)
    .then(employee => {
        employeeIdList.push(employee.id);
        employeeRawList.push(employee)
    })
    // Ask to add more employees
    .then( () => {
        return inquirer.prompt(moreEmployees)
    })
    .then( ans => {
        return ans.moreEmployees ? getEmployeeList(employeeRawList) : employeeRawList;
    });
}


const createTeamHTML = (employeeList) => {
    const employeeClassList = [];
        for (person of employeeList){
            const {name, id, email} = person;
            switch (person.role){
                case "Employee":
                    employeeClassList.push(new Employee(name, id, email));
                    break;
                case "Manager":
                    employeeClassList.push(new Manager(name, id, email, person.office));
                    break;
                case "Engineer":
                    employeeClassList.push(new Engineer(name, id, email, person.github));
                    break;
                case "Intern":
                    employeeClassList.push(new Intern(name, id, email, person.school));
                    break;
            }
        }
    const teamHTML = generateHTML(employeeClassList);
    // For writing to mock data
    fs.writeFileSync('./dist/index.html', teamHTML);
}

const createTeamCSS = () => {
    fs.copyFileSync('./src/styles.css', './dist/styles.css');
}

const init = () => {
    getEmployeeList().then(list => {
        //console.log(list);
        createTeamHTML(list);
        console.log("HTML created");
        createTeamCSS();
        console.log("CSS created");

    });
}

const test = () => {
    let mockData = fs.readFileSync('data.json');
    let list = JSON.parse(mockData);

    createTeamHTML(list);
    console.log("HTML created");
    createTeamCSS();
    console.log("CSS created");
}

// unComment to run test code to pull data from data.json
//test()

// Comment to stop the prompts to use test data
init();


