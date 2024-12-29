// tipos basicos
let nome: string  = "maria"
let idade: number = 33
let adulto: boolean = true
let simbolo: Symbol = Symbol("qualquer simbolo")

// tipando arrays 
let arrayOfNumbers:Array<number> = [1,3,4,5]
let arrayOfString:Array<string> = ["3","maria","clara"]
let arraysString: string[] = ["casa","carro"]


// tipando objetos
let pessoa: {
  nome:string,
  idade:number,
  active?:boolean // ? define que o valor é opcional
} = {
  nome : "lauricio",
  idade : 22,
  active : false
}

// tipando funções 

let func = function soma(x:number, y:number): number{
  return x + y
}


let result = func(3,3)
console.log(result)


const soma2: (x:number, y:number) => number = (x,y) => x + y;
