@home_unificado
Feature: Store Selection Modal
  As A Website User
  I Want To Select A Store From The "My Store" Modal
  So That I Can View Nearby Stores Or Search By State Or Location, And Learn More About A Specific Store

  Background: Opening The Modal
    Given The User Is On The Home Unificado
    And The User Clicks On The Text My Store In The Navbar
    Then A Modal With The Title "Elige una tienda" Should Open

  Scenario: View Nearby Stores Based On Location
    When I Click On Search Using My Current Location
    Then The Nearest Stores Matching Should Be Listed:
      | Liverpool Ags. Altaria |
      | Villasunción           |

  Scenario: Search Stores Name
    When I Enter "AGUASCALIENTES" In The City Field
    And I Click On The "Search" Button
    Then The Stores Matching Should Be Listed:
      | Liverpool Ags. Altaria                |
      | Liverpool Aguascalientes Villasunción |

  Scenario: Switch To The "State" Tab To Search By State
    When I Click On The State Tab
    Then A Dropdown With The Text "Select Your State" Should Be Displayed

  Scenario: Search Stores By Selected State
    Given I Click On The State Tab
    When I Click On The State Dropdown
    And I Select "AGUASCALIENTES" From The List Of States
    Then The Stores Matching Should Be Listed:
      | Liverpool Ags. Altaria                |
      | Liverpool Aguascalientes Villasunción |

  Scenario: View More Details Of A Specific Store
    Given I Click On The State Tab
    When I Click On The State Dropdown
    And I Select "AGUASCALIENTES" From The List Of States
    And I Click On The View More Button For The Store "Liverpool Ags. Altaria"
    Then The Following Store Details Should Be Displayed:
      | Col. , C.P. 20116           |
      | Aguascalientes              |
      | 4491393400                  |
      | Lun - Dom 11:00 a 21:00 hrs |
    And The Store Details Should Display The Following Services:
      | Agencia de Viajes                     |
      | Centro de Diseño de Interiores        |
      | Centro de Seguros y Servicios         |
      | Experiencia Gourmet                   |
      | Restaurante                           |
      | Ticketmaster                          |
      | Click and Collect - Recoge en tu auto |

  Scenario: Close The Store Selection Modal
    When I Click On The "X" Button At The Top-Right Corner Of The Modal
    Then The Modal Should Close
