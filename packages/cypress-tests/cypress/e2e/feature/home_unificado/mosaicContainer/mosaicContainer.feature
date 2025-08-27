@home_unificado
 Feature: Mosaic Cards for Quick Access
 As a Liverpool website visitor
 I want to interact with Mosaic Cards that quickly direct me to relevant sections or promotions
 So that I can easily access areas of interest.

@e2e
  Scenario: User Can See More Than 1 Card
    Given The User Is On The Home Unificado
    When The User Scroll Down To The Mosaico Card Section
     Then The User Should See More Than 1 Card
     And Each Card Should Include An Image
    And Each Card Should Include A Title
        