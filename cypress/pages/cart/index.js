class Cart {
  validarUrlCarrinho() {
    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
  }

  validarProdutoPresenteCarrinho(name) {
    cy.contains(name).should("be.visible");
  }

}

export default new Cart()