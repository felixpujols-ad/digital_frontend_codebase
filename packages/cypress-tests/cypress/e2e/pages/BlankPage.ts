class BlankPage {
  navigate(path: string = '') {
    cy.visit(path)
  }
}

export default BlankPage
