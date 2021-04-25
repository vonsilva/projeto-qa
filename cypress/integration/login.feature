Feature: Tela de Login

    Scenario: Obrigatoriedade dos campos
        Given que eu estou na tela de login
        When clico em login
        Then deve haver um erro de usuario obrigatorio
        When eu insiro um usuario 'locked_out_user' e senha '{enter}'
        And clico em login
        Then deve haver um erro de senha obrigatorio

    Scenario: Login inexistente
        Given que eu estou na tela de login
        When eu insiro um usuario 'teste' e senha '1234'
        And clico em login
        Then deve haver um erro de usuario inexistente

    Scenario: Login Usuario Bloqueado
        Given que eu estou na tela de login
        When eu insiro um usuario 'locked_out_user' e senha 'secret_sauce'
        And clico em login
        Then deve haver um erro de usuario bloqueado


    Scenario: Login com Sucesso
        Given que eu estou na tela de login
        When eu insiro um usuario 'standard_user' e senha 'secret_sauce'
        And clico em login
        Then devo estar logado

