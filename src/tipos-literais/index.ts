let x:string = "teste";

const y = 44; // o tipo de y é literalmente 44

// tipando objeto literalmente

const myObject = {
  nome: "lauricio" as const,
}


function choseColor(color: "verde" | "azul"){
  return color;
}

console.log(choseColor("azul"));

