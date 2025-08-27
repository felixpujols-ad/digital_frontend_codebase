import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import HeroBanner from 'cypress/e2e/components/home_unificado/HeroBanner'
import HeroBannerCarousel from 'cypress/e2e/components/home_unificado/HeroBannerCarousel'

const hero = new HeroBanner()
const carousel = new HeroBannerCarousel()

When('The User Clicks On The Button In The Banner', () => {
  hero.selectButton()
})

Given('The Hero Banner Image Is Visible', () => {
  hero.image.should('be.visible')
})

When('The User Clicks On The Link In One Of the Hero Banners In A Carousel', () => {
  carousel.selectActiveSlideLink()
})

When('The User Scrolls On The Hero Banner Carousel', () => {
  carousel.next()
})

Then('The Next Hero Banner Will Be Visible', () => {
  carousel.getSlide(1).should('be.visible')
})
