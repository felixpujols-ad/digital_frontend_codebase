@home_unificado
Feature: ProductList Carousel Management
  As An User Of The Liverpool Website
  I Want To Interact With A ProductList Carousel On The Homepage
  So That I Can View Featured Promotions.

  Background: Homepage Navigation
    Given The User Is On The Home Unificado

  @e2e
  Scenario: ProductList Carousel Can Redirect
    Given The User Is On The Home Unificado
    When The User Clicks On The Link In One Of the ProductLists In A Carousel

  @e2e 
  Scenario: ProductList Carousel Can Be Scrolled To The Right 
    When The User Scrolls On The ProductList Carousel To The Right
    Then The Next ProductList Will Be Visible

  @e2e 
  Scenario: ProductList Carousel Can Be Scrolled To The Left
    When The User Scrolls On The ProductList Carousel To The Left
    Then The Previous ProductList Will Be Visible

  @e2e
  Scenario: Verify Redirection Of The "See More" Button
    When The User Clicks On The "See More" Button