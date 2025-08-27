import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import Header from 'cypress/e2e/components/home_unificado/Header'

const header = new Header()

Then('All Expected Elements Should Be Visible In The Header', () => {
  header.myAddress.should('be.visible')
  header.myStore.should('be.visible')
  header.logo.should('be.visible')
  header.favorites.should('be.visible')
  header.shoppingCart.should('be.visible')

  if (Cypress.env('isMobile')) {
    header.hamburgerMenu.should('be.visible')
  } else {
    header.topRightLinks.forEach((link) => link.should('be.visible'))
    header.categories.should('be.visible')
    header.account.should('be.visible')
  }
})

When('User Types {string} Into The Search Field', (query: string) => {
  header.searchFor(query)
})

Then('The User Should See Suggestions Related To {string}', (query: string) => {
  header.suggestions(query).should('be.visible')
})

Then('The User Clicks On The Suggestions', () => {
  header.selectSuggestions()
})
