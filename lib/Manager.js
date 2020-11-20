const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
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

module.exports = Manager;