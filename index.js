const inquirer = require('inquirer');
const fs = require('fs');
const generateWebPage = require('./src/generateHTML');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name (Required)",
        validate: input => input ? true : 'Please enter a name'
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the person's job position?",
        choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
        default: 'Employee'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID? (Required)",
        validate: input => !isNaN(input) ? true :  'Please enter a valid ID Number'
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
        name: 'offic',
        message: "What the office number? (Required)",
        validate: input => !isNaN(input) ? true :  'Please enter a valid Number'
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
    })
}

const getEmployeeList = (employeeList=[]) => {
    return promptMember(questions)
    .then(employee => {
        employeeList.push(employee)
    })
    // Ask to add more employees
    .then( () => {
        return inquirer.prompt(moreEmployees)
    })
    .then( ans => {
        return ans.moreEmployees ? getEmployeeList(employeeList) : employeeList;
    })
}

const sentEmployeeList = () => {}

const init = () => {
    getEmployeeList().then( list => {
        const employeeList = list;

        // For writing to mock data
        // fs.writeFile('./data.json', JSON.stringify(employeeList), err => {
        //     return new Promise((resolve, reject) => {
        //         return err ? reject(err) :
        //             resolve({
        //                 ok: true,
        //                 message: 'ReadME File Created'
        //             });
        //     });
        // });
    })
}

const test = () => {
    let mockData = fs.readFileSync('data.json');
    let employeeList = JSON.parse(mockData);
}


test()
