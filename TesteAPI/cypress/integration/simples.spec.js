describe('Usuário', () => {
    it('Criando usuário', () => {
        cy.request({
            url: '/user',
            method: 'POST',
            headers: {api_key: `test`},
            body: {
                id: 0,
                username: "maria",
                firstName: "Maria",
                lastName: "Assunção",
                email: "maria.assuncao@email.com",
                password: "abc123",
                phone: "11988756521",
                userStatus: 1
            }
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Criando mais de 1 usuário', () => {
        cy.request({
            url: '/user/createWithArray',
            method: 'POST',
            headers: {api_key: `test`},
            body: [{
                id: 0,
                username: "lineu12",
                firstName: "Lineu",
                lastName: "Silva",
                email: "lineu@email.com",
                password: "abc123",
                phone: "11997015621",
                userStatus: 1
            },
            {
                id: 0,
                username: "agostinho.taxi",
                firstName: "Agostinho",
                lastName: "Carrara",
                email: "agostinho@carrarataxi.com",
                password: "abc123",
                phone: "11988756522",
                userStatus: 1
            },
            {
                id: 0,
                username: "mendonca5",
                firstName: "Mendonça",
                lastName: "Pereira",
                email: "mendonca@email.com",
                password: "abc123",
                phone: "11988756523",
                userStatus: 1
            }]
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Recuperando usuário', () => {
        cy.request({
            url: '/user/agostinho.taxi',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.username).to.be.equal("agostinho.taxi")
            expect(res.body.firstName).to.be.equal('Agostinho')
            expect(res.body.lastName).to.be.equal('Carrara')
            expect(res.body.email).to.be.equal('agostinho@carrarataxi.com')
            expect(res.body.phone).to.be.equal('11988756522')
            expect(res.body.userStatus).to.be.equal(1)
        })
    })

    it('Atualizando usuário', () => {
        cy.request({
            url: '/user/maria',
            method: 'PUT',
            headers: {api_key: `test`},
            body: {
                id: 0,
                username: "maris2",
                firstName: "maria?",
                lastName: "Assunssão",
                email: "maria.assunssao@email.com",
                password: "abc123",
                phone: "40028922",
                userStatus: 1
            }
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Verificandoatualização', () => {
        cy.request({
            url: '/user/maris2',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.username).to.be.equal("maris2")
            expect(res.body.firstName).to.be.equal('maria?')
            expect(res.body.lastName).to.be.equal('Assunssão')
            expect(res.body.email).to.be.equal('maria.assunssao@email.com')
            expect(res.body.phone).to.be.equal('40028922')
            expect(res.body.userStatus).to.be.equal(1)
        })
    })
})

describe('Pet', () => {

    it('Criando pet', () => {
        cy.request({
            url: '/pet',
            method: 'POST',
            headers: {api_key: `test`},
            body: {
                "id": 9217389299,
                "category": {
                  "id": 0,
                  "name": "Dog"
                },
                "name": "Brutus",
                "photoUrls": [
                  ""
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "Pet"
                  }
                ],
                "status": "available"
              }
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Criando mais de 1 pet', () => {
        cy.request({
            url: '/pet/createWithArray',
            method: 'POST',
            headers: {api_key: `test`},
            body: [{
                "id": 9217389210,
                "category": {
                  "id": 0,
                  "name": "Dog"
                },
                "name": "Rex",
                "photoUrls": [
                  ""
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "Pet"
                  }
                ],
                "status": "available"
              },
              {
                "id": 9217389211,
                "category": {
                  "id": 1,
                  "name": "Cat"
                },
                "name": "Miau",
                "photoUrls": [
                  ""
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "Pet"
                  }
                ],
                "status": "available"
              },
              {
                "id": 9217389212,
                "category": {
                  "id": 1,
                  "name": "Cat"
                },
                "name": "Garfield",
                "photoUrls": [
                  ""
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "Pet"
                  }
                ],
                "status": "available"
              }]
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Recuperando pet', () => {
        cy.request({
            url: '/pet/9217389299',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.category.name).to.be.equal('Dog')
            expect(res.body.tags[0].name).to.be.equal('Pet')
            expect(res.body.name).to.be.equal('Brutus')
            expect(res.body.status).to.be.equal('available')
        })
    })

    it('Atualizando pet', () => {
        cy.request({
            url: '/pet',
            method: 'PUT',
            headers: {api_key: `test`},
            body: {
                "id": 9217389299,
                "category": {
                  "id": 0,
                  "name": "Cat"
                },
                "name": "Max",
                "photoUrls": [
                  ""
                ],
                "tags": [
                  {
                    "id": 3,
                    "name": "Fish"
                  }
                ],
                "status": "not available"
              }
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Verificando atualização', () => {
        cy.request({
            url: '/pet/9217389299',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.category.name).to.be.equal('Cat')
            expect(res.body.tags[0].name).to.be.equal('Fish')
            expect(res.body.name).to.be.equal('Max')
            expect(res.body.status).to.be.equal('not available')
        })
    })
})

describe('Pedido', () => {

    const dataVenda = Date.now()

    it('Criando pedido', () => {
        cy.request({
            url: '/pet',
            method: 'POST',
            headers: {api_key: `test`},
            body: {
                "id": 9103782362892,
                "petId": 9217389299,
                "userId": 0,
                "quantity": 1,
                "shipDate": dataVenda,
                "status": "placed",
                "complete": true
              }

        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Recuperando pedido', () => {
        cy.request({
            url: '/store/order/9103782362892',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.petId).to.be.equal(9217389299)
            expect(res.body.userId).to.be.equal(0)
            expect(res.body.quantity).to.be.equal(1)
            expect(re.body.status).to.be.equal('placed')
        })
    })

    it('Atualizando pedido', () => {
        cy.request({
            url: '/pet',
            method: 'PUT',
            headers: {api_key: `test`},
            body: {
                "id": 9103782362892,
                "petId": 9217389299,
                "userId": 0,
                "quantity": 1,
                "shipDate": dataVenda,
                "status": "delivered",
                "complete": true
              }

        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Verificando atualização', () => {
        cy.request({
            url: '/store/order/9103782362892',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.petId).to.be.equal(9217389299)
            expect(res.body.userId).to.be.equal(0)
            expect(res.body.quantity).to.be.equal(1)
            expect(re.body.status).to.be.equal('delivered')
        })
    })

})