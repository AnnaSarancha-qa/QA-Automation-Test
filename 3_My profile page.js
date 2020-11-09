describe('',function()
{
  let Name
  let Email
  let Phone
  let Address
  let SupportPin
  let Newsletter

beforeEach('precondition',function()
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
    cy.get('[href="/user/profile"]').should("be.visible").click()//click on the Profile
    cy.url().should("include","profile")//check that we are on the needed page
   
    
    cy.get('.description').eq(0).then(($name) => {
            
      
     
       Name = $name.text();
      //cy.wrap(Name).as('Name');
      //expect(Name).to.contain('Tom Ford')
    })
    cy.get('.description').eq(1).then(($email) => {

       Email = $email.text()
      //expect(Email).to.contain('ssls.automation+666@gmail.com')
    })
    cy.get('.description').eq(3).then(($phone) => {

       Phone = $phone.text()
      //expect(Phone).to.contain('+380 12312312')
    })
    cy.get('.description').eq(4).then(($address) => {

       Address = $address.text()
      //expect(Address).to.contain('Diagon alley 21, Misto, Uryupinsk 612120, Ukraine')
    })
    cy.get('.description').eq(5).then(($support) => {

      SupportPin = $support.text()
      //expect(SupportPin).to.contain('q0tT')
    })
    cy.get('.description').eq(6).then(($newsL) => {

       Newsletter = $newsL.text()
      //expect(Newsletter).to.contain('Include in mailing list')
    })
    



    cy.get('.ssls-header-add-nav > .ssls-dropdown > .ssls-btn--sm > .ssls-toolbar__btn-text').click()
    cy.contains("Log out").click()//click on the log out button
  })

  it('Client area',function()
{ 


    
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
    cy.get('[href="/user/profile"]').should("be.visible").click()
    cy.url().should("include","/user/profile")//check that we are on the needed page
    cy.wait(1000)
    
   

    cy.get(".description").should((rows) => {
          
      expect(rows).to.have.length(7)     
      expect(rows.eq(0)).to.contain (Name)
      expect(rows.eq(1)).to.contain (Email)
      expect(rows.eq(2)).not.be.empty
      expect(rows.eq(3)).to.contain  (Phone)
      expect(rows.eq(4)).to.contain (Address)
      expect(rows.eq(5)).to.contain (SupportPin)
      expect(rows.eq(6)).to.contain (Newsletter)
      


  })  
})
})