/*function processarPedido(pedido) {
  if (pedido) {
    if (pedido.pago) {
      if (pedido.estoqueDisponivel) {
        return "Pedido processado";
      } else {
        return "Produto sem estoque";
      }
    } else {
      return "Pedido não pago";
    }
  } else {
    return "Pedido inválido";
  }
}*/

function processarPedido(pedido) {
  if (!pedido) {
    return "Pedido inválido";
  }

  if (!pedido.pago) {
    return "Pedido não pago";
  }

  if (!pedido.estoqueDisponivel) {
    return "Produto sem estoque";
  }

  return "Pedido processado";
}

/*O QUE MELHOROU?
- Menos níveis de indentação.
- Fluxo de execução mais fácil de acompanhar.
- Cada condição de erro fica explícita.

QUANDO USAR?
- Quando uma função possui várias condições de validação antes de executar sua lógica principal.*/