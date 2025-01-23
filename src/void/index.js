"use strict";
// sem retorno
Object.defineProperty(exports, "__esModule", { value: true });
function noReturn(...args) {
    console.log(args.join(" "));
}
// metodo sem retorno
const pessoa = {
    nome: "lauricio",
    sobrenome: "de sousa",
    showName() {
        console.log(this.nome + " " + this.sobrenome);
    }
};
pessoa.showName();
noReturn("lauricio", "de sousa");
