class JobTitle{
getJobButton(){
return cy.xpath('//span[text()="Job "]')
}
jobTitle(){
return cy.xpath('//a[text()="Job Titles"]')    
}
selectJobTitle(){
this.getJobButton().click()
this.jobTitle().click()
}
getAddbutton(){
return cy.xpath('//button[text()=" Add "]')
}
selectAddButton(){
this.getAddbutton().click()
}
getjobTitle(){
return cy.xpath('//label[text()="Job Title"]/following::input[1]')
}
enterJobTitle(kk){
this.getjobTitle().type(kk)
}
description(){
return cy.xpath('//textarea[@placeholder="Type description here"]')
}
enterDescription(ds){
this.description().type(ds)
}
note(){
return cy.xpath('//textarea[@placeholder="Add note"]')
}
addNote(lo){
this.note().type(lo)
}
getSubmitButton(){
return cy.xpath ('//button [@type="submit"] ')
}
submitButton(){
this.getSubmitButton().click()    
}
}
export default  JobTitle