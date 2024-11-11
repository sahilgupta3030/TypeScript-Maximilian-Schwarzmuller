"use strict";
// // // static methods and properties.....
class Accounting1 {
    // static method
    static calculateSalary(baseSalary) {
        return baseSalary * Accounting1.accountingRate;
    }
}
// static property
Accounting1.accountingRate = 1.5;
console.log(Accounting1.calculateSalary(50000));
// Static members belong to the class, not instances, and are shared by all instances.
// // // Abstract Methods
class DepartmentClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
// Subclass implementing abstract method
class IT extends DepartmentClass {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT : ${this.id}`);
    }
}
// // using subclasses....
const itDept = new IT('d1', ['Max']);
itDept.addEmployee('Chandler');
itDept.describe();
itDept.printEmployees();
