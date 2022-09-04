 
# urls

http://www.webdriveruniversity.com/Contact-Us/contactus.html

https://www.automationteststore.com/

Ranorex Selocity



 npm init
 npm install --save-dev cypress@4.5.0


 npm install --save-dev cypress@4.12.1
# 

delete node_modules, then run "npm install"

./node_modules/.bin/cypress open


# folder and files

fixture - test data

# sites

http://www.webdriveruniversity.com/

https://automationteststore.com/


## mocha js
 describe
 it - individual test

### add types

<reference types="Cypress" />
then ctrl + alt + left click to get the help

### dom

tag : opening , close
.class attribute
#ID attribute

### ignore xhr
in support/index.js

### selector

```javascript

// by tag name
cy.get("input")

// by attribute name and value
cy.get("input[name='first_name]")

// by id
cy.get("#contact_me")

// by class
cy.get(".feedback-input")

// by multiple classes
cy.get("[class='navbar navbar-inverse']")

// by two different attributes
cy.get("[name='email'][placeholder='Email Address']")

// by xpath
cy.xpath("//input[@name='first_name']")
```