type Idade = number;

type Pessoa = {
  nome: string,
  idade:Idade,
  corPreferida?: CorPreferida
}

type CorRgb = "vermelho" | "verde" | "Azul";
type CorXMKY = "rosa" | "preto" | "cinza";
type CorPreferida = CorRgb | CorXMKY;


const Lauricio:Pessoa = {
  nome:"lauricio",
  idade:44,
  corPreferida:"Azul"
}

console.log(Lauricio);