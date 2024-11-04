<<<<<<< HEAD
// // 1
// console.log("Hello typescript");

// // 2
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// const number1 = 10;
// const number2 = 1.2;
// const res = add(number1, number2);
// console.log(res);

// // 3
// function add(num1: number, num2: number): number {
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         throw new Error("Type wasnt matched!")
//     }
//     return num1 + num2;
// }

// const number1 = "10";
// const number2 = 1.2;

// const res = add(number1, number2);
// console.log(res);

// 4
function add(num1: number, num2: number, showResult: boolean, showPhrase: string) {
    let sum = num1 + num2;
    if(showResult){
        console.log(showPhrase + sum);
    }else{
        return num1 + num2;
    }
}

const number1 = 10;
const number2 = 1.2;
const printResult = true;
const printPhrase = 'The Result is: ';

add(number1, number2, printResult, printPhrase);

=======
// // 1
// console.log("Hello typescript");

// // 2
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// const number1 = 10;
// const number2 = 1.2;
// const res = add(number1, number2);
// console.log(res);

// // 3
// function add(num1: number, num2: number): number {
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         throw new Error("Type wasnt matched!")
//     }
//     return num1 + num2;
// }

// const number1 = "10";
// const number2 = 1.2;

// const res = add(number1, number2);
// console.log(res);

// 4
function add(num1: number, num2: number, showResult: boolean, showPhrase: string) {
    let sum = num1 + num2;
    if(showResult){
        console.log(showPhrase + sum);
    }else{
        return num1 + num2;
    }
}

const number1 = 10;
const number2 = 1.2;
const printResult = true;
const printPhrase = 'The Result is: ';

add(number1, number2, printResult, printPhrase);

>>>>>>> 03b38d34aff497eb8d24f987a12bb8a43ae9ba48
