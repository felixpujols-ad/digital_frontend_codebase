class Band {
  private get bandTestUid() {
    return Cypress.env('QA - Band')
  }

  get activeSlide() {
    return cy.get('.swiper-slide-active')
  }

  next() {
    cy.get(`[data-testid="${this.bandTestUid}-band-next-button-icon"]`).click()
  }

  selectSlide(index: number) {
    cy.get(`[data-testid="${this.bandTestUid}-band-slide-${index}"]`).should('be.visible').click()
  }
}

export default Band
