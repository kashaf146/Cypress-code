class login {
getUserName(){
return cy.xpath("//input[@name='username']")

}
typeusername(b){
    this.getUserName().type(b);
}
getpassword()
{
    return cy.xpath("//input[@type='password']")
}
typepassword(a){
    this.getpassword().type(a);
}
getbutton  (){
    return cy.xpath("//button[@type='submit']")
}
clicksubmit(){
   this.getbutton().click()
}
getfailuremessage(){
    return cy.xpath("//p[text()='Invalid credentials']")
}




}
export default login