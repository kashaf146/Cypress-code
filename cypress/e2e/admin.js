import login from "../pages/loginpage";
const Loginpage  = new login; 
import admin from "../pages/adminpage";
const AdminPage = new admin;
describe("admin",function(){
it("part1",function(){
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin()
AdminPage.addbutton() 
AdminPage.userroleselection()
AdminPage.SelectStatus()
AdminPage.SelectEmployeeName(this.data.admin.employeeName)
AdminPage.TypeUserName(this.data.admin.userName)
AdminPage.TypePassword(this.data.admin.password)
AdminPage.TypeConfirmPassword(this.data.admin.confirmPassword)
AdminPage.SaveButtonClick()


    })
})