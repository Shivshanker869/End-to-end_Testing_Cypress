class Order{
    verifySuccess(){
     cy.get('[data-test="complete-header"]').should('be.visible')
    }

 goBack(){
    cy.get('[data-test="back-to-products"]').click()
 }
  
}

export default Order;