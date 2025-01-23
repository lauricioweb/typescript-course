"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatSoma(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return `${a} + ${b}`;
}
console.log(concatSoma("33", "33"));
