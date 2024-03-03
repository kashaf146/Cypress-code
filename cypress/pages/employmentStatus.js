class EmploymentStatus {
getJob(){
return cy.xpath('//span[text()="Job "]')
}
getEmploymentStatus(){
return cy.xpath('//a[text()="Employment Status"]')
}
selectEmploymentStatus(){
this.getJob().click()
this.getEmploymentStatus().click()
}
getAddButton(){
return cy.xpath('//button[text()=" Add "]')
}
selectAddButton(){
this.getAddButton().click()
}
getName(){
return cy.xpath('//label[text()="Name"]/following::input')
}
typeName(oo){
this.getName().type(oo)
}
SubmitButton(){
return cy.xpath('//button[@type="submit"]')
}
getSubmitButton(){
this.SubmitButton().click()
}
}
export default  EmploymentStatus