/* global Given, Then, When */

import ProdutosPage from '../pageobjects/ProdutosPage'
const produtosPage = new ProdutosPage

And("os produtos devem ser apresentados corretamente", () => {
    produtosPage.validarTelaProdutos();
})

When("eu adicionar produtos ao carrinho", () => {
    //TODO implementar função de adicionar ao carrinho
})

//TODO implementar função de verificar itens no carrinho