"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tipos basicos
let nome = "maria";
let idade = 33;
let adulto = true;
let simbolo = Symbol("qualquer simbolo");
// tipando arrays 
let arrayOfNumbers = [1, 3, 4, 5];
let arrayOfString = ["3", "maria", "clara"];
let arraysString = ["casa", "carro"];
// tipando objetos
let pessoa = {
    nome: "lauricio",
    idade: 22,
    active: false
};
// tipando funções 
let func = function soma(x, y) {
    return x + y;
};
let result = func(3, 3);
console.log(result);
const soma2 = (x, y) => x + y;
