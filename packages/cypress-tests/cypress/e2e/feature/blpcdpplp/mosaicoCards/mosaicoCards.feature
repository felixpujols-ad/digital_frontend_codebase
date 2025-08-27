@blpcdpplp
Feature: Componente De Mosaico De Categorias Y Promociones

  Como Un Usuario Del Sitio
  Quiero Interactuar Con Un Mosaico Visual De Categorias Y Promociones
  Para Descubrir Y Navegar A Diferentes Secciones De La Tienda De Manera Intuitiva

  Background:
    Given The User Is On blpcdpplp page
    And The User Should Be On blpcdpplp page

  Scenario: Verificacion De La Estructura Y Contenido Del Mosaico
    Given El Componente De Mosaico Debe Estar Visible
    When El Mosaico Debe Contener Multiples Cards Simples De Categoria
    Then El Mosaico Debe Contener Al Menos Una Card De Tipo Banner Promocional

  Scenario Outline: Funcionalidad de redirección de las Cards simple de categoría
    Given Que la Card de categoría "<categoria>" está configurada para redirigir a "<url>"
    When El usuario hace clic en la Card "<categoria>"
    Then El usuario debe ser redirigido exitosamente a la página "<url>"

    Examples:
      | categoria          | url                         |
      | JUEGO DE COLCHONES | tienda/juegos-de-colchones/ |

  Scenario Outline: Funcionalidad De La Card De Banner Promocional
    Given Que El Banner Promocional De Muebles De Jardin Es Visible
    When El Usuario Hace Clic En El Boton "Conoce más"
    Then Es Redirigido A La Pagina De Categoria "muebles_jardin"

