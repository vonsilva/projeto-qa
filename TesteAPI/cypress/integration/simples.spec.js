describe('Usuário', () => {
    it('Criar usuário', () => {
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

    it('Recuperar usuário', () => {
        cy.request({
            url: '/user/maria',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.firstName).to.be.equal('Maria')
            expect(res.body.lastName).to.be.equal('Assunção')
            expect(res.body.email).to.be.equal('maria.assuncao@email.com')
            expect(res.body.phone).to.be.equal('11988756521')
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
            url: '/user/maria',
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

    it('Criar pet', () => {
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
                    "name": "sring"
                  }
                ],
                "status": "available"
              }
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })

    it('Recuperar pet', () => {
        cy.request({
            url: '/pet/9217389299',
            method: 'GET',
            headers: {api_key: `test`},
            body: {
            }
        }).then(res => {
            expect(res.body.category.name).to.be.equal('Dog')
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
                    "id": 0,
                    "name": "sring"
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
            expect(res.body.name).to.be.equal('Max')
            expect(res.body.status).to.be.equal('not available')
        })
    })
})


describe('Pedido', () => {

    const dataVenda = Date.now()

    it('Criar pedido', () => {
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

    it('Recuperar pedido', () => {
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