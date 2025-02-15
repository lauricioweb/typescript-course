type Colaborador = {
  nome:string,
  cargo:string
}

class Company {
 protected colaboradores: Colaborador[] = [{nome:"macuga", cargo:"planejador"}];

  constructor( public name:string, public cnpj:number){
  this.name = name;
  this.cnpj = cnpj;
  }


  createColaborador(colaborador:Colaborador){
   this.colaboradores.push(colaborador);
  }
}

class Child extends Company {

  constructor(public localtion:string, public name:string, public cnpj:number){
    super(name, cnpj)
    this.localtion = localtion;
  }

  // ao extender de uma classe podemos obter methodos e propriedades 

  deleteColaborador():Colaborador | null{
    const colaboradorDemitido = this.colaboradores.pop();

    if(colaboradorDemitido) return colaboradorDemitido;
    //  foi obtido a propriedade colaboradores da classe mae e modificada na classe filha
    return null

  }

  showColaboradores(){
    console.log(this.colaboradores);
  }

}


const Face = new Child("rua da paz","facxebok",39208328);

Face.createColaborador({nome:"lauricio",cargo:"programador"})
Face.createColaborador({nome:"maranhao",cargo:"programador"})
Face.createColaborador({nome:"gosmar",cargo:"programador"})
Face.createColaborador({nome:"leitoa",cargo:"programador"})

const colaboradorDemitido = Face.deleteColaborador();
console.log(colaboradorDemitido)

console.log(Face)

