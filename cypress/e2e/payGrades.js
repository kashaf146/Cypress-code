import login from "../pages/loginpage";
const Loginpage  = new login; 

import admin from "../pages/adminpage";
const AdminPage = new admin;

import payGrade from "../pages/payGrade"
const payGradePage = new payGrade

import { Utils } from "../Utils/utils";
const RandomName = Utils()

describe("PayGrades",()=>{
    it("TestScript 1",()=>{
      
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin()
payGradePage.selectPayGrade()
payGradePage.selectAddButton()
payGradePage.typeName(RandomName)
payGradePage.saveButton()
 // Select  Currencies 
cy.xpath('//button[text()=" Add "]').click()
cy.xpath('//label[text()="Currency"]/following::div[text()="-- Select --"]').click()
// cy.xpath("//span[text()='AFN - Afghanistan Afghani']").click()
 cy.xpath('//div[@role="listbox"]').last().wait(1000).click();
    })
})