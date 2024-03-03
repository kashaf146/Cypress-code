import login from "../pages/loginpage";
const Loginpage  = new login; 

import admin from "../pages/adminpage";
const AdminPage = new admin;

import EmploymentStatus from "../pages/employmentStatus"
const EmploymentStatusPage  = new EmploymentStatus;

import { Utils } from "../Utils/utils";
const RandomName = Utils()

describe("Employment Status",()=>{
it("Test Scripts",()=>{
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin ()
EmploymentStatusPage.selectEmploymentStatus()
EmploymentStatusPage.selectAddButton()
EmploymentStatusPage.typeName(RandomName)
EmploymentStatusPage.getSubmitButton()
})

})