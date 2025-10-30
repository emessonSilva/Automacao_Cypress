import { elements as el } from "./elements";

class Header {
  ValidarCarrinhoPossuiItem(quantidade) {
    cy.get(el.cartBadge)
      .should("be.visible")
      .and("have.text", quantidade.toString());
  }

  navegarParaCarrinho() {
    cy.get(el.carrinho).click(); 
  }

  validarCarrinhoVazio() {
    cy.get(el.cartBadge).should("not.exist");
  }
}

export default new Header();
