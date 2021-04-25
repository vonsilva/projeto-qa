Feature: Tela de produtos e carrinho

    Scenario: Validar produtos em tela
        Given que eu estou na tela de login
        When eu insiro um usuario 'standard_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado
        And os produtos devem ser apresentados corretamente


    Scenario: Adicionar produtos ao carrinho
        Given que eu estou na tela de login
        When eu insiro um usuario 'standard_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado
        When eu adicionar produtos ao carrinho
        