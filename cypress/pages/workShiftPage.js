class workShift{
getJob(){
return cy.xpath('//span[text()="Job "]')
}
getWorkShift(){
return cy.xpath ('//a[text()="Work Shifts"]')
}
SelectWorkShift(){
this.getJob().click()
this.getWorkShift().click()
}
getAddBuuton(){
return cy .xpath('//button[text()=" Add "]')

}
selectAddButton(){
this.getAddBuuton().click()
}
shiftName(){
return cy.xpath("//label[text()='Shift Name']/following::Input[1]")
}
typeShiftName(pp){
this.shiftName().type(pp)
}
// Working Hours 
getHoursFrom(){
return cy.xpath('//label[text()="From"]/following::input[@placeholder="hh:mm"][1]')
}
selectHoursfrom(){
return cy.xath ('')
}
selectFrom(){
this.getHoursFrom()
this.selectHoursfrom()
}

getHoursTo(){
return 
}
selectHoursto(){
return
}
selectTo(){
this.getHoursTo()
this.selectHoursto()
}


assignedEmployee(){
return cy.xpath('//input[@placeholder="Type for hints..."]')
}
typeEmployeeName(kk){
this.assignedEmployee().type(kk)   
}

}
export default workShift