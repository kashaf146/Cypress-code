class location {
getOrganization(){
return cy.xpath('//span[text()="Organization "]')
}
location(){
return cy.xpath ('//a[text()="Locations"]')
}
selectLocation(){
this.getOrganization().click()
this.location().click()
}









}
export default location 