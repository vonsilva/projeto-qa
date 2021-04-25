Feature: Tela de produtos e carrinho

    Scenario: Validar produtos em tela
        Given que eu estou na tela de login
        When eu insiro um usuario 'standard_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado
        And os produtos devem ser apresentados corretamente


    Scenario: Validar produtos em tela (usuario com problema)
        Given que eu estou na tela de login
        When eu insiro um usuario 'problem_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado
        And os produtos devem ser apresentados corretamente


    Scenario: Adicionar e Remover produtos do carrinho
        Given que eu estou na tela de login
        When eu insiro um usuario 'standard_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado
        When eu adicionar produtos ao carrinho
        Then botão adicionar item deve mudar para remover
        When eu entrar na tela do carrinho
        Then produtos devem estar no carrinho corretamente
        When eu clicar no botao de remover produto
        Then produtos devem ser removidos
        
        