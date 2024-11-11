"use strict";
// // // Getters and setters........
class Department1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Used "protected" for accessing within classes & subclasses only..
        this.employees = [];
    }
    describe() {
        console.log(`Department1 (${this.id}): ${this.name}`);
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
class AccountingDepartment extends Department1 {
    // Getter for mostRecentReport
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    // Setter for mostRecentReport
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounts = new AccountingDepartment('D002', ['report1', 'report2']);
// Using the getter to retrieve the most recent report
console.log(accounts.mostRecentReport);
// Using the setter to set a new report:
accounts.mostRecentReport = 'Year End Report';
// Now, using the getter again to get the updated report:
console.log(accounts.mostRecentReport);
