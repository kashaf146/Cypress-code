class jobCategories{
getJob(){
return cy.xpath('//span[text()="Job "]')
}
getJobCategory(){
return cy.xpath('//a[text()="Job Categories"]')
}
selectJobCategory(){
this.getJob().click()
this.getJobCategory().click()
}
getAddButton(){
return cy.xpath('//button[text()=" Add "]')
}
selectAddButton(){
this.getAddButton().click()
}
Name(){
return cy.xpath('//label[text()="Name"]/following::input')
}
typeName(pp){
this.Name().type(pp)
}
getSaveButton(){
return cy.xpath('//button[text()=" Save "]')
}
SaveButton(){
this.getSaveButton().click()
}
}
export default jobCategories