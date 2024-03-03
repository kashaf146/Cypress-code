class payGrade{
getJob(){
return cy.xpath ('//span[text()="Job "]')
}
getPayGrade(){
return cy.xpath('//a[text()="Pay Grades"]')
}
selectPayGrade(){
this.getJob().click()
this.getPayGrade().click()
}
getAddButton(){
return cy.xpath("//button[text()=' Add ']")
}
selectAddButton(){
this.getAddButton().click()
}
name(){
return cy.xpath('//label[text()="Name"]/following::input')
}
typeName(ww){
this.name().type(ww)
}
save(){
return cy.xpath("//button[text()=' Save ']")
}
saveButton(){
this.save().click()
}
}
export default payGrade