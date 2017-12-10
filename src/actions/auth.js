import createActions from 'redux-actions/es/createActions'

export const {
  auth: {
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    logout
  }
} = createActions({
  AUTH: {
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,
    REGISTRATION_REQUEST: null,
    REGISTRATION_SUCCESS: null,
    REGISTRATION_FAILURE: null,
    logout: null
  }
})
