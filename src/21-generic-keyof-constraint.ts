// // // Generic types.....

// interface Lengthy {
//     length: number,
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let descriptionText = 'Got no value!';
//     if (element.length === 1) {
//         descriptionText = 'Got 1 element.';
//     }
//     else if (element.length > 1) {
//         descriptionText = 'Got ' + element.length + ' elements.';
//     }
//     return [element, descriptionText]
// }

// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["Chandler", "Joey", "Ross"]));





// // "keyof" constraint.....
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'value: ' + obj[key];
// }
// const res = extractAndConvert({ name: "chandler" }, 'name');
// console.log(res);