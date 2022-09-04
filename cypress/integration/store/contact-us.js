/// <reference types="Cypress" />

describe ("test contact us via store" , () =>{

    it ("should submit" , ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href$="contact"]').click()

        cy.get('#ContactUsFrm_first_name').type('joe')
        cy.get('#ContactUsFrm_email').type('joe@1.com');
        cy.get('#ContactUsFrm_enquiry').type('hello')
        cy.get('button[title="Submit"]').click()

        //a[href='https://automationteststore.com/index.php?rt=content/contact']
 
    }); 


 

})