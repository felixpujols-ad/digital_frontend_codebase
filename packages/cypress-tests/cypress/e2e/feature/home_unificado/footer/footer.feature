@home_unificado
Feature: Footer
  As a website user
  I want the footer links to take me to the correct pages
  So that I can efficiently navigate without encountering errors

  @e2e
  Scenario: Links Redirection
    Given The User Is On The Home Unificado
    Then Each Link Should Redirect To The Corresponding Page

  @e2e
  Scenario: WhatsApp Link Redirection
    Given The User Is On The Home Unificado
    When Check The WhatsApp Link
    Then The Link Should Redirect To The Corresponding WhatsApp Site

  @e2e
  Scenario: Link List Headers Presence
    Given The User Is On The Home Unificado
    Then All Link List Headers Should Be Visible

  @e2e
  Scenario: Contact Information Presence
    Given The User Is On The Home Unificado
    Then The Contact Information Should Be Visible
    
  @e2e
  Scenario: Copyright Information Presence
    Given The User Is On The Home Unificado
    Then The Copyright Information Should Be Visible
