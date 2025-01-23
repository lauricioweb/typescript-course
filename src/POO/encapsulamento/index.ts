// trata se restringir partes do objeto exibindo apenas o nescessario

export class Control {
  constructor(private statusDevice = false){}

  public turnOn():void{
    this.statusDevice = true;
  }

  public turnOff():void{
    this.statusDevice = false;
  }

  public getStatus():boolean{
    return this.statusDevice;
  }

}