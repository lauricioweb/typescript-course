// usando o super() para acessar propriedades e methodos da classe mae

class Company {
  public nome:string
  public idade:number 

  constructor(nome:string, idade:number){
     this.nome = nome;
     this.idade = idade;
  }

  showName(){
    return this.nome
  }
}

class Child extends Company{
  constructor(nome:string, idade:number, public altura:number){
    // primeiro constructor relativo a classe filha
    super(nome,idade) // segundo constructor relativo a classe mae 
    this.altura = altura;
  }
}

const child = new Child("lauricio",24,21);

console.log(child)