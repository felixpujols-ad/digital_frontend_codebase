import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import SideMenu from 'cypress/e2e/components/home_unificado/SideMenu'

const menu = new SideMenu()

Then('All Expected Elements Should Be Visible In The Sidemenu', () => {
  if (Cypress.env('isMobile')) {
    menu.mainLinks.forEach((selector) => cy.get(selector).should('be.visible'))
    menu.submenus.should('be.visible')
  }
})

When('Opens The Categories Submenu', () => {
  if (Cypress.env('isMobile')) {
    menu.openCategories()
  }
})

Then('All Sidemenu Categories Are Visible', () => {
  if (Cypress.env('isMobile')) {
    menu.categories.should('be.visible').and('have.attr', 'href')
  }
})

When('The User Opens The Sidemenu', () => {
  // Small pause to wait for the Header to render properly
  cy.wait(500)

  if (Cypress.env('isMobile')) {
    menu.open()
  }
})
