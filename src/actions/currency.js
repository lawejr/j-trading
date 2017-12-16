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
    selectOffset,
    buyCurrencyRequest,
    sellCurrencyRequest,
    buyCurrencySuccess,
    sellCurrencySuccess,
    buyCurrencyFailure,
    sellCurrencyFailure
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
    SELECT_OFFSET: null,
    BUY_CURRENCY_REQUEST: null,
    SELL_CURRENCY_REQUEST: null,
    BUY_CURRENCY_SUCCESS: null,
    SELL_CURRENCY_SUCCESS: null,
    BUY_CURRENCY_FAILURE: null,
    SELL_CURRENCY_FAILURE: null
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
  selectOffset,
  buyCurrencyRequest,
  sellCurrencyRequest,
  buyCurrencySuccess,
  sellCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyFailure
}
