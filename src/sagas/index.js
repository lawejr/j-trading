import { fork } from 'redux-saga/effects'
import { authFlow, registrationWatch, loginWatch } from './auth'

export default function* () {
  yield fork(authFlow)
  yield fork(registrationWatch)
  yield fork(loginWatch)
}
