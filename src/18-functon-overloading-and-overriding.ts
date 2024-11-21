// // // // Function overloading
// // // Function overloading - multiple signatures...
// // // Multiple function signatures with the same name to handle different argument types or counts.

// type Combinable = string | number;
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;

// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// const result1 = add('Joey', ' Chandler');
// const result2 = add(10, 20);




// // // // Function Overriding
// // // Subclass provides its own implementation of a method that exists in the superclass.

// class Animal {
//     speak(): void {
//         console.log("Animal makes a sound");
//     }
// }
// class Dog extends Animal {
//     // Overriding the speak method in the subclass
//     speak(): void {
//         console.log("Dog barks");
//     }
// }

// const dog = new Dog();
// dog.speak(); // Dog barks
