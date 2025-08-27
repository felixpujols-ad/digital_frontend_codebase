@home_unificado
Feature: Sidemenu
  As An User Of The Liverpool Website
  I Want To Interact With Sidemenu On The Homepage
  So That I Can View All The Menu

  @e2e
  Scenario: Links Presence
    Given The User Is On The Home Unificado
    When The User Opens The Sidemenu
    Then All Expected Elements Should Be Visible In The Sidemenu

  @e2e
  Scenario: Categories Presence
    Given The User Is On The Home Unificado
    When The User Opens The Sidemenu
    And Opens The Categories Submenu
    Then All Sidemenu Categories Are Visible
  