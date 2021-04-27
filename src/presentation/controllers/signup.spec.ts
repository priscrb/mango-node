import { SignUpController } from './signup'

/**
 * if user dont send a name, it'll return 400
 * quando chamar um handle, com um http request sem o name, o que a gente espera... = httpResponse
 */
describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    // sut = system under test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any_name', - remove the name
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)

    /**
     * o body eh um objeto e o Error tbm eh um objeto e estamos comparando os dois
     * nesse caso nao podemos usar o toBe, pq ele tbm compara o ponteiro dos objetos
     * ai nesse caso teriam q ser objetos identicos. Nos queremos comparar apenas os valores
     * dos objetos, por isso usamos o toEqual
     */
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})

/**
 * if user dont send an email, it'll return 400
 */
describe('SignUp Controller', () => {
  test('should return 400 if no email is provided', () => {
    // sut = system under test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        // email: 'any_email@mail.com', -- no email
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
