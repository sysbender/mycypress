/// <reference types="Cypress" />

describe ("inspect item using chain of commands" , () =>{

    it ("click the first item" , ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
 
        
    }); 

    it.only ("click the first item via text" , ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("selected the following item : " + itemHeaderText.text())
        })
 
        
    }); 

    it ("click the first item via index" , ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
 
        
    }); 
 

})