// uniao de tipos separado que devem ser passado obrigatoriamente a quem tiver usando .



type Numeros = {
  numer1: 33,
  numer2: 32,
  numer3: 331,
}

type Cores = {
  cor1:"verde",
  cor2:"roxo",
  cor3:"azul"
}

const Setting: Numeros & Cores = {
   numer1 : 33,
   numer2 : 32,
   numer3 : 331,
   cor1 : "verde",
   cor2:"roxo",
   cor3:"azul"
}

