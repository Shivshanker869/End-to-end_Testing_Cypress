class Checkoutone{
  fillYourInfo(){
    cy.get('[data-test="firstName"]').type("Shivshanker")
    cy.get('[data-test="lastName"]').type("Gupta")
    cy.get('[data-test="postalCode"]').type("231501")
    cy.contains("Continue").click();
  }
}

export default Checkoutone;