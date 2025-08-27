@home_unificado
Feature: Check Header Elements

  @e2e
  Scenario: Check For Presence Of Elements In The Header
    Given The User Is On The Home Unificado
    Then All Expected Elements Should Be Visible In The Header
    
  @e2e
  Scenario: User Sees And Selects Search Suggestions
    Given The User Is On The Home Unificado
    When User Types "banana" Into The Search Field
    Then The User Should See Suggestions Related To "banana"
    And The User Clicks On The Suggestions
    And The User Is Redirected To The Correct Url
  