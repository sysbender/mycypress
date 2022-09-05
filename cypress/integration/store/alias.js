/// <reference types="Cypress" />

describe ("alias and invoke" , () =>{

    it ("validate hair product" , ()=>{

        cy.visit("https://automationteststore.com/");
 
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')

        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
               
 
        
    }); 

 
    it.only ("validate   product length and each for add to cart" , ()=>{

        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include',  'Add to Cart1')

 
        })

})