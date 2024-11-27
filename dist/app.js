"use strict";
// // function WithTemplate(template: string, hookId: string) {
// //     return function (_: Function) {
// //         const hookElement = document.getElementById(hookId);
// //         if (hookElement) {
// //             hookElement.innerHTML = template;
// //         }
// //     }
// // }
// // @WithTemplate("<h1> Hello Chandler..How u doing?? </h1>", "app")
// // class Person {
// //     name = "Chandler"
// //     constructor() {
// //         console.log("Creating person object...")
// //     }
// // }
// function WithTemplate(template: string, hookId: string) {
//     return function (constructor: any) {
//         const hookElement = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookElement) {
//             hookElement.innerHTML = template;
//             hookElement.querySelector('h1')!.textContent = p.name;
//         }
//     }
// }
// @WithTemplate("<h1> Hello Chandler..How u doing?? </h1>", "app")
// class Person {
//     name = "Chandler"
//     constructor() {
//         console.log("Creating person object...")
//     }
// }
// // Multiple decorators execute in bottom-up order.
// // Factories are called in top-down order.
// // The decorators produced by the factories are applied in bottom-up order.
// revising 1234567890..........
class Department {
    constructor(n) {
        this.name = n;
    }
    // here added type-safety
    describe() {
        console.log(`The Department is: ${this.name}`);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const otherAccounting = { name: "otherNames", describe: accounting.describe };
otherAccounting.describe();
