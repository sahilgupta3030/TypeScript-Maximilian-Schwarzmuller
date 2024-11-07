"use strict";
// // // 5. Union.........
// function combine(input1: number, input2: number) {
//     const result = input1 + input2;
//     return result;
// }
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet({ name: "steve jobs", age: 25 });
const whatsAge = isOlder({ name: "steve jobs", age: 25 }, 40);
console.log(whatsAge);
