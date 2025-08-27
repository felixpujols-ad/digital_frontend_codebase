@home_unificado
Feature: Megamenu
  As An User Of The Liverpool Website
  I Want To Interact With Megamenu On The Homepage
  So That I Can View All The Product Categories

  @e2e
  Scenario: Subcategories Presence
    Given The User Is On The Home Unificado
    When The User Opens The Megamenu
    Then Each Category Has Their Subcategories
