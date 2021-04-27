export class MissingParamError extends Error {
  constructor (paramName: string) {
    /**
     * classes que herdam de Error precisam sempre chamar o super
    */

    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
