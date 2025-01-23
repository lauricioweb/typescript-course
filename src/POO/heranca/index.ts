// visa passar metodos e propriedades de um objeto para outro;


export abstract class Animal {
  constructor(public name:string){}

  abstract makeNoise():void
}

export class Dog extends Animal{

  public makeNoise(): void {
    console.log("fazendo barulho");
  }
}

export class Cat extends Animal{

  public makeNoise(): void {
    console.log("fazendo barulho como um gato");
  }
}