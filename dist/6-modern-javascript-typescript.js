"use strict";
// // // // Arrow functions....
// // const addition = (a: number, b: number) => {
// //     return a + b;
// // }
// // const subtraction = (a: number, b: number) => b - a;
// // console.log(addition(20, 30));
// // console.log(subtraction(20, 30));
// // // //const justReturn1 = value: number => value; // do not work in typescript (valid in Js)
// // const justReturn2 = (value: number) => value; // this works
// // const justReturn3: (a: number) => number = output => output; // now it works
// // // // default parameters should come last in typescript
// // function learning1(a: number, b: number = 1) {
// //     return a + b;
// // }
// // console.log(learning1(5));
// // // // Spread operators....
// // const hobbies = ["drawing", "reading"];
// // const timePass = ["youtube", "instagram", "facebook"];
// // const newHobbies = ["chess", ...hobbies];
// // newHobbies.push(...timePass);
// // console.log(newHobbies);
// // // copying object to a const..
// // const obj1 = {
// //     name: "Steve",
// //     age: 25
// // }
// // const const1 = obj1; // not a copy but a reference!!
// // const const2 = { ...obj1 }; // this creates a real copy
// // console.log(const1);
// // console.log(const2);
// // Rest operators......
// // const addition = (...numb: number[]) => {
// //     return numb.reduce((currResult, currValue) => {
// //         return currResult + currValue;
// //     }, 0);
// // }
// // console.log(addition(10, 20, 30, 40, 50, 60));
// // // //array and object destructuring...
// // const timePass = ["youtube", "instagram", "facebook", "interest", "telegram", "whatsapp", "linkedin"];
// // const [hob1, hob2, ...remainingThings] = timePass;
// // console.log(hob1);
// // console.log(hob2);
// // console.log(remainingThings);
// const obj1 = {
//     firstName: "Steve",
//     lastName: "Jobs",
//     age: 25,
//     role: "developer",
//     location: "california"
// };
// const { firstName, lastName, ...allThings } = obj1; // same name as in object!
// console.log(firstName);
// console.log(lastName);
// console.log(allThings);
