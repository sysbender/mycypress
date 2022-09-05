/// <reference types="Cypress" />

describe ("test contact us via store" , () =>{

    it ("should submit" , ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href$="contact"]').click().then(function(buttonClicked) {
            console.log(" text on the button is ======== " + buttonClicked.text())

        })

        cy.get('#ContactUsFrm_first_name').type('joe')
        cy.get('#ContactUsFrm_email').type('joe@1.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type('hello')
        cy.get('button[title="Submit"]').click()

        //a[href='https://automationteststore.com/index.php?rt=content/contact']
        
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!' )
        cy.log("test completed ===========================")

        
    }); 

 

})