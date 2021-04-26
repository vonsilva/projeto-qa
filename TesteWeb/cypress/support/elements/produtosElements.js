class ProdutosElements {
    botaoCarrinho = () => { return '.shopping_cart_link' }
    botaoRemoveCarrinho = (produto) => { return '[data-test=remove-'+produto.toLowerCase().replace(/\s/g, '-')+']' }
    botaoAdicionaCarrinho = (produto) => { return '[data-test=add-to-cart-'+produto.toLowerCase().replace(/\s/g, '-')+']' }


    listaProdutos = (id) => { return '.inventory_list > :nth-child('+id+')' }
    produto = (id) => { return '#item_'+id+'_title_link > .inventory_item_name' }
    precoProduto = (id) => { return ':nth-child('+id+') > .inventory_item_description > .pricebar > .inventory_item_price' }
    descricaoProduto = (id) => { return ':nth-child('+id+') > .inventory_item_description > .inventory_item_label > .inventory_item_desc' }
    imagemProduto = (id) => { return '#item_'+id+'_img_link > .inventory_item_img' }

    listaCarrinho = (id) => { return '.cart_list > :nth-child('+id+')' }
    produtoCarrinho = (id) => { return '#item_'+id+'_title_link > .inventory_item_name' }
    precoProdutoCarrinho = (id) => { return ':nth-child('+id+') > .cart_item_label > .item_pricebar > .inventory_item_price' }
    descricaoProdutoCarrinho = (id) => { return ':nth-child('+id+') > .cart_item_label > .inventory_item_desc' }
}

export default ProdutosElements;