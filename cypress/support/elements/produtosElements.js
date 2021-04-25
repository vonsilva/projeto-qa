class ProdutosElements {
    carrinho = () => { return '.shopping_cart_link' }
    produto = (id) => { return '.inventory_list > :nth-child('+id+')' }
    precoProduto = (id) => { return ':nth-child('+id+') > .inventory_item_description > .pricebar > .inventory_item_price' }
    descricaoProduto = (id) => { return ':nth-child('+id+') > .inventory_item_description > .inventory_item_label > .inventory_item_desc' }
}

export default ProdutosElements;