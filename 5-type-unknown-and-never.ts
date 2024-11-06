// // // type  :unknown
// let userInput: unknown;
// // let userInput: any; this does not throws error if assigned later as other type

// // both are okay
// userInput = 100;
// userInput = "Steve Jobs";

// let anotherInput: string;

// // anotherInput = userInput;
// // this gives error for ...
// // Type 'unknown' is not assignable to type 'string'




// // // reassignment.........
// let userInput: unknown;
// let Input: string;

// userInput = "Hello there!";

// if (typeof userInput === 'string') {
//     Input = userInput;
//     console.log(Input);
// }




// // // Never type..
// function generateError(message: string, code: number) {
//     throw { message: message, errorCode: code };
// }

const result = generateError("Something went wrong!", 400);
console.log(result); // this does not execute as generateError Never returns..

// however such function assume them as void but for clarity we should use Never type
// Never should be used as code crashes and did not returns anything
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
