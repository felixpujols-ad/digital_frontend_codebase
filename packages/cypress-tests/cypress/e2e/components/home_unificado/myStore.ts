class MyStore {
  private storeSelector = '[data-testid="store-name"]'
  private stateDropdownSelector = '[data-testid="show-states-list-btn"]'
  private modalSelector = '[data-testid="or-store-selector-test-id"]'

  get modalTrigger() {
    return cy.get('[data-testid="blt26617d4f2e17657d-header-top-app-buttons-store-button"]')
  }

  get modal() {
    return cy.get(this.modalSelector)
  }

  get cityInput() {
    return cy.get('[data-testid="search-termn-input"]')
  }

  clickSearchButton() {
    cy.get('[data-testid="trigger-search-button"]').click()
  }

  filterByLocation() {
    cy.get('[data-testid="search-by-my-location-btn"]')
      .click()
      .then(() => {})
  }

  validateStores(stores) {
    stores.map((store) => {
      cy.contains(this.storeSelector, store).scrollIntoView().should('be.visible')
    })
  }

  clickSTateTab() {
    cy.get('[data-testid="MlTabs-test-id-tab-1"]').click()
  }

  validateStateDropdown() {
    cy.get(this.stateDropdownSelector).should('be.visible')
  }

  clickStateDropdown() {
    cy.get(this.stateDropdownSelector).click()
  }

  clickDropdownOption(stateName: string) {
    cy.get(this.modalSelector).contains('li', stateName).click()
  }

  viewMore(storeName: string) {
    cy.contains(this.storeSelector, storeName)
      .parent()
      .within(() => {
        cy.get('[data-testid="store-86-details-link"]').click()
      })
  }

  validateStoreData(storeDetail: string) {
    cy.get('[data-testid="or-store-selector-test-id-store-details"]')
      .contains(storeDetail)
      .scrollIntoView()
      .should('be.visible')
  }

  closeModal() {
    cy.get('[data-testid="close-icon"]').click()
  }
}

export default MyStore
