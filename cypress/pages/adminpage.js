class admin{
adminbutton(){
return cy.xpath(' //span[text()="Admin"]')
}
selectAdmin (){
this.adminbutton().click()
}


add(){
return  cy.xpath('//button[text()=" Add "]')
}
addbutton(){
this.add().click()
}
userrole(){
return cy.xpath('//label[text()="User Role"]/following::div[text()="-- Select --"][1]')
}
userroledropdown (){
  return cy.xpath('//label[text()="User Role"]/following::span[text()="Admin"]')    
}
userroleselection(){
this.userrole().click()
this.userroledropdown().click()
}

status(){
return  cy.xpath('//label[text()="Status"]/following::div[text()="-- Select --"]')
}
StatusDropdown(){
return cy.xpath('//span[text()="Enabled"]')
}
SelectStatus(){
this.status().click()
this.StatusDropdown().click()
}
Epname(){
return cy.xpath ("//input[@placeholder='Type for hints...']")
}
EmployeeNameDropdown(){
return cy.xpath('//div[@role="listbox"]/div[2]')
}
SelectEmployeeName(bb){
this.Epname().type(bb)
this.EmployeeNameDropdown().click()
}
UserName(){
return cy.xpath('//label[text()="Username"]/following::input[1]')
}
TypeUserName(cc){
this.UserName().type(cc)
}
Password(){
return cy.xpath('//label[text()="Password"]/following::input[1]')
}
TypePassword(c){
this.Password().type(c)
}

ConfirmPassword(){
return cy.xpath('//label [text()="Confirm Password"]/following::input')
}
TypeConfirmPassword(e){
this.ConfirmPassword().type(e)
}
Save(){
return  cy.xpath('//button[text()=" Save "]')
}
SaveButtonClick(){
this.Save().click()
}



}
export default admin