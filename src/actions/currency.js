import { createActions } from 'redux-actions'

const {
  currency: {
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthRequest,
    fetchEthSuccess,
    fetchEthFailure,
    selectCurrency,
    selectOffset
  }
} = createActions({
  CURRENCY: {
    FETCH_BTC_REQUEST: null,
    FETCH_BTC_SUCCESS: null,
    FETCH_BTC_FAILURE: null,
    FETCH_ETH_REQUEST: null,
    FETCH_ETH_SUCCESS: null,
    FETCH_ETH_FAILURE: null,
    SELECT_CURRENCY: null,
    SELECT_OFFSET: null
  }
})

export {
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthRequest,
  fetchEthSuccess,
  fetchEthFailure,
  selectCurrency,
  selectOffset
}
