import { handleActions } from 'redux-actions'
import {
  loginSuccess,
  loginFailure,
  registrationSuccess,
  registrationFailure,
  logout
} from '../actions/auth'

export default handleActions(
  {
    [loginSuccess]: () => ({ isAuthorized: true, error: null }),
    [loginFailure]: (state, { payload: { data: { message } } }) => ({
      isAuthorized: false,
      error: message
    }),
    [registrationSuccess]: () => ({ isAuthorized: true, error: null }),
    [registrationFailure]: (state, { payload: { data: { message } } }) => ({
      isAuthorized: false,
      error: message
    }),
    [logout]: () => ({ isAuthorized: false, error: null })
  },
  {
    isAuthorized: false,
    error: null
  }
)

export const getIsAuthorized = state => state.auth.isAuthorized
export const getAuthError = state => state.auth.error
