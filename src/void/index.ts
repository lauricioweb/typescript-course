// sem retorno

function noReturn(...args:string[]){
console.log(args.join(" "))
}

// metodo sem retorno

const pessoa = {
  nome:"lauricio",
  sobrenome: "de sousa",
  showName():void{
    console.log(this.nome + " " + this.sobrenome)
  }
}

pessoa.showName();
noReturn("lauricio", "de sousa")