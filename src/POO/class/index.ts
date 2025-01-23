// criando classes em typescript

export class Empresa {
	public readonly nome:string;
	private readonly colaboradores:Colaborador[] = [];
	protected readonly cnpj:string;

	constructor(nome:string,cnpj:string){
		this.nome = nome;
		this.cnpj = cnpj;
	}

	//metodos
	addColaborador(colaborador:Colaborador):void{
		this.colaboradores.push(colaborador);
	}

	mostrarColaboradores():void{
		for(const colaborador of this.colaboradores){
			console.log(colaborador);
		}
	}
}


// passando propriedades direto no construtor da classe;
class Colaborador {
constructor(public readonly nome:string, private readonly salario:string){};
}

const colaborador1 = new Colaborador("lauricio","29000");
const colaborador2 = new Colaborador("maria","29000");
const colaborador3 = new Colaborador("raimunda","29000");


const empresa1 = new Empresa("gosmar","e8qw98e79w92");
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
