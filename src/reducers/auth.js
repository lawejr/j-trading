import handleActions from 'redux-actions/es/handleActions'
import { loginSuccess, registrationSuccess, logout } from '../actions/auth'

export default handleActions(
  {
    [loginSuccess]: () => ({ isAuthorized: true }),
    [registrationSuccess]: () => ({ isAuthorized: true }),
    [logout]: () => ({ isAuthorized: false })
  },
  { isAuthorized: false }
)

export const getIsAuthorized = state => state.auth.isAuthorized
