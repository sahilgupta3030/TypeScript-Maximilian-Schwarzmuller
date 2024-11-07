"use strict";
// // // // Return types of function.....
// function addition(n1: number, n2: number): number {
//     return n1 + n2;
// }
// function printResult(input: number): undefined {
//     console.log("Result is: ", input);
//     return;
// }
// // printResult(addition(10, 25));
// console.log(addition(10, 25));
// console.log(printResult(addition(10, 25)));
// console.log(printResult(addition(10, 25)));
// // // // Function as Types
// function addition(n1: number, n2: number): number {
//     return n1 + n2;
// }
// function printResult(input: number): undefined {
//     console.log("Result is: ", input);
//     return;
// }
// // here we cannot define what exactly we want our function to be ...
// // let combined: Function;
// // here's better approach for function type   :(params: param-type)=> return-type;
// let combined: (a: number, b: number) => number;
// combined = addition;
// // it will yell error now if we assign diff function here...
// // combined = printResult;
// console.log(combined(10, 17));
// // // Function as callbacks.....
function addHandle(a, b, callback1) {
    let result = a + b;
    callback1(result);
}
addHandle(20, 30, (ans) => {
    console.log(ans);
});
