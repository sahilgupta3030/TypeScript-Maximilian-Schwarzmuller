"use strict";
// // // // Getters and setters........
// class Department1 {
//     // Used "protected" for accessing within classes & subclasses only..
//     protected employees: string[] = [];
//     constructor(private readonly id: string, public name: string) { }
//     describe(this: Department1) {
//         console.log(`Department1 (${this.id}): ${this.name}`);
//     }
//     addEmployee(employee: string) {
//         // validation etc etc
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
// class AccountingDepartment extends Department1 {
//     private lastReport: string;
//     // Getter for mostRecentReport
//     get mostRecentReport() {
//         if (this.lastReport) {
//             return this.lastReport;
//         }
//         throw new Error('No report found.');
//     }
//     // Setter for mostRecentReport
//     set mostRecentReport(value: string) {
//         if (!value) {
//             throw new Error('Please pass in a valid value!');
//         }
//         this.addReport(value);
//     }
//     constructor(id: string, private reports: string[]) {
//         super(id, 'Accounting');
//         this.lastReport = reports[0];
//     }
//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }
//     printReports() {
//         console.log(this.reports);
//     }
// }
// const accounts = new AccountingDepartment('D002', ['report1', 'report2']);
// // Using the getter to retrieve the most recent report
// console.log(accounts.mostRecentReport);
// // Using the setter to set a new report:
// accounts.mostRecentReport = 'Year End Report';
// // Now, using the getter again to get the updated report:
// console.log(accounts.mostRecentReport);
