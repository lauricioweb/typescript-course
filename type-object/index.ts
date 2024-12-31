const myObj:{
 readonly nome:string,  // nao pode ser alterada 
  idade:number
  [key:string] : unknown // index signature para adicionar novas chaves
} = { 
  nome:"lau",
  idade:11
}

myObj.nome = "lauricio"
myObj.email = "lau@gmail.com"

console.log(myObj)