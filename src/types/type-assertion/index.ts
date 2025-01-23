const body = document.querySelector("body");
 if(body) body.style.backgroundColor = "red";

// asserção seria informar que o tipo inferido existe no caso o body
// impedindo que seja retornado null


// uando non-null para informando que tenho certeza que o elemento existe
const body2 = document.querySelector("body")!;
 body2.style.backgroundColor = "red";

 const body3 = document.querySelector("body") as HTMLBodyElement;
 //informei diretamente o tipo do elemento 
