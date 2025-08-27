class Header {
  private get headerUid() {
    return Cypress.env('Header Test')
  }

  get logo() {
    return cy.get(`[data-testid="${this.headerUid}-header-logo-link"]`)
  }

  get myAddress() {
    return cy.get(`[data-testid="${this.headerUid}-header-top-app-buttons-address-button"]`)
  }

  get myStore() {
    return cy.get(`[data-testid="${this.headerUid}-header-top-app-buttons-store-button"]`)
  }

  get hamburgerMenu() {
    return cy.get(`[data-testid="${this.headerUid}-header-icon-menu"]`)
  }

  get topRightLinks() {
    return [
      cy.get(`[data-testid="${this.headerUid}-header-header-nav-top-link-0"]`),
      cy.get(`[data-testid="${this.headerUid}-header-header-nav-top-link-1"]`),
      cy.get(`[data-testid="${this.headerUid}-header-header-nav-top-link-2"]`),
      cy.get(`[data-testid="${this.headerUid}-header-header-nav-top-link-3"]`),
    ]
  }

  get account() {
    return cy.get(`[data-testid="${this.headerUid}-header-menu-dropdown-button"]`)
  }

  get favorites() {
    return cy.get(`[data-testid="${this.headerUid}-header-shopping-cart-favourites-link"]`)
  }

  get shoppingCart() {
    return cy.get(`[data-testid="${this.headerUid}-header-shopping-cart-shopping-link"]`)
  }

  get categories() {
    return cy.get(`[data-testid="${this.headerUid}-header-button-category"]`)
  }

  suggestions(query?: string) {
    if (Cypress.env('isMobile')) return cy.get(`[data-testid="${this.headerUid}-search-mobile-results"]`)
    else return cy.get(`[data-testid="${this.headerUid}-suggestion-${query}"]`)
  }

  searchFor(query: string) {
    if (Cypress.env(`isMobile`)) {
      cy.get(`nav[aria-label="Header Navigation Mobile"] input`).click()
      cy.get(`[data-testid="search-bar-input"]`).type(query)
    } else {
      cy.get(`nav[aria-label="Header Navigation Desktop"] input`).click()
      cy.get(`nav[aria-label="Header Navigation Desktop"] input`).type(query)
    }
  }

  selectSuggestions() {
    if (Cypress.env(`isMobile`))
      cy.get(`[data-testid="${this.headerUid}-search-mobile-results"] > :nth-child(1)`).click()
    else cy.get(`[data-testid="${this.headerUid}-header-search-search-recommendation"] > :nth-child(1)`).click()
  }

  openMegamenu() {
    cy.get(`[data-testid="${this.headerUid}-header-button-category"]`).click()
  }
}

export default Header
