/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que eu estou na tela de login", () => {
    loginPage.acessarSite();
})

Then("deve haver um erro de usuario obrigatorio", () => {
    loginPage.verificarErroLoginUsuario();
})

Then("deve haver um erro de senha obrigatorio", () => {
    loginPage.verificarErroLoginSenha();
})

When("eu insiro um usuario {string} e senha {string}", (usuario, senha) => {
    loginPage.inserirDadosLogin(usuario, senha);
})

And("clico em login", () => {
    loginPage.clicarLogin();
})

Then("deve haver um erro de usuario bloqueado", () => {
    loginPage.verificarErroLoginBloqueado();
})

Then("devo estar logado", () => {
    loginPage.verificarSeLogado();
})


