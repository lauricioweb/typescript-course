"use strict";
//criando tipo para a funcao callback
Object.defineProperty(exports, "__esModule", { value: true });
const mapping = function (arr, cbFunc) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cbFunc(arr[i]));
    }
    return newArr;
};
const myStr = ["a", "b", "c"];
const myStrUpper = mapping(myStr, item => item.toUpperCase());
console.log(myStrUpper);
