class ProductList {
  private productSlider = '[data-testid="blt08981d6322567158-products-slider"]'
  swipeLeft() {
    if (Cypress.env('isMobile')) {
      cy.wait(600)
      cy.get(this.productSlider).find('div.swiper-wrapper').realSwipe('toLeft', {
        length: 100,
        step: 10,
        touchPosition: 'center',
        touchMoveDelay: 100,
      })
    } else {
      cy.get('[data-testid="blt08981d6322567158-products-slider-carousel-button-prev-icon-left"]').click()
    }
  }

  swipeRight() {
    if (Cypress.env('isMobile')) {
      cy.wait(600)
      cy.get(this.productSlider).find('div.swiper-wrapper').realSwipe('toRight', {
        length: 100,
        step: 10,
        touchPosition: 'center',
        touchMoveDelay: 100,
      })
    } else {
      cy.get('[data-testid="blt08981d6322567158-products-slider-carousel-button-next-icon-right"]').click()
    }
  }

  getSlide(index: number) {
    return cy.get(`div${this.productSlider} div[data-swiper-slide-index="${index}"]`)
  }

  selectAnyProduct() {
    cy.get(this.productSlider)
      .find('div.swiper')
      .each(($product) => {
        cy.wrap($product).click()
      })
  }

  selectAtLink() {
    cy.get('[data-testid="products-slider-cta"]').click()
  }
}
export default ProductList
