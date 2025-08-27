class WhatsApp {
  get url() {
    return cy.origin('https://api.whatsapp.com/', () => {
      return cy.url()
    })
  }
}

export default WhatsApp
