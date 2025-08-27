import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import Home from '../../pages/Home'
import Blpcdpplp from '../../pages/Blpcdpplp'
import BlankPage from '../../pages/BlankPage'
import Checkout from '../../pages/Checkout'

const pages = {
  home_unificado: new Home(),
  blpcdpplp: new Blpcdpplp(),
  blankpage: new BlankPage(),
  checkout: new Checkout(),
}

Given('The User Is On {word} {word}', (site: string, target: string) => {
  const page = pages[site]
  const path = target === 'page' ? '' : `/${target}`
  page.navigate(path)
})

Given('The User Is On The Home Unificado', () => {
  pages.home_unificado.navigate('')
})

Then('The User Should Be On {word} page', (site: string) => {
  const baseUrls = Cypress.env('baseUrls')
  cy.url().should('include', baseUrls[site])
})
