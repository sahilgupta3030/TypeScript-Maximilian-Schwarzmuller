// // // Decorators......
// // turn on the 'experimentalDecorators' in the tsconfig..

// function Logger(constructor: Function) {
//     console.log("Logging....");
//     console.log(constructor);
// }

// @Logger
// class Person {
//     name = "Chandler"

//     constructor() {
//         console.log("Creating person object...")
//     }
// }




// // // Decorator factories
// function Logger(logString: string) {
//     return function (constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// @Logger("Logging here... Do u get that?")

// class Person {
//     name = "Chandler"

//     constructor() {
//         console.log("Creating person object...")
//     }
// }
