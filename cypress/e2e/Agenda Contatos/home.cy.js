/// <reference types="cypress" />

describe('Testes para funcionamento adequado da página', () => { 
    beforeEach(() => { 
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
    })

    it('Deve criar um novo contato', () => { 
        cy.get('input[type="text"]').type('Pedro Augusto')
        cy.get('input[type="email"]').type('pedroaugusto@gmail.com')
        cy.get('input[type="tel"]').type('1154263891')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve alterar um dos contatos', () => { 
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type('Pedro Lagostim')
        cy.get('.alterar').click()
    })

    it('Deve remover um dos contatos', () => { 
        cy.get('.delete').first().click()
    })
})