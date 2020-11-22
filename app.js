const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name:",
        },
        {
            type: "input",
            name: "id",
            message: "ID#:",
        },
        {
            type: "input",
            name: "email",
            message: "Email Address:",
        },
        {
            type: "list",
            name: "role",
            message: "Role:",
            choices: ["Manager", "Engineer", "Intern", "None of the Above"],
        },
    ])
        .then((data) => {
            const employee = new Employee(data.name, data.id, data.email);
            name = employee.getName();
            id = employee.getId();
            email = employee.getEmail();

            if (data.role === "Manager") {
                managerQuest();
            } else if (data.role === "Engineer") {
                engineerQuest();
            } else if (data.role === "Intern") {
                internQuest();
            }
        });

const managerQuest = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            prompt: "Office Number:"
        },
    ])
        .then((data) => {
            const manager = new Manager(name, id, email, data.officeNumber);
            employees.push(manager);
            continueQuest();
        });

const engineerQuest = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            prompt: "GitHub Account:"
        },
    ])
        .then((data) => {
            const engineer = new Engineer(name, id, email, data.github);
            employees.push(engineer);
            continueQuest();
        });

const internQuest = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            prompt: "School:"
        },
    ])
        .then((data) => {
            const intern = new Intern(name, id, email, data.school);
            employees.push(intern);
            continueQuest();
        });

const continueQuest = () =>
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to add another team member?'
        },
    ])
        .then((data) => {
            if (data.continue === true) {
                questions();
            } else {
                fs.writeFile(outputPath, render(employees), (err) =>
                    err ? console.error(err) : console.log("Success!")
                );
            }
        });

questions();