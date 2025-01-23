// abstração trata-se de inserir em um objeto dados que compoem propriedades funções de determinados objetos reais

export class Pessoa {
  private nome:string
  private sobrenome:string

  constructor(nome:string, sobenome:string){
    this.nome = nome;
    this.sobrenome = sobenome;
  }
}