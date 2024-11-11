// // // static methods and properties.....
class Accounting1 {
    // static property
    static accountingRate: number = 1.5;

    // static method
    static calculateSalary(baseSalary: number): number {
        return baseSalary * Accounting1.accountingRate;
    }
}

console.log(Accounting1.calculateSalary(50000));
// Static members belong to the class, not instances, and are shared by all instances.





// // // Abstract Methods
abstract class DepartmentClass {
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) { }

    // Abstract method to be implemented in subclasses
    abstract describe(): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees);
    }
}

// Subclass implementing abstract method
class IT extends DepartmentClass {
    admins: string[];

    constructor(id: string, admins: string[]) {
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