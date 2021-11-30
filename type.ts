/* o uso do export possobilita exportar um objeto para outro arquivo*/
export interface User{
  name: string;
  age: number;
  active?: boolean;
}

let usuario: User = {
  name:'nailton',
  age: 25,
  active: true
}