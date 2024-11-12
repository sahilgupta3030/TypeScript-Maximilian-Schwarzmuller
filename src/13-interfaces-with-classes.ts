// // // // using interfaces with classes....
// interface Named {
//     readonly name: string;
// }

// interface Greetings extends Named {
//     greet(phrase: string): void;
// }

// class Person implements Greetings {
//     name: string;
//     age = 30;

//     constructor(n: string) {
//         this.name = n;
//     }

//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1: Greetings;

// user1 = new Person('Chandler');
// // user1.name = 'Joey'; // Cannot assign to 'name' because it is a read-only property

// user1.greet('Hi there I am ...');
// console.log(user1);
