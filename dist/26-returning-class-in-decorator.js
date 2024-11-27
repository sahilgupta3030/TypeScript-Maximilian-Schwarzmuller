"use strict";
// // // Returning a class.......
// // logic in constructor.
// function WithTemplate(template: string, hookId: string) {
//     return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
//         return class extends originalConstructor {
//             constructor(...args: any[]) {
//                 super(...args); // Pass arguments to the original constructor
//                 const hookElement = document.getElementById(hookId);
//                 if (hookElement) {
//                     hookElement.innerHTML = template;
//                     // hookElement.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         };
//     };
// }
// @WithTemplate("<h1>Hello Chandler..How u doing??</h1>", "app")
// class Person {
//     name = "Chandler";
//     constructor() {
//         console.log("Creating person object...");
//     }
// }
// // Instantiate the class to trigger the decorator logic......
// const person = new Person();
// // Logic in Decorator - Runs when the class is defined (design time) 	-- Instantiation?(No)
// // Logic in Constructor	- Runs when an instance of the class is created	-- Instantiation?(Yes)
