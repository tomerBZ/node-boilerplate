export default class errorHandling {
  constructor () {
    this.error = Error
  }

  setError (error) {
    this.error = error
    return this
  }

  getError () {
    return this.error
  }

  getErrorNumber () {
    return this.error.errno
  }

  getErrorCode () {
    return this.error.code
  }

  getSQL () {
    return this.error.sql
  }

  getErrorObject () {
    return JSON.stringify({
      'code': this.getErrorCode(),
      'number': this.getErrorNumber(),
      'sql': this.getSQL(),
    })
  }
}