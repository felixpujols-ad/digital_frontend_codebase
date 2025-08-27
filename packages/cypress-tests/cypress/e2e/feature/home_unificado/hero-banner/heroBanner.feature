@home_unificado
Feature: Homepage Hero Banner Management
  As An Administrator Of The Liverpool Website
  I Want To Manage A Hero Banner On The Homepage
  So That I Can Showcase Featured Images That Align With Current Campaigns Or Promotions To The Users.

  @e2e
  Scenario: Verify Button Redirection
    Given The User Is On The Home Unificado
    When The User Clicks On The Button In The Banner
    Then The User Is Redirected To The Correct Url
