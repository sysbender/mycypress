/// <reference types="Cypress" />

describe ("iterate over element" , () =>{

    it ("log info all hair " , ()=>{

        cy.visit("https://automationteststore.com/");
 
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each( ($el, index, $list)=>{

            cy.log( " index =========" + index + ":" + $el.text())

        });
 
        
 
        
    }); 

 
    it ("add specific product to basket" , ()=>{

        cy.visit("https://automationteststore.com/");
 
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
 
        cy.get(".fixed_wrapper .prdocutname").each( ($el, index, $list)=>{

            if( $el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()

            }

             

        });
    }); 

 
 

})