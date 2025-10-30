export const elements = {
  botaoAddToCart: (itemName) =>
    `[data-test="add-to-cart-${transformarTexto(itemName)}"]`,
  
  botaoRemove: (itemName) =>
    `[data-test="remove-${transformarTexto(itemName)}"]`,
};

function transformarTexto(texto) {
  return texto.replaceAll(" ", "-").toLowerCase();
}
