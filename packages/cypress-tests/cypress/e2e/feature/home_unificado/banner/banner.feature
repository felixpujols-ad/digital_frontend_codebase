@home_unificado
Feature: Homepage Banner Management
 As An Administrator Of The Liverpool Website
 I Want To Manage A Unique Banner On The Homepage
 So That I Can Showcase Featured Images That Align With Current Campaigns Or Promotions To The Users.
 
 Background:
    Given The User Is On The Home Unificado

@e2e
  Scenario: Verify Banner Redirection
    When The User Clicks On The Banner
    Then The User Is Redirected To The Correct Url

@e2e
  Scenario: Verify Image Aspect Ratio
    And An Image Is Displayed On The Page
    Then The Aspect Ratio Of The Image Should Be Close To 16:9
