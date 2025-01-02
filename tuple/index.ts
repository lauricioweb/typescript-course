// tipando arrays / tuplas 

const dados1:[string, number] = ["lauricio", 22];
const dados:[string, number,string?] = ["lauricio", 22]; // parametro opcional

const dados2:[string, number, ...string[]] = ["lau",22,"gosma","branca"]

dados1[1] = 1000;
//dados1.push("lauricioss") pode ser adicionado com o push porem nao é a forma correta


console.log(dados1)