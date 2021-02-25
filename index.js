// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function promptQuestions(title, info) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the ${title} name : `,
            name: `${title}Name`,
            validate: function (input) {
                return /^([a-zA-Z])$/.test(input)
            }
        },
        {
            type: 'input',
            message: `Please enter the ${title} ID : `,
            name: `${title}Id`,
            validate: function (input) {
                return /^([a-zA-Z0-9])$/.test(input)
            }

        },
        {
            type: 'input',
            message: `Please enter the ${title} email address : `,
            name: `${title}Email`,
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: 'input',
            message: `Please enter the ${info} : `,
            name: `${info}`,
            validate: function (input) {
                return /^([a-zA-Z0-9])$/.test(input)
            }
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

function validateInput(input) {
    if (typeof input !== 'string') {
        return 'Please enter a string';
    }
    return true;
}
// function to initialize app 
promptQuestions("Manager", "office Number");