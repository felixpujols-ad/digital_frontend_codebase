class Footer {
  private get entryId() {
    return Cypress.env('Footer Test')
  }

  get container() {
    return cy.get('footer')
  }

  get links() {
    return cy.get(`[data-testid="${this.entryId}-footer-nav-link-list-ul"] > li > a`).each((element) => element)
  }

  get linkListHeaders() {
    if (Cypress.env('isMobile'))
      return cy.get(`[data-testid="${this.entryId}-footer-nav-mobile-collapse"] > summary > span.font-semibold`)

    return cy.get(`[data-testid="${this.entryId}-footer-nav-link-list"] > h2`)
  }

  get contactInformation() {
    if (Cypress.env('isMobile')) return cy.get(`[data-testid="${this.entryId}-footer-nav-mobile-content"]`)

    return cy.get(`[data-testid="${this.entryId}-footer-nav-content"]`)
  }

  get copyrightInformation() {
    return cy.get(`[data-testid="${this.entryId}-footer-nav-extra-content"]`)
  }

  contactViaWhatsApp() {
    if (Cypress.env('isMobile'))
      cy.get(`[data-testid="${this.entryId}-footer-nav-mobile-content"] > :nth-child(3) > a`).click({ force: true })
    else cy.get(`[data-testid="${this.entryId}-footer-nav-content"] > :nth-child(3) > a`).click()
  }
}
export default Footer
