function processarPedido(pedido) {
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
}