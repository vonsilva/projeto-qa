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
                "quantity": 1,
                "shipDate": dataVenda,
                "status": "placed",
                "complete": true
              }

        }).then(res => {
            expect(res.status).to.be.equal(200)
            const $ = (res.body)
            return $
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
            expect(res.body.category.name).to.be.equal('Dog')
            expect(res.body.name).to.be.equal('Brutus')
            expect(res.body.status).to.be.equal('available')
        })
    })

})