// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
function promptQuestions(title, info) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the ${title} name : `,
            name: `${title}Name`,
        },
        {
            type: 'input',
            message: `Please enter the ${title} ID : `,
            name: `${title}Id`,
        },
        {
            type: 'input',
            message: `Please enter the ${title} email address : `,
            name: `${title}Email`,
        },
        {
            type: 'input',
            message: `Please enter the ${info} : `,
            name: `${info}`,
        },
    ])
        .then(function (data) {
            addEmployee()
        })
}
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'employee',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team member'],
        },
    ])
        .then(
            function (data) {
                switch (data.employee) {
                    case 'Engineer':
                        promptQuestions("Engineer", "Github profile");
                        break;
                    case 'Intern':
                        promptQuestions("Intern", "School name");
                        break;
                    case 'I do not want to add any more team member':
                        console.log('finished')
                        break;
                }
            })
}


// function to initialize app 
promptQuestions("Manager", "office Number");