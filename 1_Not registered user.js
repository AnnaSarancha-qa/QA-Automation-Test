describe('',function()
{
it('Not registered user',function()
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
    cy.get('[name="email"]').should("be.visible").type("asa@gmail.com")//enter not registered email
    cy.get('[name="password"]').should("be.visible").type("123456789")//add not valid password
    cy.get('[name="password"]').should("have.attr","type").should("be.eq","password")//check that we see ** despite the password itself
    
    cy.get('[ng-hide="showPassword"]').should("be.visible").click()//click on the eye icon
    cy.get('[name="password"]').should("have.attr","type").should("be.eq","text")//check that password is visible
    
    cy.get('[type="submit"]').should("be.visible").click()//click on the Log in button
    cy.get(".ssls-notification__info").should("be.visible")
    cy.on('window:confirm',(str)=>
    {
        expect(str).to.equal("Uh oh! Email or password is incorrect")   
    })

})
})