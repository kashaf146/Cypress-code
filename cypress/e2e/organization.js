import login from "../pages/loginpage";
const Loginpage  = new login; 
import admin from "../pages/adminpage";
const AdminPage = new admin;
import generalInformation  from "../pages/organizationPage";
const InfomationPage = new generalInformation;
describe("admin",function(){
it("part1",function(){
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin()
InfomationPage.selectOrgnization()
InfomationPage.selectGeneralInformation()
InfomationPage.selectToogleButton()
InfomationPage.organizationName("abc")
InfomationPage.RegisterationNumber("6790")
InfomationPage.TaxId("123456")
InfomationPage.Phone("03014566202")
InfomationPage.Fax("1223")
InfomationPage.Email("zahra@gmail.com")
InfomationPage.Address("Lahore")
InfomationPage.Address2("Pakistan")
InfomationPage.City("lahore")
InfomationPage.State("PB")
InfomationPage.Zipcode("37474")
InfomationPage.Country()
InfomationPage.Notes("Hrm Samaritan ")
InfomationPage.saveButton()









})
})