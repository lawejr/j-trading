import { takeLatest, take, put, call, select } from 'redux-saga/effects'
import { setTokenApi, clearTokenApi, registration, login } from '../api'
import { getIsAuthorized } from '../reducers/auth'
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage'
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logout
} from '../actions/auth'

export function* authFlow () {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized)
    const localStorageToken = yield call(getTokenFromLocalStorage)
    let token

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken
        yield put(loginSuccess())
      } else {
        const action = yield take(loginSuccess)
        token = action.payload
      }
    }

    yield call(setTokenApi, token)
    yield call(setTokenToLocalStorage, token)
    yield take(logout)
    yield call(removeTokenFromLocalStorage)
    yield call(clearTokenApi)
  }
}

export function* registrationSaga (action) {
  try {
    let response = yield call(registration, action.payload)

    yield put(registrationSuccess())
    yield put(loginSuccess(response.data.jwt))
  } catch (error) {
    yield put(registrationFailure(error))
  }
}

export function* loginSaga (action) {
  try {
    let response = yield call(login, action.payload)

    yield put(loginSuccess(response.data.jwt))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export function* registrationWatch () {
  yield takeLatest([registrationRequest], registrationSaga)
}

export function* loginWatch () {
  yield takeLatest([loginRequest], loginSaga)
}
