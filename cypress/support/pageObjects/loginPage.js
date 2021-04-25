/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.clearLocalStorage()
        cy.visit('/')
    }

    // Selecionar campor e preencher com dados do .feature
    inserirDadosLogin(usuario, senha) {
        cy.get(loginElements.usuario())
          .type(usuario)

        cy.get(loginElements.senha())
          .type(senha)
    }

    clicarLogin() {
      // cy.screenshot()
        cy.get(loginElements.botaoLogin())
          .click()
    }

    // As próximas 4 funções verificam mensagens de erro na tela de login
    verificarErroLoginBloqueado() {
      // cy.screenshot()
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }

    verificarErroLoginUsuario() {
      // cy.screenshot()
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Username is required')
    }

    verificarErroLoginSenha() {
      // cy.screenshot()
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Password is required')
    }

    verificarErroLoginFalso() {
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

    verificarSeLogado() {
      // cy.screenshot()
      cy.url()
        .should('eq', 'https://www.saucedemo.com/inventory.html')
    }

}

export default LoginPage;