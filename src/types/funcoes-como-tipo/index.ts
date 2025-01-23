
//criando tipo para a funcao callback

type MapFuncType = (item:string) => string;

const mapping = function(arr:string[], cbFunc:MapFuncType ):string[]{
   const newArr: string[] = [];

   for(let i = 0; i < arr.length; i++){
    newArr.push(cbFunc(arr[i]));
   }

   return newArr;
}

const myStr:string[] = ["a","b","c"];

const myStrUpper = mapping(myStr, item => item.toUpperCase());

console.log(myStrUpper);