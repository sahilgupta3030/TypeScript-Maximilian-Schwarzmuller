"use strict";
// // // // 5. Union.........
// // function combine(input1: number, input2: number) {
// //     const result = input1 + input2;
// //     return result;
// // }
// // const ans = combine(10, 20);
// // console.log(ans);
// // function combine(input1: number | string, input2: number | string) {
// //     let result;
// //     if (typeof input1 === "number" && typeof input2 === "number") {
// //         result = input1 + input2;
// //     } else {
// //         result = input1.toString() + input2.toString();
// //     }
// //     return result;
// // }
// // const ans1 = combine(10, 20);
// // console.log(ans1);
// // const ans2 = combine("Good", "Morning");
// // console.log(ans2);
// // // // 6. String literals.........
// // function combine(
// //     input1: number | string,
// //     input2: number | string,
// //     resultConversion: 'as-number' | 'as-text'
// //   ) {
// //     let result;
// //     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
// //       result = +input1 + +input2;
// //     } else {
// //       result = input1.toString() + input2.toString();
// //     }
// //     return result;
// //     // if (resultConversion === 'as-number') {
// //     //   return +result;
// //     // } else {
// //     //   return result.toString();
// //     // }
// //   }
// //   const combinedAges = combine(30, 26, 'as-number');
// //   console.log(combinedAges);
// //   const combinedStringAges = combine('30', '26', 'as-number');
// //   console.log(combinedStringAges);
// //   const combinedNames = combine('Steve', 'Jobs', 'as-text');
// //   console.log(combinedNames);
// // // // 7. Type aliases.........
// type Combinable = number | string;
// type inputDescription = 'as-text' | 'as-number';
// // Type aliases can be used to "create" your own types.
// // You're not limited to storing union types though -
// // you can also provide an alias to a (possibly complex) object type.
// // For example:
// // type User = { name: string; age: number };
// // const u1: User = { name: 'Max', age: 30 }; // this works!
// // This allows you to avoid unnecessary repetition and manage types centrally.
// // For example, you can simplify this code:
// // function greet(user: { name: string; age: number }) {
// //   console.log('Hi, I am ' + user.name);
// // }
// // function isOlder(user: { name: string; age: number }, checkAge: number) {
// //   return checkAge > user.age;
// // }
// // To this neat and clean code..
// type User = { name: string; age: number };
// function greet(user: User) {
//     console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: User, checkAge: number) {
//     return checkAge > user.age;
// }
// greet({ name: "steve jobs", age: 25 });
// const whatsAge = isOlder({ name: "steve jobs", age: 25 }, 40);
// console.log(whatsAge);
