class SideMenu {
  open() {
    cy.get('[data-testid="blt26617d4f2e17657d-header-icon-menu"]').click()
  }

  get mainLinks() {
    return [
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-login-chevron"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-link-0"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-link-1"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-link-2"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-link-3"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-link-4"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-0"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-1"]',
      '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-2"]',
    ]
  }

  get submenus() {
    if (Cypress.env('isMobile')) {
      return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-mobile-container"] button')
    }
  }

  openCategories() {
    cy.get('[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-0"]').click()
  }

  get categories() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-menu-mobile-submenu-links-section"] > a')
  }
}
export default SideMenu
