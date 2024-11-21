"use strict";
// // // // discriminated unions....
// // interface Birds {
// //     flyingSpeed: number;
// // }
// // interface Horse {
// //     runningSpeed: number;
// // }
// // type Animal = Birds | Horse;
// // function moveAnimal(animal: Animal) {
// //     if ('flyingSpeed' in animal)
// //         console.log("Moving with the speed: ", animal.flyingSpeed);
// //     if ('runningSpeed' in animal)
// //         console.log("Moving with the speed: ", animal.runningSpeed)
// // }
// // const whiteHorse: Animal = { runningSpeed: 120 };
// // moveAnimal(whiteHorse);
// // // continued......
// // interface Birds {
// //     type: 'bird',
// //     flyingSpeed: number,
// // }
// // interface Horse {
// //     type: 'horse',
// //     runningSpeed: number;
// // }
// // type Animal = Birds | Horse;
// // function moveAnimal(animal: Animal) {
// //     let speed;
// //     switch (animal.type) {
// //         case 'bird':
// //             speed = animal.flyingSpeed;
// //             break;
// //         case 'horse':
// //             speed = animal.runningSpeed;
// //             break;
// //     }
// //     console.log("Movement Speed:", +speed);
// // }
// // moveAnimal({ type: 'bird', flyingSpeed: 50 });
// // // // Type casting....
// // const input1 = <HTMLInputElement>document.getElementById('user_input');
// const input1 = document.getElementById('user_input') as HTMLInputElement;
// input1.value = "steve jobs is here..";
// // // // Index properties...
// interface ErrorContainer {
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     name: "steve jobs",
//     // roll:101, // Not assignable
//     10: "welcome" // as num is converted to string
// }
