// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamArray = [];
const htmlArray = [];

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
            const github = data.Github_profile
            const school= data.School_name
            let teamMember;

            switch (title) {

                case 'Manager':
                    teamMember = new Manager(name, id, email, officeNumber)
                    teamArray.push(teamMember)
                    console.log(teamArray)
                    break;
                case 'Engineer':
                    teamMember = new Engineer(name, id, email, github)
                    teamArray.push(teamMember)
                    console.log(teamArray)
                    break;
                case 'Intern':
                    teamMember = new Intern(name, id, email, school)
                    teamArray.push(teamMember);
                    console.log(teamArray);
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
                        console.log('Your team is successfully generated !')
                        generateHTML();
                        generateStyle();
                        break;
                }
            })
}
function generateHTML() {
    const htmlBeginning = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet" />
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <title>Team Profile</title>
</head>

<body >
    <header class="row justify-content-center ms-0 me-0 shadow rounded">
        <h1 class="text-center mb-5 mt-5">My Team</h1>
    </header>
<main class="container mt-5">
    <div class="row justify-content-center">
`
    const htmlEnding = `    
</div>
</main>
</body>

</html>`
    htmlArray.push(htmlBeginning);
        for (let i = 0; i < teamArray.length; i++) {
        let htmlBody = `
        <div class="col-sm-4">
            <div class="card mt-2">
                <div class="card-header">
                    <!-- adding name -->
                    <h2 class="text-center">${teamArray[i].name}</h2>
                </div>
                <div class="card-body">
                    <ul id="list">
                        <!-- adding icon and post based on one input -->
                        <li> <i class="fas fa-user fa-5x float-start"></i> </li>
                        <li>
                            <h4 class="card-title text-center float-start ps-5 pt-4">${teamArray[i].title}</h4>
                        </li>
                    </ul>
                </div>
                <!-- adding info -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${teamArray[i].id}</li>
                    <li class="list-group-item">Email : ${teamArray[i].email}</li>
        `
        if (teamArray[i].officeNumber) {
            htmlBody += `
            <li class="list-group-item">Office number : ${teamArray[i].officeNumber}</li>
            `
        }
        if (teamArray[i].github) {
            htmlBody += `
            <li class="list-group-item">GitHub : ${teamArray[i].github} <a href="https://github.com/${teamArray[i].github}"></a></li>
           `
        }
        if (teamArray[i].school) {
            htmlBody += `
            <li class="list-group-item">School : ${teamArray[i].school}</li>
            `
        }
        htmlBody += `
        </ul>
        </div>
        </div>
        `
        htmlArray.push(htmlBody)
    }

    htmlArray.push(htmlEnding);

    fs.writeFile(`./dist/teamProfile.html`, htmlArray.join(""), function (err) {
    });
};
function generateStyle() {
    const style = `
    body{
        background-color: rgba(198, 223, 231, 0.972);
        }
        
        header {
        background-color: rgb(33, 143, 180);
        max-width: 100%;
        margin-left: 0px;
        margin-right: 0px;
        }
        #list {
            list-style-type: none;
        }
    `
    fs.writeFile(`./dist/style.css`, style, function (err) {
    });
};
// function to initialize app 
promptQuestions("Manager", "office_Number");