const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        return `https://github.com/${github}`;
    }

    getRole() {
        return 'Engineer';
    }
}