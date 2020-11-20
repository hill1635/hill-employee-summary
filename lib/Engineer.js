// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        super(name, id, email, role);
        this.gitHub = gitHub;
    }

    getGitHub() {
        console.log(this.gitHub);
    }

    getRole() {
        console.log('Engineer');
    }
}

const addQuestion = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'gitHub',
            message: 'GitHub Account: ',
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
            console.log(engineer);
            employee.getName();
            employee.getID();
            employee.getEmail();
            employee.getGitHub();
            employee.getRole();
        });
// questions();