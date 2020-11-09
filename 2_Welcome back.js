describe('',function()
{
it('registered user',function()
{  

    cy.visit("https://www.sbzend.ssls.com")//Open Home page
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
    cy.get(".ssls-home-page-h1").should("be.visible")//check that we are on the home page
    cy.contains("Log in").should("be.visible").click()//click on the login button
    cy.url().should("include","authorize")//check that we are on the needed page
    cy.get("h1").contains("Authorization")//another way to check that we are on the needed page
    cy.get('[name="email"]').should("be.visible").type("ssls.automation+666@gmail.com")//enter not registered email
    cy.get('[name="password"]').should("be.visible").type("123456")//add not valid password
    cy.get('[name="password"]').should("have.attr","type").should("be.eq","password")//check that we see ** despite the password itself
    
    cy.get('[ng-hide="showPassword"]').should("be.visible").click()//click on the eye icon
    cy.get('[name="password"]').should("have.attr","type").should("be.eq","text")//check that password is visible
    
    cy.get('[type="submit"]').should("be.visible").click()//click on the Log in button
    cy.wait(2000)
    cy.url().should("include","bundles")//check that we are on the needed page
    cy.get('.ssls-header-add-nav > .ssls-dropdown > .ssls-btn--sm > .ssls-toolbar__btn-text').contains("ssls.automation+666@gmail.com").click()
    cy.wait(1000)
    cy.get("#app > div > header > div > div > div > div > ul").find('li')
          .should('have.length', 5)
          .should("contain"," Orders history")
          .and("contain"," Profile")
          .and("contain","ssls.automation+666@gmail.com")
          .and("contain"," Funds")
          .and("contain"," Log out")

})
})