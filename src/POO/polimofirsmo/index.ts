export abstract class Animal {
	constructor(public name:string){}

	abstract makeNoise():void;
}

export class Dog extends Animal {
	public makeNoise():void{
		console.log("fazendo barulho");
	}
}

export class Cat extends Animal {
	public makeNoise():void{
		console.log("fazendo barulho");
	}
}

// polimofirsmo pode assumir diferentes formas

class AnimalSounds {
	public playSound(animal:Animal){
    animal.makeNoise();
	}
}

const cat = new Cat("gato nome");
const dog = new Dog("cachorro nome");

const animalSounds = new AnimalSounds();

animalSounds.playSound(cat);
animalSounds.playSound(dog);

