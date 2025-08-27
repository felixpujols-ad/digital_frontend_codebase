class Store {
  get url() {
    return cy.origin('https://www.liverpool.com.mx', () => {
      return cy.url()
    })
  }
}

export default Store
