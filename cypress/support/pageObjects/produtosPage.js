/// <reference types="Cypress" />

import ProdutosElements from '../elements/ProdutosElements'
const produtosElements = new ProdutosElements

class ProdutosPage {
    validarTelaProdutos() {
        cy.fixture('itensCompras').then((item) => {

            for (var i in item.produtos) {
                cy.get(produtosElements.produto(i))
                  .contains(item.produtos.[i].nome)

                cy.get(produtosElements.descricaoProduto(i))
                  .contains(item.produtos.[i].descricao)

                cy.get(produtosElements.precoProduto(i))
                  .contains(item.produtos.[i].valor)
             }

        })
    }
}

export default ProdutosPage;
