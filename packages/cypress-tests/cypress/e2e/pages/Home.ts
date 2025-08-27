class Home {
  navigate(path: string = '') {
    cy.on('uncaught:exception', () => false)

    cy.visit(path, {
      failOnStatusCode: false,
      onBeforeLoad(win) {
        // AGUASCALIENTES geolocation
        const latitude = 21.880991
        const longitude = -102.295461

        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
          cb({ coords: { latitude, longitude } })
        })

        cy.stub(win.navigator.geolocation, 'watchPosition').callsFake((cb) => {
          cb({ coords: { latitude, longitude } })
        })
      },
    })
  }
}

export default Home
