class BannerCarousel {
  private get entryId() {
    return Cypress.env('QA - Carousel Banner')
  }

  private get carousel() {
    return cy.get(`[data-testid="${this.entryId}-banner-slider-image"]`)
  }

  select(index: number) {
    this.carousel.eq(index).click()
  }

  next() {
    if (Cypress.env('isMobile')) {
      // Needed so the carousel controllers finish loading up
      cy.wait(600)
      cy.get(`[data-testid="${this.entryId}-banner-slider-bullets-1"]`).click()
    } else {
      cy.get(`[data-testid="${this.entryId}-banner-slider-carousel-button-next"]`).click()
    }
  }

  getSlide(index: number) {
    return this.carousel.eq(index)
  }
}

export default BannerCarousel
