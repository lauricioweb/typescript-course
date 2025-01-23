let x;

if(typeof x  === "undefined") x = 20;
console.log(x);


export function createPerson(firstName:string, lastName?:string):{ 
  firstName:string;
  lastName?:string;
}{
return {
  firstName,
  lastName
}
}