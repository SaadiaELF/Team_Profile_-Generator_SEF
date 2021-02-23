const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}