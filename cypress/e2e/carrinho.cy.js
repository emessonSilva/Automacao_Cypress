//Comando para rodar os testes: npx cypress open (interface)
// npx cypress run (para rodar em terminal) -- npx cypress run --browser chrome (escolher o navegador)]
// foi criado scripts em package.json para rodar os comandos run e open (cy:run:chrome e cy:open:chrome) e usa o npm run para executar

//npm i -D cypress-mochawesome-reporter cypress-multi-reporters mocha-junit-reporter (comando para instalar as dependências de gerar relatório),
//logo após baixar tem que importar no arquivo e2e.js em support e confiigurar no arquivo cypress.config.js

//código refatorado

import Login from "../pages/login"; //importando a classe Login
import Inventory from "../pages/inventory"; //importando a classe Inventory
import Header from "../pages/header";
import Cart from "../pages/cart"

describe("Carrinho", () => {
  beforeEach(() => {//hook - esse em específico indica que antes de cada teste, deve rodar esses comandos listados abaixo
    
    // Arrange - preparar o ambiente
    Login.visitarPagina();

    //act
    Login.credenciaisValidas();
   
  });

  it("Deve realizar login com sucesso, adicionar um produto ao carrinho e verificar o carrinho", () => {
    //Act
    Inventory.validarPagina();
    Inventory.adicionarProduto("Sauce Labs Backpack");
    cy.get('[data-test="shopping-cart-link"]').click();

    // Assert - verificar o resultado esperado
    const qtdItemCarrinho = 1;
    Header.ValidarCarrinhoPossuiItem(qtdItemCarrinho);
    Header.navegarParaCarrinho();
    Cart.validarUrlCarrinho();
    Cart.validarProdutoPresenteCarrinho("Sauce Labs Backpack");

    cy.screenshot("produto adicionado"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
  });

  it("Deve realizar login com sucesso, adicionar um produto ao carrinho e remover o produto", () => {
    //Act
    Inventory.validarPagina();
    Inventory.adicionarProduto("Sauce Labs Backpack")

    //Assert
    cy.get('.shopping_cart_badge')
      .should('be.visible')

    // Act
    Inventory.removerProduto("Sauce Labs Backpack")


    // Assert
    Header.validarCarrinhoVazio()


    cy.screenshot("produto removido"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
  });
});




//CÓDIGO NÃO REFATORADO!!

// describe("Carrinho", () => {

//   beforeEach(() => {  //hook - esse em específico indica que antes de cada teste, deve rodar esses comandos listados abaixo
//     // Arrange - preparar o ambiente
//     cy.visit("https://www.saucedemo.com/");

//     // Act - executar as ações do usuário
//     cy.get('[data-test="username"]').type("standard_user"); //[elemento] é para seletor de css
//     cy.get('[data-test="password"]').type("secret_sauce");
//     cy.get('[data-test="login-button"]').click();
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

//   })

//   it("Deve realizar login com sucesso, adicionar um produto ao carrinho e verificar o carrinho", () => {

//     //Act
//     cy.get('[data-test="shopping-cart-link"]').click();

//     // Assert - verificar o resultado esperado
//     cy.url().should("equal", "https://www.saucedemo.com/cart.html");
//     cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1"); //.elemento é para classe
//     cy.get("#shopping_cart_container").click(); //#elemento é para id
//     cy.contains("Sauce Labs Backpack").should("be.visible");

//     cy.screenshot("produto adicionado"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
//   });

//   it("Deve realizar login com sucesso, adicionar um produto ao carrinho e remover o produto", () => {

//     //Act
//     cy.get(".shopping_cart_badge").should("be.visible");
//     cy.get('[data-test="remove-sauce-labs-backpack"]').click();

//     // Assert - verificar o resultado esperado
//     cy.get(".shopping_cart_badge").should("not.exist");

//     cy.screenshot("produto removido"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
//   });
// });
