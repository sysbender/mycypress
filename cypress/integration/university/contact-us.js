/// <reference types="Cypress" />

describe ("test contact us via webdriveruni" , () =>{

    it ("should submit" , ()=>{
        // cy.visit('https://www.webdriveruniversity.com/');
 
        // cy.get('#contact-us').click({force: true});
        
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Smith");
        cy.get('[name="email"]').type("joe.smith@test.com")
        cy.get('textarea.feedback-input').type("is it working?")
        cy.get('[type="submit"]').click()


    }); 


    it.only ("should not submit" , ()=>{

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Smith");
        //cy.get('[name="email"]').type("joe.smith@test.com")
        cy.get('textarea.feedback-input').type("is it working?")
        cy.get('[type="submit"]').click()

    });

})