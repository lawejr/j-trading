import { handleActions } from 'redux-actions'
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  selectCurrency,
  selectOffset
} from '../actions/currency'

export default handleActions(
  {
    [fetchBtcRequest]: state => ({ ...state, isBtcLoading: true }),
    [fetchEthRequest]: state => ({ ...state, isEthLoading: true }),
    [fetchBtcSuccess]: (state, { payload }) => ({
      ...state,
      isBtcLoading: false,
      btc: payload
    }),
    [fetchEthSuccess]: (state, { payload }) => ({
      ...state,
      isEthLoading: false,
      eth: payload
    }),
    [fetchBtcFailure]: (state, { payload }) => ({
      ...state,
      isBtcLoading: false
    }),
    [fetchEthFailure]: (state, { payload }) => ({
      ...state,
      isEthLoading: false
    }),
    [selectCurrency]: (state, { payload }) => ({
      ...state,
      selected: payload,
      error: null
    }),
    [selectOffset]: (state, { payload }) => ({ ...state, offset: payload })
  },
  {
    selected: 'btc',
    offset: '2h',
    btc: [],
    eth: [],
    isBtcLoading: false,
    isEthLoading: false
  }
)

export const getSelectedCurrency = state => state.currency.selected
export const getOffset = state => state.currency.offset
export const getBtc = state => state.currency.btc
export const getEth = state => state.currency.eth
export const getIsloading = state =>
  state.currency.isBtcLoading || state.currency.isEthLoading
