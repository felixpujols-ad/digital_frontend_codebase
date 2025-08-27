import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    env: {
      baseUrls: {
        home_unificado: 'https://ogcp-cms-home-qa1.liverpool.com.mx/homeunificado-0525',
        blpcdpplp: 'https://ogcp-cms-blpclpplp-qa1.liverpool.com.mx/tienda/juguetes/cat1080656',
        blankpage: 'https://*************.com.mx/blankpage',
        checkout: 'https://*************.com.mx//checkout',
      },
      devices: {
        samsungA54: {
          width: 412,
          height: 915,
        },
        iphone11: {
          width: 414,
          height: 896,
        },
        desktop: {
          width: 1920,
          height: 1080,
        },
      },
    },

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      charts: true,
      reportPageTitle: 'Reporte de Pruebas Automatizadas',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      
      // ✅ Línea necesaria para inicializar el reportero
      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config)

      const siteKey = config.env.site || 'home_unificado'
      config.baseUrl = config.env.baseUrls[siteKey]

      // Establece las dimensiónes del viewport en función de la configuración del dispositivo
      const deviceConfig = config.env.devices[config.env.device]
      if (deviceConfig) {
        config.viewportWidth = deviceConfig.width
        config.viewportHeight = deviceConfig.height
      }

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'firefox') {
          launchOptions.preferences['network.proxy.testing_localhost_is_secure_when_hijacked'] = true
        }

        return launchOptions
      })

      return config
    },
    defaultCommandTimeout: 10000,
  },
})

// Esta función estaba en tu archivo original, la mantengo aquí
function installRealEvents(on: Cypress.PluginEvents) {
  throw new Error('Function not implemented.')
}