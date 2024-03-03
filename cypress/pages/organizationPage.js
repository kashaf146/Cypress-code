class generalInformation  {
getOrganization(){
return cy.xpath('//span[text()="Organization "]')
}
selectOrgnization(){
this.getOrganization().click()
}

getGeneralInformation(){
return cy.xpath('//a[text()="General Information"]')
}
selectGeneralInformation(){
this.getGeneralInformation().click()
}

getToogleButton(){
return cy.xpath ('//input[@type="checkbox"]/following::span')
}
selectToogleButton(){
this.getToogleButton().click()
}

getOrganizationName(){
return cy.xpath("//label[text()='Organization Name']/following::input[1]")
}
organizationName(a){
this.getOrganizationName().clear()
this.getOrganizationName().type(a)
}

getRegisterationNumber(){
return cy.xpath("//label[text()='Registration Number']/following::input[1]")
}
RegisterationNumber(b){
this.getRegisterationNumber().clear()
this.getRegisterationNumber().type(b)
}
getTaxId(){
return cy.xpath ('//label[text()="Tax ID"]/following::input[1]')
}   
TaxId(c){
this.getTaxId().clear();
this.getTaxId().type(c)
}
getPhone(){
return cy.xpath('//label[text()="Phone"]/following::input[1]')
}
Phone(d){
this.getPhone().clear()
this.getPhone().type(d)
}
getFax(){
return cy.xpath('//label[text()="Fax"]/following::input[1]')
}
Fax(e){
this.getFax().clear();
this.getFax().type(e)
}
getEmail(){
return cy.xpath('//label[text()="Email"]/following::input[1]')
}
Email(f){
this.getEmail().clear();
this.getEmail().type(f)
}

getAddress(){
return cy.xpath('//label[text()="Address Street 1"]/following::input[1]')
}
Address(g){
this.getAddress().clear();
this.getAddress().type(g)
}
getAddress2(){
return cy.xpath('//label[text()="Address Street 2"]/following::input[1]')
}
Address2(h){
this.getAddress2().clear();
this.getAddress2().type(h)
}
getCity(){
return cy.xpath('//label[text()="City"]/following::input[1]')
}
City(k){
this.getCity().clear();
this.getCity().type(k)
}
getState(){
return cy.xpath('//label[text()="State/Province"]/following::input[1]')
}
State(l){
this.getState().clear();
this.getState().type(l)
}
getZipCode(){
return cy.xpath('//label[text()="Zip/Postal Code"]/following::input[1]')
}
Zipcode(m){
this.getZipCode().clear();
this.getZipCode().type(m)
}
getCountry(){
return cy.xpath('//label[text()="Country"]/following::div[1]')
}
selectCountry(){
return cy.xpath('//div[@role="option"]/following::span[text()="Albania"]')
}
Country(){
this.getCountry().click();
this.selectCountry().click()

}
getNotes(){
return cy.xpath('//label[text()="Notes"]/following::textarea')
}
Notes(o){
this.getNotes().clear();
this.getNotes().type(o)
}
getSaveButton(){
return cy.xpath('//button[@type="submit"]')
}
saveButton(){
this.getSaveButton().click()
}

}
export default generalInformation 