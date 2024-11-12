"use strict";
// // // // Optional properties.......
// interface Named {
//   name?: string;
//   outputName?: string;
// }
// interface Greetings extends Named {
//   greet(phrase: string): void;
// }
// class Person implements Greetings {
//   name?: string;
//   age = 30;
//   constructor(n?: string) {
//     if (n) {
//       this.name = n;
//     }
//   }
//   greet(phrase: string) {
//     if (this.name) {
//       console.log(phrase + ' ' + this.name);
//     } else {
//       console.log('Good day!');
//     }
//   }
// }
// let user1: Greetings; // Parents type
// user1 = new Person(); // Child Instance
// // user1.name = 'Chandler'; // this is optional!
// user1.greet('Hi there I am....');
// console.log(user1);
