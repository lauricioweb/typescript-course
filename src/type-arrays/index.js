"use strict";
// tipando arrays
Object.defineProperty(exports, "__esModule", { value: true });
function mult(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
function concatena(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
function toUpper(...args) {
    return args.map((item) => {
        return item.toLocaleUpperCase();
    });
}
console.log(mult(1, 2, 3, 4, 5));
console.log(concatena("lauricio", " mestre do ar"));
console.log(toUpper("a", "r", "t"));
