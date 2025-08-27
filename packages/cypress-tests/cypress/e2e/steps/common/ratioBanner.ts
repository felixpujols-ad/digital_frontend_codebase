function aspecRatio(selector) {
    return cy.get(selector).then(($el) => {
      const width = $el.width()
      const height = $el.height()
      return width / height
    })
  }
export {aspecRatio}