// tipando arrays / tuplas 

const dados1: readonly [string, number] = ["lauricio", 22]; // readonly a toran imutavel
const dados:[string, number,string?] = ["lauricio", 22]; // parametro opcional

const dados2:[string, number, ...string[]] = ["lau",22,"gosma","branca"];

// dados1[1] = 1000; nao ira funcionar pois agora esta imutavel
//dados1.push("lauricioss") pode ser adicionado com o push porem nao é a forma correta


console.log(dados1)