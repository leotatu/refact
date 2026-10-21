/*const numeros = [1, 2, 3, 4, 5];
const dobrados = [];

for (let i = 0; i < numeros.length; i++) {
  dobrados.push(numeros[i] * 2);
}

console.log(dobrados);
// [2, 4, 6, 8, 10]*/

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);
// [2, 4, 6, 8, 10]

/*O QUE MELHOROU?
- Código mais conciso e declarativo.
- Intenção mais clara: transformar cada elemento.
- Menos variáveis auxiliares e controle manual do índice.

QUANDO USAR?
- Quando você precisa transformar cada elemento de um array e criar um novo array.*/