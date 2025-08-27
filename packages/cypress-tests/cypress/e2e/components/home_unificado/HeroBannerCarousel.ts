class HeroBannerCarousel {
  private get entryId() {
    return Cypress.env('QA - Carousel Hero Banner')
  }

  selectActiveSlideLink() {
    cy.get(`.swiper-slide-active [data-testid="${this.entryId}-hero-banner-slider-text-block-link-0"]`).click()
  }

  next() {
    if (Cypress.env('isMobile')) {
      // Needed so the carousel controllers finish loading up
      cy.wait(600)
      cy.get(`[data-testid="${this.entryId}-hero-banner-slider-bullets-1"]`).click()
    } else {
      cy.get(`[data-testid="${this.entryId}-hero-banner-slider-carousel-button-next"]`).click()
    }
  }

  getSlide(index: number) {
    return cy.get(`[data-testid="${this.entryId}-hero-banner-slider-image"]`).eq(index)
  }
}

export default HeroBannerCarousel
