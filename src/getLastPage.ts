import { checkResponse } from './checkResponse'
import TooManyRedirects from './errors/tooManyRedirects'

export const getLastPage = async (url: string | URL, max_redirects: number = 4): Promise<URL> => {
  // make initial request
  let redirections = 1
  let response = await fetch(url, { redirect: 'follow' })

  checkResponse(response)

  while (response.redirected) {
    if (++redirections > max_redirects) {
      throw new TooManyRedirects('More than ' + max_redirects + ' redirects, giving up.')
    }
    response = await fetch(response.url, { redirect: 'follow' })
  }

  return new URL(response.url)
}

