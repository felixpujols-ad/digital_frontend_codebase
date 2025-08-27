import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Header from 'cypress/e2e/components/home_unificado/Header'
import Megamenu from 'cypress/e2e/components/home_unificado/Megamenu'

const header = new Header()
const megamenu = new Megamenu()

When('The User Opens The Megamenu', () => {
  if (Cypress.env('isMobile')) return

  // Small pause to wait for the Header to render properly
  cy.wait(500)

  header.openMegamenu()
})

Then('Each Category Has Their Subcategories', () => {
  if (Cypress.env('isMobile')) return

  megamenu.categories.each((category) => {
    cy.wrap(category).trigger('mouseover')
    megamenu.subcategories.should('be.visible').and('have.attr', 'href')
  })
})
