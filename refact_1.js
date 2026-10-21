/*function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}*/

function verificarIdade(idade) {
  return idade >= 18
    ? "Maior de idade"
    : "Menor de idade";
}

/* O QUE MELHOROU?
- Menos linhas de código.
- Eliminação de uma estrutura condicional desnecessária.
- Retorno mais direto e fácil de ler.

QUANDO USAR?
- Quando a condição é simples e existem apenas dois resultados possíveis. */
