//escrever as ações relacionadas a página de inventory e muitas dessas ações requerem interções com elementos (elements.js)

import { elements as el } from "./elements";

class Inventory {
  validarPagina() {
    cy.url().should("equal", "https://www.saucedemo.com/inventory.html");
  }

  adicionarProduto(itemName) {
    cy.get(el.botaoAddToCart(itemName)).click();
  }

  removerProduto(itemName) {
    cy.get(el.botaoRemove(itemName)).click();
  }
}

export default new Inventory();
