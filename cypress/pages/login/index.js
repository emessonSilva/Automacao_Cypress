import { elements as el } from "./elements"; //importando o {objeto} elements do arquivo elements

//escrever as ações relacionadas a página de login e muitas dessas ações requerem interções com elementos (elements.js)

class Login {
  //classe
  visitarPagina() {
    //método do classe
    cy.visit("/"); // acessa a URL base definida em "baseUrl" no arquivo config-dev.js
  }

  credenciaisValidas() {
    cy.get(el.username).type(Cypress.env("username")); //utilizando chave-valor do objeto element (el.xxxxx) e tá puxando o username do arquivo config-dev.js para utilizar o env
    cy.get(el.password).type(Cypress.env("password"));
    cy.get(el.loginButton).click();
  }

  credenciaisInvalidas() {
    cy.get(el.username).type("user_invalid");
    cy.get(el.password).type("secret_invalid");
    cy.get(el.loginButton).click();
  }

  validarErroCredenciaisInvalidas() {
    cy.get(el.errorLoginMessage).should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
    cy.url().should("equal", "https://www.saucedemo.com/");
  }
}

export default new Login(); //exportando a classe acima
