
export const Utils=()=>{
const UId = ()=> Cypress._.random(0,1e3)
const Id = UId()
return` Test${Id}`
}
