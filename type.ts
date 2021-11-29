let a: [string, any, number] [] = [
 ['url',146554, 5050],
 ['port', 8080, 124578]
];

function funcao () {
  a.forEach(element => {
    console.log(element[1]);
  });
}

funcao();