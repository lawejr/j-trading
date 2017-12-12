import auth from '../auth'
import { registrationSuccess, loginSuccess, logout } from '../../actions/auth'

describe('Reducer auth', () => {
  describe('registration', () => {
    it('экшен registrationSuccess изменяет флаг isAuthorized на true', () => {
      const next = auth({ isAuthorized: false }, registrationSuccess())

      expect(next.isAuthorized).toBeTruthy()
    })
  })

  describe('login', () => {
    it('экшен loginSuccess изменяет флаг isAuthorized на true', () => {
      const next = auth({ isAuthorized: false }, loginSuccess())

      expect(next.isAuthorized).toBeTruthy()
    })
  })

  describe('logout', () => {
    it('экшен logout изменяет флаг isAuthorized на false', () => {
      const next = auth({ isAuthorized: true }, logout())

      expect(next.isAuthorized).toBeFalsy()
    })
  })
})
