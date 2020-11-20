// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super problem
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }

    getRole() {
        console.log("Manager role: ", this.role);
        return this.role;
    }
}

// const managerQuest = () =>
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "officeNumber",
//             prompt: "Office Number:"
//         },
//     ])
//         .then((data) => {
//             const manager = new Manager(data.officeNumber);
//             console.log(manager);
//             manager.getOfficeNumber();
//             manager.getRole();
//         });
//Inquirer for Office Numberl
module.exports = Manager;