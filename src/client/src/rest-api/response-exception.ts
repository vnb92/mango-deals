export class ResponseException extends Error {
  public constructor (message = '') {
    super(message)
  }
}

export class ResponseInvalidTypeException extends ResponseException {
  public constructor (message = '') {
    super(`Invalid type of response${message ? `:${message}` : ''}`)
  }
}
