class CategoryContainer {
  private get entryId() {
    return Cypress.env('QA - Container Categories')
  }

  get container() {
    return cy.get(`[data-testid="${this.entryId}-container"]`)
  }

  get items() {
    return this.container.find(`[data-testid="${this.entryId}-container-cols"] a`)
  }

  clickCategory() {
    // Small delay to allow the component to fully render
    cy.wait(100)
    this.items.first().click()
  }
}

export default CategoryContainer
