import login from "../pages/loginpage";
const Loginpage  = new login; 

import admin from "../pages/adminpage";
const AdminPage = new admin;

import  JobTitle from "../pages/jobTitlePage"
const jobTitlePage   = new JobTitle;

import payGrade from "../pages/payGrade"
const payGradePage = new payGrade

import { Utils } from "../Utils/utils";
const RandomName = Utils()

beforeEach(()=>{

cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin ()
})

describe("JobTitle",()=>{
 it("TestScript 1",()=>{
jobTitlePage.selectJobTitle()
jobTitlePage.selectAddButton()
jobTitlePage.enterJobTitle(RandomName)
jobTitlePage.enterDescription("SQA software Quality Assurance Engineer/ Testing Engineer") // // cy.xpath('//div[text()="No file chosen"]').click()
jobTitlePage.addNote("Be Carefull ")
jobTitlePage.submitButton()
})
it("TestScript 1",()=>{
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