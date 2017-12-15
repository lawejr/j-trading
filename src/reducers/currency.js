import { handleActions } from 'redux-actions'
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  selectCurrency,
  selectOffset
} from '../actions/currency'

export default handleActions(
  {
    [fetchBtcRequest]: state => ({ ...state, isBtcLoading: false }),
    [fetchEthRequest]: state => ({ ...state, isEthLoading: false }),
    [fetchBtcSuccess]: (state, { payload }) => ({
      ...state,
      isBtcLoading: true,
      btc: payload
    }),
    [fetchEthSuccess]: (state, { payload }) => ({
      ...state,
      isEthLoading: true,
      eth: payload
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
