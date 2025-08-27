class MosaicContainer {
  get mosaico() {
    return cy.get('[data-testid="or-card-mosaic-test-id"]')
  }

  get cards() {
    return cy.get('a[data-testid*="-card-mosaic"]')
  }
}

export default MosaicContainer
