import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import MosaicContainer from 'cypress/e2e/components/home_unificado/MosaicContainer'

const container = new MosaicContainer()

When('The User Scroll Down To The Mosaico Card Section', () => {
  container.mosaico.scrollIntoView()
})

Then('The User Should See More Than 1 Card', () => {
  container.cards.should('have.lengthOf.greaterThan', 1)
})

Then('Each Card Should Include An Image', () => {
  container.cards.each((card) => {
    cy.wrap(card).within(() => {
      cy.get('img').should('be.visible')
    })
  })
})

Then('Each Card Should Include A Title', () => {
  container.cards.each((card) => {
    cy.wrap(card).within(() => {
      cy.get('h2').should('be.visible').should('not.be.empty')
    })
  })
})
