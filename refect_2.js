function obterStatus(status) {
  if (status === 1) {
    return "Pendente";
  } else if (status === 2) {
    return "Aprovado";
  } else if (status === 3) {
    return "Rejeitado";
  } else {
    return "Desconhecido";
  }
}