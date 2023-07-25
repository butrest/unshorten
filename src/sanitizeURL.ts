export const sanitizeURL = (url: string | URL): URL => {
  if (url instanceof URL) return url
  if (url.startsWith('http://') || url.startsWith('https://')) return new URL(url)

  return new URL('https://' + url)
}
