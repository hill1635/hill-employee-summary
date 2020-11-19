// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");

//Inquirer for name, title, and ID
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        console.log(this.name);
    }

    getID() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log("Employee");
    }
}

const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID#: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address: ',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Role: ',
            choices: ['Manager', 'Engineer', 'Intern', 'None of the Above'],
        },
    ])
        .then((data) => {
            const employee = new Employee(data.name, data.id, data.email, data.role);
            console.log(employee);
            employee.getName();
            employee.getID();
            employee.getEmail();
            employee.getRole();
        });

questions();