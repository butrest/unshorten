import { sanitizeURL } from './sanitizeURL'
import { getLastPage } from './getLastPage'
import { errorResponse } from './errorResponse'
import { StatusCodes } from 'http-status-codes'
import { getSadness } from './sadness'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const localURL = new URL(request.url)
    const pathAndMore: string = localURL.pathname.substring(1) + localURL.search + localURL.hash
    let requestedURL: URL

    try {
      requestedURL = sanitizeURL(pathAndMore)
    } catch (error: any) {
      return errorResponse({})
    }

    try {
      const finalRedirectPage: URL = await getLastPage(requestedURL)

      return Response.json({
        requested_url: requestedURL,
        success: true,
        resolved_url: finalRedirectPage.toString(),
      })
    } catch (error: any) {
      return errorResponse({
        requestedURL,
        errorMessage: getSadness(),
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      })
    }
  },
}
