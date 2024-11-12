// // // // 1. Objects..........
// // // // 1. Objects..........
// // const person = {
// //     name: "Steve Jobs",
// //     age: 25,
// // };
// // console.log(person);
// // // console.log(person.nickname);

// // const person: object = {
// //     name: "Steve Jobs",
// //     age: 25,
// // };
// // console.log(person.name); // shows error

// // const person: { name: string, age: number } = {
// //     name: "Steve Jobs",
// //     age: 25,
// // };
// // console.log(person.name); // error is gone!


// // // // Of course object types can also be created for nested objects.
// // // // Let's say you have this JavaScript object:
// // const product: {
// //     id: string;
// //     price: number;
// //     tags: string[];
// //     details: {
// //         title: string;
// //         description: string;
// //     }
// // } = {
// //     id: 'abc1',
// //     price: 12.99,
// //     tags: ['great-offer', 'hot-and-new'],
// //     details: {
// //         title: 'Red Carpet',
// //         description: 'A great carpet - almost brand-new!'
// //     }
// // }
// // console.log(product);
// // // // This would be the type of such an object:
// // // // {
// // // //   id: string;
// // // //   price: number;
// // // //   tags: string[];
// // // //   details: {
// // // //     title: string;
// // // //     description: string;
// // // //   }
// // // // }
// // // // So you have an object type in an object type so to say.




// // // // // 2. Arrays..........
// // // // // 2. Arrays..........
// // const person2: { name: string, age: number, hobbies: string[] } = {
// //     name: "Steve Jobs",
// //     age: 25,
// //     hobbies: ["drawing", "origami"],
// // }
// // // console.log(person2);

// // let LikedFoods: string[];
// // let LikedColors: any[];

// // LikedFoods = ["maggie", "samosa", "pasta"];
// // LikedColors = ["red", "green", 12345, true];

// // for (const hobby of person2.hobbies) {
// //     console.log(hobby.toUpperCase()); // automatically identifies string and thus provides string-methods
// // }




// // // // // 3. Tuple..........
// // // // // 3. Tuple..........
// // const person3: { name: string, age: number, hobbies: string[], role: [number, string, boolean] } = {
// //     name: "Steve Jobs",
// //     age: 25,
// //     hobbies: ["drawing", "origami"],
// //     role: [101, "Developer", true]
// // }
// // // person3.role=[201] // error (needs both three values)
// // person3.role.push("Junior"); // one glitch here!
// // console.log(person3);




// // // // 4. Enum..........
// // // // 4. Enum..........
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// const person4: { name: string, age: number, hobbies: string[], role: Role } = {
//     name: "Steve Jobs",
//     age: 25,
//     hobbies: ["drawing", "origami"],
//     role: Role.ADMIN
// }
// console.log(person4);