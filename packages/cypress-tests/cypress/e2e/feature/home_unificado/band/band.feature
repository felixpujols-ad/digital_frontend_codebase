@home_unificado
Feature: Home Band
  As An Administrator of the Liverpool Website
  I Want To Manage A Band of Slides On The Home Page
  So That I Can Showcase Messages With or Without Links

  @e2e
  Scenario: Band Can Be Scrolled Through
    Given The User Is On The Home Unificado
    When The User Selects The Next Arrow
    Then The Next Slide Will Be Visible

  @e2e
  Scenario: Band Slide Can Redirect
    Given The User Is On The Home Unificado
    When The User Selects The Slide
    Then The User Can Be Redirected