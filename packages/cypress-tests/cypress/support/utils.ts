import * as Contentstack from 'contentstack'
import { Region } from 'contentstack'

const baseUrl = Cypress.config('baseUrl')
const currentEnv = baseUrl.includes('qa1') ? 'qa' : 'dev'

const stack = Contentstack.Stack({
  api_key: Cypress.env('STACK_API_KEY'),
  delivery_token: Cypress.env(`${currentEnv.toUpperCase()}_DELIVERY_TOKEN`),
  environment: currentEnv,
  branch: currentEnv === 'dev' ? 'develop' : 'qa',
  region: Region.GCP_NA,
})

/**
 * Función para obtener el UID de una entrada (entry) de un tipo de contenido específico en Contentstack.
 *
 * @param {string} contentType - El tipo de contenido de donde se buscará la entrada.
 * @param {string} entryTitle - El título de la entrada que estamos buscando.
 * @returns {Promise<string | null>} Una promesa que se resuelve con el UID de la entrada si se encuentra,
 *                                   o null si no se encuentra ninguna entrada con el título proporcionado.
 */
export async function getEntryUidByTitle(contentType: string, entryTitle: string): Promise<string | null> {
  Cypress.env('currentEnv', currentEnv)
  return new Promise((resolve, reject) => {
    stack
      .ContentType(contentType)
      .Query()
      .toJSON()
      .find()
      .then(
        (result) => {
          const entries = result[0] || []
          const foundEntry = entries.find((entry: any) => entry.title === entryTitle)
          resolve(foundEntry ? foundEntry.uid : null)
        },
        (error) => {
          reject(error)
        },
      )
  })
}
