import login from "../pages/loginpage";
const Loginpage  = new login; 

import admin from "../pages/adminpage";
const AdminPage = new admin;

import workShift from "../pages/workShiftPage"
const workShiftPage = new workShift
describe("workshift",()=>{
it("Part1",()=>{
cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin () 
workShiftPage.SelectWorkShift()
workShiftPage.selectAddButton()
workShiftPage.typeShiftName("Morning Shift")
workShiftPage.typeEmployeeName("Kashaf")

    })
})