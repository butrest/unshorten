import { getSadness } from './sadness'

export const checkResponse = (response: Response): void => {
  if (response.status >= 400) {
    throw new Error(response.status + ': ' + getSadness())
  }
}
