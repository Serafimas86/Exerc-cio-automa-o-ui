/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('[50806209] – Produto Lgc2')
            .click()
        
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .contains('[50806209] – Produto Lgc2').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
    
        cy.get('.woocommerce-message').should('contain', '“[50806209] – Produto Lgc2” foi adicionado no seu carrinho.')
    });

});