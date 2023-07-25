export default class TooManyRedirects extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TooManyRedirects'
  }
}
