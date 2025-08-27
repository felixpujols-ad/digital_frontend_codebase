class Checkout {
  navigate(path: string = '') {
    cy.visit(path)
  }
}

export default Checkout
