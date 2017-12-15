import { fork } from 'redux-saga/effects'

import { authFlow, registrationWatch, loginWatch } from './auth'
import { currencyWatch, fetchBtcWatch, fetchEthWatch } from './currency'

export default function* () {
  yield fork(authFlow)
  yield fork(registrationWatch)
  yield fork(loginWatch)
  yield fork(currencyWatch)
  yield fork(fetchBtcWatch)
  yield fork(fetchEthWatch)
}
