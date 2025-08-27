import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import CategoryContainer from '../../../components/home_unificado/CategoryContainer'

const categoryContainer = new CategoryContainer()

When('The User Scroll Down To The Category Container Section', () => {
  categoryContainer.container.scrollIntoView()
})

Then('The User Should See The Category Container Section', () => {
  categoryContainer.container.should('be.visible')
})

Then('The User Should See More Than 1 Category Item', () => {
  categoryContainer.items.should('have.lengthOf.greaterThan', 1)
})

Then('Each Container Should Include An Image Title Subtitle And Link', () => {
  categoryContainer.items.each((item) => {
    cy.wrap(item).should('have.attr', 'href')
    cy.wrap(item).within(() => {
      cy.get('picture > img').should('be.visible')
      cy.get('p').should('have.length', 2)
    })
  })
})

When('The User Click On a Category Item', () => {
  categoryContainer.clickCategory()
})
