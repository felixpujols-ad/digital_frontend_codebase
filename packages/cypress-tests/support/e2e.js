// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'
import 'cypress-real-events'
import { getEntryUidByTitle } from '../support/utils'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Update the test title dynamically to include the device name
beforeEach(function () {
  const device = Cypress.env('device')

  this.currentTest.title = `${this.currentTest.title} [${device}] [${Cypress.env('currentEnv')}]`

  // Set 'isMobile' based on the device type
  const isMobile = device !== 'desktop'
  Cypress.env('isMobile', isMobile)
})

const entries = [
  { contentType: 'band', entryTitle: 'QA - Band' },
  { contentType: 'banner_slider', entryTitle: 'QA - Banner Slider 1' },
  { contentType: 'banner_slider', entryTitle: 'QA - Carousel Banner' },
  { contentType: 'header', entryTitle: 'Header Test' },
  { contentType: 'footer', entryTitle: 'Footer Test' },
  { contentType: 'hero_banner_slider', entryTitle: 'QA - Carousel Hero Banner' },
  { contentType: 'container', entryTitle: 'QA - Container Categories' },
]

before(async () => {
  for (const entry of entries) {
    try {
      const uid = await getEntryUidByTitle(entry.contentType, entry.entryTitle)
      Cypress.env(entry.entryTitle, uid)

      console.log(`UID for ${entry.entryTitle}:`, uid)
    } catch (error) {
      console.error(`Error fetching UID for ${entry.entryTitle}:`, error)
    }
  }
})
