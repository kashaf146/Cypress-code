import login from "../pages/loginpage";
const Loginpage  = new login; 
import admin from "../pages/adminpage";
const AdminPage = new admin;
import location from "../pages/locationPage"
const LocationPage = new location; 
describe("admin",function(){
it("part1",function(){
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin()
LocationPage.selectLocation()

})
})