export class InvalidParamError extends Error {
  constructor (paramName: string) {
    /**
     * classes que herdam de Error precisam sempre chamar o super
    */

    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
