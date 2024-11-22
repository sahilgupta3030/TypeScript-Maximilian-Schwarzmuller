"use strict";
// // // default generic types...
// const names: Array<string | number> = [];
// const promise: Promise<string> = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("A very good evening..")
//     }, 1000);
// })
// // // creating own generic types..
// function merge(objA: object, objB: object) {
//     return { ...objA, ...objB };
// }
// const result = merge({ name: "chandler" }, { age: 25 });
// // console.log(result.name); // Not working
// function genericMerge<T, U>(objA: T, objB: U): T & U {
//     return { ...objA, ...objB };
// }
// const resultTwo = genericMerge({ name: "joey" }, { age: 30 });
// console.log(resultTwo.name); // Working
