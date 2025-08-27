import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import Band from 'cypress/e2e/components/home_unificado/Band'
import Store from 'cypress/e2e/pages/Store'

const band = new Band()

When('The User Selects The Next Arrow', () => {
  band.next()
})

Then('The Next Slide Will Be Visible', () => {
  band.activeSlide.should('be.visible')
})

When('The User Selects The Slide', () => {
  band.next()
  band.selectSlide(1)
})

Then('The User Can Be Redirected', () => {
  const store = new Store()
  store.url.should('contain', 'tienda')
})
