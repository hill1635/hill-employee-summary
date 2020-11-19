// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        super(name, email, id);
        this.gitHub = gitHub;
    }
}
//Inquirer for GitHub account info