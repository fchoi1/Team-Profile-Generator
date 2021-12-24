const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const generateHtml = require('./src/generateHTML');


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
        name: 'office',
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

const getEmployeeList = (employeeRawList=[]) => {
    return promptMember(questions)
    .then(employee => {
        employeeList.push(employee)
    })
    // Ask to add more employees
    .then( () => {
        return inquirer.prompt(moreEmployees)
    })
    .then( ans => {
        return ans.moreEmployees ? getEmployeeList(employeeRawList) : employeeRawList;
    })
}

const createTeamHTML = (classList) => {
    const teamHTML = generateHtml(classList);
    // For writing to mock data
    fs.writeFileSync('./dist/index.html', teamHTML);
}

const createTeamCSS = () => {
    fs.copyFileSync('./src/styles.css', './dist/styles.css');
}

const init = () => {
    getEmployeeList().then(list => {
        //console.log(list);
        const employeeClassList = [];
        for (person of list){
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
        createTeamHTML(employeeClassList);
        console.log("HTML created");
        createTeamCSS();
        console.log("CSS created");

    });
}


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

const test = () => {
    let mockData = fs.readFileSync('data.json');
    let list = JSON.parse(mockData);

    const employeeClassList = [];
    for (person of list){
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
    createTeamHTML(employeeClassList);
    console.log("HTML created");
    createTeamCSS();
    console.log("CSS created");

    
}


test()
//init();


