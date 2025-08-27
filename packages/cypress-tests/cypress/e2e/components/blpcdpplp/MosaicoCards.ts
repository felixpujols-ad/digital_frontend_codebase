import { mosaicoCardsTestIds } from '../../../support/constants'
class MosaicoCards {
  mosaicoCardsTestIds: string[]

  constructor() {
    this.mosaicoCardsTestIds = mosaicoCardsTestIds
  }

  get container() {
    return cy.get('[data-testid="bltf1d0bc5f8eae5296-card-image"]')
  }

  get simpleCards() {
    return this.mosaicoCardsTestIds.map((id) => cy.get(`[data-testid="${id}"]`))
  }

  cardById(id: string) {
    return cy.get(`[data-testid="${id}"]`)
  }

  getCategoryCardId() {
    return cy.get('[data-testid="bltf1d0bc5f8eae5296-card"]')
  }

  get promoBanner() {
    return cy.get('[data-testid="undefined-hero-banner-slider"]')
  }

  promoBannerButton(text: string) {
    return cy
      .get('[data-testid="undefined-hero-banner-slider-text-block-cta-containers"]')
      .first()
      .contains('button', text)
  }
}

export default MosaicoCards
