import login from "../pages/loginpage"
const Loginpage  = new login;

import admin from "../pages/adminpage";
const AdminPage = new admin;

import jobCategories from "../pages/jobCategories"
const jobCategoriesPage = new jobCategories;

import { Utils } from "../Utils/utils";
const RandomName = Utils()

describe("job categories",()=>{
it("Part1",()=>{
 cy.visit(Cypress.env("app-Url"))
Loginpage.typeusername(Cypress.env("userName"))  
Loginpage.typepassword(Cypress.env("password"))
Loginpage.clicksubmit()
AdminPage.selectAdmin ()
jobCategoriesPage.selectJobCategory()
jobCategoriesPage.selectAddButton()
jobCategoriesPage.typeName(RandomName)
jobCategoriesPage.SaveButton()
    })
})


