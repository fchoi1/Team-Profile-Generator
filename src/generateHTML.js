const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');
const pretty = require('pretty');
const { builtinModules } = require('module');

const test = function(){
    const employee = new Employee('Person 1', '1', 'some@email.com' )
    const engineer = new Engineer('Person 2', '2', 'some@email.com', 'testGithub' )
    const engineer2 = new Engineer('Person 3', '3', 'some2@email.com', 'testGithub2' )
    const intern = new Intern('Person 4', '4', 'some@email.com', 'school1' )
    const manager = new Manager('Person 5', '5', 'some@email.com', '1' )

    let employeeList = [employee, engineer, engineer2, intern, manager ];
    console.log();
    fs.writeFileSync('../dist/index.html', generateHtml(employeeList));
}

const generateHtml = function(personList){
    const html =  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./styles.css">
    </head>
        
    <body>
        <header class="title-wrapper bg-danger p-3 text-center d-flex  flex-column justify-content-center">
            <h1 class="h1 text-white">My Team</h1>
        </header>

        <main class="main-section p-3">
            <div class="card-section container">
                <div class="row d-flex justify-content-center flex-wrap">
                    ${generateCardSection(personList)}
                    </div>
                        
                </div>
            </div>
        </main>
    </body>
    </html>`

    return pretty(html, {ocd: true});
}

const generateCardSection = function(personList){
    let cardsectionHtml = ''

    if(!personList) return cardsectionHtml;
    for(person of personList){
        cardsectionHtml += generateCardHtml(person);
    }
    return cardsectionHtml;
}

const generateCardHtml = function(person){
    
    return `
    <div class=" col-12 col-md-6 col-lg-4 d-flex justify-content-center ">
        <div class="card m-3" style="width: 18rem;">
            <div class="card-header bg-info rounded">
                <h2 class="card-title fs-3">${person.getName()}</h2>
                <h3 class="card-subtitle fs-4"> ${person.getIcon()} ${person.getRole()}</h3>
            </div>
            <div class="card-body bg-light d-flex align-items-center flex-column">
                <div class="container border border-black rounded m-1 w-100 px-3 bg-white">
                    <span class="employee-id small"> ID: ${person.getId()}</span>
                </div>
                <div class="container border border-color-black rounded m-1 w-100 px-3 bg-white ">
                    <span class="employee-email small"> Email: <a href="mailto:${person.getEmail()}">${person.getEmail()} </a></span>
                </div>
                ${generateCustomRole(person)}
            </div>
        </div>
    </div>`
}

const generateCustomRole = function(person){
    let customField = null;
    let customText = null;
    let customClass = null;
    switch(person.getRole()){
        case 'Engineer':
            customField = person.getGithub();
            customText = `Github: ${person.getGithub()} `;
            customClass = 'github';
            break;
        case 'Manager':
            customField = person.getOffice().toString();
            customText = `Office Number: ${person.getOffice().toString()} `;
            customClass = 'office';
            break;
        case 'Intern':
            customField = person.getSchool();
            customText = `School: ${person.getSchool()}`;
            customClass = 'school';
            break;
    }
    return customField ? `
    <div class="container border border-color-black  rounded m-1 w-100 px-3 bg-white">
        <span class="employee-${customClass} small"> ${customText} </span>
    </div> ` : '';
}
//test()
modules.exports = generateHtml;
