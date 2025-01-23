"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyUser = (user, sentUser) => {
    return user.nome === sentUser.nome && user.password === sentUser.password;
};
const bdUser = { nome: "lauricio", password: "123" };
const sentUser = { nome: "lauricio", password: "123" };
const userLogged = verifyUser(bdUser, sentUser);
console.log(userLogged);
