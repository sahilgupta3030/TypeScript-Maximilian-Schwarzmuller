"use strict";
class Departments {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Used "protected" for accessing within classes & subclasses only..
        this.employees = [];
    }
    describe() {
        console.log(`Departments (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        // validation etc etc
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartments extends Departments {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    // method override here...
    addEmployee(employee) {
        if (employee === "Joey") {
            return;
        }
        this.employees.push(employee);
    }
}
const it = new ITDepartments('D001', ['Max']);
it.addEmployee('Joey');
it.addEmployee('Chandler');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
class AccountingDepartments extends Departments {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting1 = new AccountingDepartments('D002', []);
accounting1.addReport('Something went wrong...');
accounting1.printReports();
const accountingCopy1 = { name: 'DUMMY', describe: accounting1.describe };
// accountingCopy1.describe(); // not worked!
// // because accountingCopy1 is an object, not a class instance...
