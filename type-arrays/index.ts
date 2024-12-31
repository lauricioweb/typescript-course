// tipando arrays

function mult(...args:Array<number>):number{
  return args.reduce((ac,valor) => ac * valor, 1)
}

function concatena(...args:string[]):string{
  return args.reduce((ac,valor) => ac + valor)
}

function toUpper(...args:string[]):string[]{
  return args.map((item) => {
   return item.toLocaleUpperCase()
  })

}

console.log(mult(1,2,3,4,5))
console.log(concatena("lauricio", " mestre do ar"))
console.log(toUpper("a","r","t"))
