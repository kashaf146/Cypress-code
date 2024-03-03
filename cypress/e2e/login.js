
import login from "../pages/loginpage"

const Loginpage  = new login; 
describe("LoginOrange",()=>{
    it("part1",()=>{
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
cy.url().should("include","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })
it("part2",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
Loginpage.typeusername("Admin")  
Loginpage.typepassword("66123")
Loginpage.clicksubmit()
Loginpage. getfailuremessage().should("have.text","Invalid credentials")

    })
})