import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import Banner from '../../../components/home_unificado/Banner'
import BannerCarousel from 'cypress/e2e/components/home_unificado/BannerCarousel'

const banner = new Banner()
const bannerCarousel = new BannerCarousel()

When('The User Clicks On The Banner', () => {
  banner.select(0)
})

Given('An Image Is Displayed On The Page', () => {
  banner.image.should('be.visible')
})

Then('The Aspect Ratio Of The Image Should Be Close To 16:9', () => {
  banner.aspecRatio.should('be.closeTo', 16 / 9, 0.1)
})

When('The User Clicks On A Banner From The Carousel', () => {
  bannerCarousel.select(0)
})

When('The User Scrolls On The Banner Carousel', () => {
  bannerCarousel.next()
})

Then('The Next Banner Will Be Visible', () => {
  bannerCarousel.getSlide(1).should('be.visible')
})
