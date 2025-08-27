@home_unificado
Feature: Hero Banner Carousel Management
  As An User Of The Liverpool Website
  I Want To Interact With A Hero Banner Carousel On The Homepage
  So That I Can View Featured Promotions.

  @e2e
  Scenario: Hero Banner Carousel Can Redirect
    Given The User Is On The Home Unificado
    When The User Clicks On The Link In One Of the Hero Banners In A Carousel
    Then The User Is Redirected To The Correct Url

  @e2e
  Scenario: Hero Banner Carousel Can Be Scrolled Through
    Given The User Is On The Home Unificado
    When The User Scrolls On The Hero Banner Carousel
    Then The Next Hero Banner Will Be Visible