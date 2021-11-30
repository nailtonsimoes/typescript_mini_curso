/*=======  paramertros com o "?" são parametros opcionais   ===*/
let obj: {name: string, age: number, active?: boolean} = {
  name:'9newton',
  age: 75,
}

let obj2: {[key: string]: string} = {
  name: 'nailton',
  bar: 'simoes'
}

function func(nome: string, sobrenome: string){

}

func('nome', 'sobrenome');