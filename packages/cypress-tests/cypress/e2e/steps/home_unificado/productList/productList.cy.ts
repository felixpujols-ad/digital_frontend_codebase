import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ProductList from '../../../components/home_unificado/ProductList'
import Home from '../../../pages/Home'
import Store from '../../../pages/Store'

const home = new Home()
const productList = new ProductList()

When('The User Scrolls On The ProductList Carousel To The Right', () => {
  productList.swipeRight()
})

Then('The Next ProductList Will Be Visible', () => {
  if (Cypress.env('isMobile')) {
    productList.getSlide(14).should('be.visible')
  } else {
    productList.getSlide(5).should('be.visible')
  }
})

When('The User Scrolls On The ProductList Carousel To The Left', () => {
  productList.swipeLeft()
})

Then('The Previous ProductList Will Be Visible', () => {
  if (Cypress.env('isMobile')) {
    productList.getSlide(2).should('be.visible')
  } else {
    productList.getSlide(0).should('be.visible')
  }
})

When('The User Clicks On The Link In One Of the ProductLists In A Carousel', () => {
  productList.selectAnyProduct()
})

When('The User Clicks On The "See More" Button', () => {
  productList.selectAtLink()
})
