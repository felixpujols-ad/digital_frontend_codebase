class Megamenu {
  get categories() {
    if (Cypress.env('isMobile')) {
      return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-0"]')
    }
    return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-categories"] a')
  }

  get subcategories() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-categories-header-subcategory"] a')
  }
}

export default Megamenu
