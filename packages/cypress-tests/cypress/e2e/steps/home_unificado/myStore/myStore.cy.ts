import { When, Then, Given, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import MyStore from 'cypress/e2e/components/home_unificado/myStore'

const myStore = new MyStore()

Given('The User Clicks On The Text My Store In The Navbar', () => {
  myStore.modalTrigger.should('be.visible')
  cy.wait(1500) // Needed as the header it's double loading
  myStore.modalTrigger.click()
})

Then('A Modal With The Title {string} Should Open', (title: string) => {
  myStore.modal.contains(title).should('be.visible')
})

When('I Click On Search Using My Current Location', () => {
  // Avoiding firefox as the geolocation api it's not currently supported
  if (Cypress.browser.name !== 'firefox') {
    myStore.filterByLocation()
  }
})

When('I Enter {string} In The City Field', (text: string) => {
  myStore.cityInput.type(text, { force: true })
})

When('I Click On The {string} Button', (buttonText) => {
  myStore.clickSearchButton()
})

Then('The Nearest Stores Matching Should Be Listed:', (dataTable: DataTable) => {
  // Avoiding firefox as the geolocation api it's not currently supported
  if (Cypress.browser.name !== 'firefox') {
    const expectedStores = dataTable.raw().flat()
    myStore.validateStores(expectedStores)
  }
})

Then('The Stores Matching Should Be Listed:', (dataTable: DataTable) => {
  const expectedStores = dataTable.raw().flat()
  myStore.validateStores(expectedStores)
})

When('I Click On The State Tab', () => {
  myStore.clickSTateTab()
})

Then('A Dropdown With The Text {string} Should Be Displayed', (dropdownText) => {
  myStore.validateStateDropdown()
})

When('I Click On The State Dropdown', (dropdownLabel) => {
  myStore.clickStateDropdown()
})

When('I Select {string} From The List Of States', (stateName: string) => {
  myStore.clickDropdownOption(stateName)
})

When('I Click On The View More Button For The Store {string}', (storeName: string) => {
  myStore.viewMore(storeName)
})

Then('The Following Store Details Should Be Displayed:', (dataTable: DataTable) => {
  dataTable
    .raw()
    .flat()
    .forEach((storeDetail) => {
      myStore.validateStoreData(storeDetail)
    })
})

Then('The Store Details Should Display The Following Services:', (dataTable: DataTable) => {
  dataTable
    .raw()
    .flat()
    .forEach((service) => {
      myStore.validateStoreData(service)
    })
})

When('I Click On The {string} Button At The Top-Right Corner Of The Modal', (buttonText) => {
  myStore.closeModal()
})

Then('The Modal Should Close', () => {
  myStore.modal.should('not.exist')
})
