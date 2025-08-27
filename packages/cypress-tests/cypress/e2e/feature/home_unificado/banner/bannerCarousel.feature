@home_unificado
Feature: Banner Carousel
  As An Administrator Of The Liverpool Website
  I Want To Manage A Carousel of Banners On The Homepage
  So That I Can Showcase Featured Images That Align With Current Campaigns Or Promotions To The Users.

  @e2e
  Scenario: Banner Carousel Can Redirect
    Given The User Is On The Home Unificado
    When The User Clicks On A Banner From The Carousel
    Then The User Is Redirected To The Correct Url

  @e2e
  Scenario: Banner Carousel Can Be Scrolled Through
    Given The User Is On The Home Unificado
    When The User Scrolls On The Banner Carousel
    Then The Next Banner Will Be Visible