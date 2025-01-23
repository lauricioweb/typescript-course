"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
let x;
if (typeof x === "undefined")
    x = 20;
console.log(x);
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}
