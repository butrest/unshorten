import { StatusCodes } from 'http-status-codes'
import { getSadness } from './sadness'

export const errorResponse = (
  { requestedURL, errorMessage, status, resolvedURL }:
    { requestedURL?: URL, errorMessage?: string, status?: StatusCodes, resolvedURL?: URL },
): Response =>
  Response.json({
    info: 'Visit https://but.rest for magic information.',
    requested_url: requestedURL?.toString() || '',
    resolved_url: resolvedURL?.toString() || '',
    success: false,
    error: errorMessage || getSadness(),
    status: status || StatusCodes.EXPECTATION_FAILED,
  }, { status: status || StatusCodes.EXPECTATION_FAILED })
