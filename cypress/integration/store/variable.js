/// <reference types="Cypress" />

describe ("variable and cy commands" , () =>{

    it ("navigating to specifc product pages" , ()=>{

        cy.visit("https://automationteststore.com/");
 
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
   
   
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()


 
        
 
        
    }); 

 
    it ("navigating to specifc product pages" , ()=>{

        cy.visit("https://automationteststore.com/");
 
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        // const header = cy.get("h1 .maintext")
        // cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText)=> {
            const headerText = $headerText.text()

            cy.log("============" + headerText)
            expect(headerText).is.eq('Makeup')
        })
   
        
    }); 


    it.only ("validate properties of the contact up page" , ()=>{

        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        // use cypress command and chaining

        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //jquery 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then( text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

             // embeeded commands (Closure)
             cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
                cy.log(fnText)
             })
        })

       
        
    }); 

 

})