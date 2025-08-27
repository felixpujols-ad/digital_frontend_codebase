import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor'
import MosaicoCards from 'cypress/e2e/components/blpcdpplp/MosaicoCards'

const mosaicoCards = new MosaicoCards()

Given('El Componente De Mosaico Debe Estar Visible', () => {
  mosaicoCards.container.should('be.visible')
})

Then('El Mosaico Debe Contener Multiples Cards Simples De Categoria', () => {
  mosaicoCards.simpleCards.forEach((card) => card.should('be.visible'))
})

When('El Mosaico Debe Contener Al Menos Una Card De Tipo Banner Promocional', () => {
  mosaicoCards.promoBanner.should('be.visible')
})

Given(
  'Que la Card de categoría {string} está configurada para redirigir a {string}',
  (cardName: string, url: string) => {
    mosaicoCards.getCategoryCardId().should('have.attr', 'href').and('include', url)
  },
)

When('El usuario hace clic en la Card {string}', (cardName: string) => {
  mosaicoCards.getCategoryCardId().contains(cardName).click()
})

Then('El usuario debe ser redirigido exitosamente a la página {string}', (url: string) => {
  cy.url().should('include', url)
})

Given('Que El Banner Promocional De Muebles De Jardin Es Visible', () => {
  mosaicoCards.promoBanner.first().should('be.visible')
})

When('El Usuario Hace Clic En El Boton {string}', (text: string) => {
  mosaicoCards.promoBannerButton(text).click()
})

Then('Es Redirigido A La Pagina De Categoria {string}', (url: string) => {
  cy.url().should('include', url)
})
