import { handleActions } from 'redux-actions'
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  selectBtc,
  selectEth,
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
    [selectBtc]: state => ({ ...state, selected: 'btc', error: null }),
    [selectEth]: state => ({ ...state, selected: 'eth', error: null }),
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
