"use strict";
let Mine;
Mine = {
    name: "Steve",
    age: 25,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
Mine.greet("Hello there I am ...");
