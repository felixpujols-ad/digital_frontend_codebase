import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('There Are No A11y Violations', () => {
  // A small delay to wait for components to render
  cy.wait(600)

  cy.injectAxe({ axeCorePath: '../../node_modules/axe-core/axe.min.js' })
  cy.checkA11y()
})
