/// <reference types="Cypress" />

import ProdutosElements from '../elements/ProdutosElements'
const produtosElements = new ProdutosElements

class ProdutosPage {
  validarTelaProdutos() {
      cy.fixture('itensCompras').then((item) => {

          for (var i in item.produtos) {

            cy.get(produtosElements.imagemProduto(item.produtos[i].id))
              .should('have.attr', 'src', item.produtos[i].imagem)


            cy.get(produtosElements.listaProdutos(i))
              .find(produtosElements.produto(item.produtos[i].id))
              .should('have.text', item.produtos[i].nome)

            cy.get(produtosElements.descricaoProduto(i))
              .should('have.text', item.produtos[i].descricao)

            cy.get(produtosElements.precoProduto(i))
              .should('have.text', item.produtos[i].valor)
            }

      })
  }

  adicionarAoCarrinho() {
    cy.fixture('itensCompras').then((item) => {

      for (var i in item.produtos) {

        cy.get(produtosElements.botaoAdicionaCarrinho(item.produtos[i].nome))
          .should('have.text', 'Add to cart')
          .click()
   
      }

    })
    
  }

  verificarCarrinho() {


    cy.fixture('itensCompras').then((item) => {
      var contador = 3

      for (var i in item.produtos) {

        cy.get(produtosElements.listaCarrinho(contador))
            .find(produtosElements.produtoCarrinho(item.produtos[i].id))
            .should('have.text', item.produtos[i].nome)

        cy.get(produtosElements.descricaoProdutoCarrinho(contador))
          .should('have.text', item.produtos[i].descricao)

        cy.get(produtosElements.precoProdutoCarrinho(contador))
        .should('have.text', item.produtos[i].valor)
      
        contador++
        
          
      }

    })
  }

  verificarBotaoRemover() {
    cy.fixture('itensCompras').then((item) => {

      for (var i in item.produtos) {

        cy.get(produtosElements.botaoRemoveCarrinho(item.produtos[i].nome))
          .should('have.text', 'Remove')
   
      }

    })
  }

  acessarCarrinho() {
    cy.get(produtosElements.botaoCarrinho())
      .click()
  }

  removerDoCarrinho() {
    cy.fixture('itensCompras').then((item) => {

      for (var i in item.produtos) {

        cy.get(produtosElements.botaoRemoveCarrinho(item.produtos[i].nome))
          .should('have.text', 'Remove')
          .click()
   
      }
    })
  }

  verificarProdutosRemovidos() {
    cy.fixture('itensCompras').then((item) => {
      var contador = 3

      for (var i in item.produtos) {

        cy.get(produtosElements.listaCarrinho(contador))
            .find(produtosElements.produtoCarrinho(item.produtos[i].id))
            .should('not.exist')

        cy.get(produtosElements.descricaoProdutoCarrinho(contador))
          .should('not.exist')

        cy.get(produtosElements.precoProdutoCarrinho(contador))
          .should('not.exist')
      
        contador++
        
          
      }

    })
  }

}

export default ProdutosPage;
