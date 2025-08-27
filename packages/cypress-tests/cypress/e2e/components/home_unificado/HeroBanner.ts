import { aspecRatio } from '../../steps/common/ratioBanner'

class HeroBanner {
  private get bannerCarouselUid() {
    return Cypress.env('QA - Carousel Banner')
  }

  private imageSelector = 'img[alt="hero-banner.png"]'

  get image() {
    return cy.get(this.imageSelector)
  }

  get aspecRatio() {
    return aspecRatio(this.imageSelector)
  }

  selectButton() {
    cy.get(`[data-testid="${this.bannerCarouselUid}-banner-slider-image"]`)
      .first()
      .should('be.visible')
      .click({ force: true })
  }
}

export default HeroBanner
