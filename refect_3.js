/*function calcularDescontoProdutoA(preco) {
  return preco - preco * 0.10;
}

function calcularDescontoProdutoB(preco) {
  return preco - preco * 0.10;
}

function calcularDescontoProdutoC(preco) {
  return preco - preco * 0.10;
}*/

function calcularDesconto(preco, percentual = 10) {
  return preco * (1 - percentual / 100);
}

const produtoA = calcularDesconto(100);
const produtoB = calcularDesconto(200);
const produtoC = calcularDesconto(300, 15);

console.log(produtoA); // 90
console.log(produtoB); // 180
console.log(produtoC); // 255

/*O QUE MELHOROU?
- Uma única função para calcular descontos.
- Menos código duplicado.
- Maior flexibilidade com percentuais diferentes.

QUANDO USAR?
- Quando várias partes do código executam a mesma lógica com pequenas variações.*/