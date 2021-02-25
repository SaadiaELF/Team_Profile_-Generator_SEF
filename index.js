// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
class Questions {
    constructor(title, info) {
        this.title = title;
        this.info = info;
    }
    promptQuestions() {
        const questions = [
            {
                type: 'input',
                message: `Please enter the ${this.title} name : `,
                name: `${this.title}Name`,
            },
            {
                type: 'input',
                message: `Please enter the ${this.title} ID : `,
                name: `${this.title}Id`,
            },
            {
                type: 'input',
                message: `Please enter the ${this.title} email address : `,
                name: `${this.title}Email`,
            },
            {
                type: 'input',
                message: `Please enter the ${this.info} : `,
                name: `${this.info}`,
            },
        ];
        return questions;
    }
    chooseEmployee() {
        const question = [
            {
                type: 'list',
                message: 'Which type of team member would you like to add?',
                name: 'employee',
                choices: ['Engineer', 'Intern', 'I do not want to add any more team member'],
            },
        ];
        return question
    }

}
// Prompt to generate questions using questions array 
// const promptUser = () =>
//     inquirer.prompt(new Questions("Manager", "office_Number").promptQuestions());
//     inquirer.prompt(new Questions().chooseEmployee());

    // Function to generate the Readme file
// const generateReadme = (answers) => generateMarkdown(answers) ;
// // the repo where the file will be created
// const fileName = './utils/README.md';

// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data);
// }

// function to initialize app 
function init() {
    inquirer.prompt(new Questions("Manager", "office_Number").promptQuestions()).then((answers) => {
        try {
            inquirer.prompt(new Questions().chooseEmployee()).then((answers) => {
                try {
                    // const readme = generateReadme(answers);
                    // writeToFile(fileName, readme);
                    console.log('Successfully wrote to README.md');
                } catch (error) {
                    console.log(error);
                }
            });
            console.log('Successfully wrote to README.md');
        } catch (error) {
            console.log(error);
        }
    });
    

}
// Function call to initialize app
init();