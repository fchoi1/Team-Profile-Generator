const inquirer = require('inquirer');
const fs = require('fs');
const generateWebPage = require('./src/generateHTML');
const { resolvePtr } = require('dns');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name (Required)",
        validate: input => input ? true :  console.log('Please enter a name')
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
        name: 'email',
        message: "What is the person's email? (Required)",
        choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
        validate: input => /\S+@\S+\.\S+/.test(input) ? true :  console.log('\n Please enter a valid email')
    },
];

const managerQuestions = []
const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: "What is the github account name?",
    validate: input => input ? true :  console.log('Please enter a name')
}]
const internQuestions = []


const promptMembers = (questionList) => {
    return inquirer.prompt(questionList)
    .then(ans => {
        console.log(ans)
    })
}

promptMembers(questions)