/*function obterStatus(status) {
  if (status === 1) {
    return "Pendente";
  } else if (status === 2) {
    return "Aprovado";
  } else if (status === 3) {
    return "Rejeitado";
  } else {
    return "Desconhecido";
  }
}*/

const statusMap = {
  1: "Pendente",
  2: "Aprovado",
  3: "Rejeitado"
};

function obterStatus(status) {
  return statusMap[status] ?? "Desconhecido";
}

/* O QUE MELHOROU?
- Redução de condicionais.
- Facilidade para adicionar novos status.
- Separação entre os dados e a lógica da função.

QUANDO USAR?
- Quando uma função compara um valor com várias opções fixas.*/
