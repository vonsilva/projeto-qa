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
      cy.get(loginElements.botaoLogin())
        .click()
    }

    // As próximas 4 funções verificam mensagens de erro na tela de login
    verificarErroLoginBloqueado() {
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

      cy.screenshot()
    }

    verificarErroLoginUsuario() {
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Username is required')

      cy.screenshot()
    }

    verificarErroLoginSenha() {
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Password is required')
      
      cy.screenshot()
    }

    verificarErroLoginFalso() {
      cy.get(loginElements.mensagemErro())
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

      cy.screenshot()
    }

    verificarSeLogado() {

      cy.url()
        .should('eq', 'https://www.saucedemo.com/inventory.html')

      cy.screenshot()
    }

}

export default LoginPage;