class Banner {
  private get entryId() {
    return Cypress.env('QA - Banner Slider 1')
  }

  private imageSelector = 'img[alt="liverpool-banner-tablet.png"]'

  get image() {
    return cy.get(this.imageSelector)
  }

  get aspecRatio() {
    return cy.get(this.imageSelector).then(($el) => {
      const width = $el.width()
      const height = $el.height()
      return width / height
    })
  }

  select(index: number) {
    cy.get(`[data-testid="${this.entryId}-banner-slider"] div[data-swiper-slide-index="${index}"]`).click()
  }
}

export default Banner
