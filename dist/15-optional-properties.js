"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Good day!');
        }
    }
}
let user1; // Parents type
user1 = new Person(); // Child Instance
// user1.name = 'Chandler'; // this is optional!
user1.greet('Hi there I am....');
console.log(user1);
