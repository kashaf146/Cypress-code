import login from "../pages/loginpage";
const Loginpage  = new login; 

import admin from "../pages/adminpage";
const AdminPage = new admin;

import  JobTitle from "../pages/jobTitlePage"
const jobTitlePage   = new JobTitle;

import { Utils } from "../Utils/utils";
const RandomName = Utils()

describe("JobTitle",()=>{
    it("TestScript1",()=>{
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()


AdminPage.selectAdmin ()
jobTitlePage.selectJobTitle()
jobTitlePage.selectAddButton()
jobTitlePage.enterJobTitle(RandomName)
jobTitlePage.enterDescription("SQA software Quality Assurance Engineer/ Testing Engineer") // // cy.xpath('//div[text()="No file chosen"]').click()
jobTitlePage.addNote("Be Carefull ")
jobTitlePage.submitButton()

    })
})