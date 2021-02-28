// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Classes needed to invoke the app
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Array to hold team members
const teamArray = [];
// Array to hold html file 
const htmlArray = [];

// Prompt questions function 
// title can be "Manager", "Engineer" or "Intern"
// info refers to "office_Number", "Github_profile" or "School_name"
function promptQuestions(title, info) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Please enter the ${title} name : `,
            name: 'name',
            // validating the name to contain only letters 
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
            // validating the name to contain only letters and/or numbers
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
                // validating the email syntax (test@test.com)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: 'input',
            message: `Please enter the ${info} : `,
            name: `${info}`,
            // validating the input to contain only letters and/or numbers
            validate: function (input) {
                if (/^[a-zA-Z0-9]/.test(input)) {
                    return true
                } else { return false }
            }
        },
    ])
        // the response of the prompts will store the classes into teamArray
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.office_Number
            const github = data.Github_profile
            const school = data.School_name
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

// prompt to add a new member or to finish building the team
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'employee',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team member'],
        },
    ])
        // the response of the promise will generate the promptQuestions depending on the choice
        // or will generate the HTML and CSS 
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
// generating the HTML file on ./dist folder
function generateHTML() {
    // the beginning of the HTML file that remains the same for every team
    const htmlBeginning = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS Bootstrap framework-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- link to CSS file-->
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
    // the ending of the HTML file that remains the same for every team
    const htmlEnding = `    
</div>
</main>
</body>
</html>`

    // pushing firstly the htmlBeginning into the htmlArray 
    htmlArray.push(htmlBeginning);
    // Creating the body of the HTML file that holds the team members cards
    for (let i = 0; i < teamArray.length; i++) {
        // this first part is common to all employees titles
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
                    <li class="list-group-item"><b>ID : </b>${teamArray[i].id}</li>
                    <li class="list-group-item"><b>Email : </b>${teamArray[i].email}</li>
        `
        // This part add customized info depending of each employee title
        if (teamArray[i].officeNumber) {
            htmlBody += `
            <li class="list-group-item"><b>Office number : </b>${teamArray[i].officeNumber}</li>
            `
        }
        if (teamArray[i].github) {
            htmlBody += `
            <li class="list-group-item"><b>GitHub : </b><a href="https://github.com/${teamArray[i].github}"> ${teamArray[i].github} </a></li>
           `
        }
        if (teamArray[i].school) {
            htmlBody += `
            <li class="list-group-item"><b>School : </b>${teamArray[i].school}</li>
            `
        }
        htmlBody += `
        </ul>
        </div>
        </div>
        `
        // pushing secondly the htmlBody into the htmlArray 
        htmlArray.push(htmlBody);
    }

    // pushing finally the htmlEnding into the htmlArray 
    htmlArray.push(htmlEnding);

    const fileName = './dist/teamProfile.html';

    // Creating a HTML file after converting the htmlArray into a string
    fs.writeFileSync(fileName, htmlArray.join(""));
};

// generating the CSS file on ./dist folder
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
    const fileName = './dist/style.css';
    fs.writeFileSync(fileName, style)
};

// function to initialize app 
promptQuestions("Manager", "office_Number");