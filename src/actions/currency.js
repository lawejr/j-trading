import { createActions } from 'redux-actions'

const {
  currency: {
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchEthRequest,
    fetchEthSuccess,
    selectBtc,
    selectEth,
    selectOffset
  }
} = createActions({
  CURRENCY: {
    FETCH_BTC_REQUEST: null,
    FETCH_BTC_SUCCESS: null,
    FETCH_ETH_REQUEST: null,
    FETCH_ETH_SUCCESS: null,
    SELECT_BTC: null,
    SELECT_ETH: null,
    SELECT_OFFSET: null
  }
})

export {
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchEthRequest,
  fetchEthSuccess,
  selectBtc,
  selectEth,
  selectOffset
}
