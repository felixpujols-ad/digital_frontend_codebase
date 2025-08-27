import { Then } from '@badeball/cypress-cucumber-preprocessor'
import Footer from 'cypress/e2e/components/home_unificado/Footer'
import WhatsApp from 'cypress/e2e/pages/WhatsApp'

const footer = new Footer()

Then('Each Link Should Redirect To The Corresponding Page', () => {
  footer.links.each((link) => expect(link).to.have.attr('href').and.not.be.empty)
})

Then('Check The WhatsApp Link', () => {
  footer.contactViaWhatsApp()
})

Then('The Link Should Redirect To The Corresponding WhatsApp Site', () => {
  const whatsapp = new WhatsApp()
  whatsapp.url.should('contains', 'whatsapp')
})

Then('All Link List Headers Should Be Visible', () => {
  footer.linkListHeaders.each((header) => expect(header).to.be.visible)
})

Then('The Contact Information Should Be Visible', () => {
  footer.contactInformation.should('be.visible')
})

Then('The Copyright Information Should Be Visible', () => {
  footer.copyrightInformation.should('be.visible')
})
