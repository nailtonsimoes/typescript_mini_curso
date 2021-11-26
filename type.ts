class Default {
  texto: string;
  numero: number;
  qualquer: any;
  boleano: boolean;
  array: Array<any>;

  constructor() {
    this.metodo();
    this.array = [{
      teste: "teste"
    }];
  }
  
  metodo() {
    this.numero = 10;
    return this.texto = 'este é um alert simples em typescript $(this.numero)';
    return alert(this.texto);
  }
}



