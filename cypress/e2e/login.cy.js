//Código refatorado (criada page login, criado arquivo com classe e arquivo com os elementos de interação/ação)

import Login from "../pages/login"; //importando a classe Login
import Inventory from "../pages/inventory"; //importando a classe Inventory

describe("Login", () => {
  // Arrange - preparar o ambiente
  beforeEach(() => {
    //hook - esse em específico indica que antes de cada teste, deve rodar esses comandos listados abaixo
    Login.visitarPagina(); //importando o método da classe Login (refatoração)
  });

  it("Deve realizar login com sucesso", () => {
    // Act - executar as ações do usuário
    Login.credenciaisValidas(); //metodo de preencher as credenciais

    // Assert - verificar o resultado esperado
    Inventory.validarPagina(); //método de validar página da classe Inventory
    cy.screenshot("login sucesso"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
  });

  it("Realizar login sem sucesso", () => {
    // Act - executar as ações do usuário
    Login.credenciaisInvalidas(); //método de preencher credenciais invalidas da classe Login

    // Assert - verificar o resultado esperado
    Login.validarErroCredenciaisInvalidas();
    cy.screenshot("login erro"); //tirar screenshot ao final do teste, o nome entre '' é opcional.
  });

});



// CÓDIGO NÃO REFATORADO E SEM ENCOBRIR AS CREDENCIAIS

// describe('Login', () => {

//   beforeEach(() => {
//     // Arrange
//     cy.visit('https://www.saucedemo.com/')
//   })

//   it('Realizar login com sucesso', () => {
//     // Act
//     cy.get('[data-test="username"]').type('standard_user')

//     cy.get('[data-test=password]').type('secret_sauce')

//     cy.get('[data-test="login-button"]').click()

//     // Assert
//     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

//     cy.screenshot('login')
//   })

//   it('Realizar login informando credenciais inválidas', () => {
//     // Act
//     cy.get('[data-test="username"]').type('user.invalid')

//     cy.get('[data-test=password]').type('senha')

//     cy.get('[data-test="login-button"]').click()

//     // Assert
//     cy.get('[data-test="error"]')
//       .should(
//         'contain.text',
//         'Username and password do not match any user in this service'
//       )

//     cy.url().should('eq', 'https://www.saucedemo.com/')

//     cy.screenshot('erro credenciais inválidas')
//   })
// })