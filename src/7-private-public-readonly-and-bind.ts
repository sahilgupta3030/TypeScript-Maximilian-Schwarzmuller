// // // // Creating a class...
// // class Department {
// //     name: string;

// //     constructor(n: string) {
// //         this.name = n;
// //     }
// // }
// // const accounting = new Department("Accounting");
// // console.log(accounting);




// // //added the describe function but can be accessed by other objects....
// // class Department {
// //     name: string;

// //     constructor(n: string) {
// //         this.name = n;
// //     }

// //     describe(): void {
// //         console.log(`The Department is: ${this.name}`)
// //     }
// // }
// // const accounting = new Department('Accounting');
// // accounting.describe();

// // const otherAccounting = { name: "otherName", describe: accounting.describe };
// // otherAccounting.describe();


// // // to ensure type safety... do this
// // class Department {
// //     public name: string;

// //     constructor(n: string) {
// //         this.name = n;
// //     }

// //     // here added type-safety
// //     describe(this: Department): void {
// //         console.log(`The Department is: ${this.name}`)
// //     }
// // }
// // const accounting = new Department('Accounting');
// // accounting.describe();

// // const otherAccounting = { name: "otherNames", describe: accounting.describe };
// // otherAccounting.describe();






// // // // // private and public access modifiers....
// class Department {
//     public readonly name: string; // readonly keyword does not let it be modified!
//     private employees: string[] = [];

//     constructor(n: string) {
//         this.name = n;
//     }

//     describe(this: Department) {
//         console.log('Department: ' + this.name);
//     }
//     addEmployee(employee: string) {
//         // validation etc
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.addEmployee('Joey');
// accounting.addEmployee('Chandler');
// // accounting.employees[2] = 'Ross'; // not worked .. private and only accessible within class

// accounting.describe();
// // accounting.name = 'NEW NAME'; // after readonly it cannot be modified
// accounting.describe();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY',employees:[], describe: accounting.describe };
// // accountingCopy.describe(); // throws error
// // though it gets exact shape of the class ..the accountingCopy is Not a class (public and private things)
// // so this will not work!

// const accountingCopy = { name: 'DUMMY',employees:[], describe: accounting.describe.bind(accounting) };
// accountingCopy.describe(); // "bind" binds it to the instance itself.. so it works!

// // Calling describe using `call()` with the `accounting` context
// accountingCopy.describe.call(accounting);

// // Using apply() to call describe() with the correct context
// accountingCopy.describe.apply(accounting);
