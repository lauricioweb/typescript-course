function concatSoma(a: number | string, b:number | string){
   if(typeof a === "number" && typeof b === "number") return a + b; 
  
   return `${a} + ${b}`
}

console.log(concatSoma("33","33"));