// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Prompt questions function 
function promptQuestions(title, info) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the ${title} name : `,
            name: 'name',
            validate: function (input) {
                if (/^[a-zA-Z]/.test(input)) {
                    return true
                } else { return false }
            }
        },
        {
            type: 'input',
            message: `Please enter the ${title} ID : `,
            name: 'id',
            validate: function (input) {
                if (/^[a-zA-Z0-9]/.test(input)) {
                    return true
                } else { return false }
            }
        },
        {
            type: 'input',
            message: `Please enter the ${title} email address : `,
            name: 'email',
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
                if (/^[a-zA-Z0-9]/.test(input)) {
                    return true
                } else { return false }
            }
        },
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.office_Number
            const githubProfile = data.Github_profile
            const schoolName = data.School_name
            let teamMember;

            switch (title) {

                case 'Manager':
                    teamMember = new Manager(name, id, email, officeNumber)
                    console.log(teamMember)
                    break;
                case 'Engineer':
                    teamMember = new Engineer(name, id, email, githubProfile)
                    console.log(teamMember)
                    break;
                case 'Intern':
                    teamMember = new Intern(name, id, email, schoolName)
                    console.log(teamMember)
                    break;
            }

            addEmployee();
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
                        promptQuestions("Engineer", "Github_profile");
                        break;
                    case 'Intern':
                        promptQuestions("Intern", "School_name");
                        break;
                    case 'I do not want to add any more team member':
                        console.log('finished')
                        break;
                }
            })
}

// function to initialize app 
promptQuestions("Manager", "office_Number");