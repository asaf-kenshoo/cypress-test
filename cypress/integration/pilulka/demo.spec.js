context('Demo', () => {
    it('Test details', () => {
        cy.visit('index.html')
        cy.get('[data-cy=details-trigger]').click()
        cy.get('[data-cy=details-content]').should('be.visible')
        cy.wait(1000)
        cy.get('[data-cy=details-trigger]').click()
        cy.get('[data-cy=details-content]').should('not.be.visible')
    })

    it('Test form', () => {
        cy.visit('index.html')
        cy.get('[data-cy=form-name]').type('Tomas')
        cy.get('[data-cy=form-surname]').type( 'Smetka')
        cy.get('[data-cy=form]').submit()
        cy.url().should('include', 'name=Tomas&surname=Smetka')
    })

    it('Test ajax', () => {
        cy.server()
        cy.visit('index.html')
        cy.route('GET', 'https://jsonplaceholder.typicode.com/comments').as('getData')
        cy.get('[data-cy=ajax-fetch-data]').click()
        cy.get('[data-cy=ajax-fetch-alert]').should('be.visible')
    })
})

