/* global Given, Then, When */

import ProdutosPage from '../pageobjects/ProdutosPage'
const produtosPage = new ProdutosPage

When("eu adicionar produtos ao carrinho", () => {
    produtosPage.adicionarAoCarrinho();
})

When("eu entrar na tela do carrinho", () => {
    produtosPage.acessarCarrinho();
})

And("eu clicar no botao de remover produto", () => {
    produtosPage.removerDoCarrinho();
})

Then("produtos devem estar no carrinho corretamente", () => {
    produtosPage.verificarCarrinho();
})

Then("botão adicionar item deve mudar para remover", () => {
    produtosPage.verificarBotaoRemover();
})

Then("produtos devem ser removidos", () => {
    produtosPage.verificarProdutosRemovidos();
})

Then("os produtos devem ser apresentados corretamente", () => {
    produtosPage.validarTelaProdutos();
})
