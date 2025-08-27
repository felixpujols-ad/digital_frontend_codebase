@home_unificado
Feature: Home Page Accessibility Tests
  As An User of the Liverpool Website
  I Want To Ensure No Accessibility Issues Are Present

  @e2e
  Scenario: Checks Home Page
    Given The User Is On The Home Unificado
    Then There Are No A11y Violations