import { handleActions } from 'redux-actions'
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  selectBtc,
  selectEth
} from '../actions/currency'

export default handleActions(
  {
    [fetchBtcRequest]: () => ({ isBtcLoading: false }),
    [fetchEthRequest]: () => ({ isEthLoading: false }),
    [fetchBtcSuccess]: ({ payload }) => ({ isBtcLoading: true, btc: payload }),
    [fetchEthSuccess]: ({ payload }) => ({ isEthLoading: true, eth: payload }),
    [selectBtc]: () => ({ selected: 'btc', error: null }),
    [selectEth]: () => ({ selected: 'eth', error: null })
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
