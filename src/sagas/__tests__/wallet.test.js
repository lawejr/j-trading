import { ByuCurrencyFlow, SellCurrencyFlow, WalletFlow } from '../wallet'
import {
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencySuccess,
  sellCurrencyFailure
} from '../../actions/currency'
import { fetchWalletSuccess, fetchWalletFailure } from '../../actions/wallet'
import { put, call } from 'redux-saga/effects'
import { getWallet, buyCurrency, sellCurrency } from '../../api'

describe('Saga Wallet', () => {
  describe('при buyCurrencyRequest', () => {
    it('вызывает buyCurrency', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = ByuCurrencyFlow(action)
      expect(saga.next().value).toEqual(
        call(buyCurrency, action.payload.currencyName, action.payload.value)
      )
    })
    it('в случае успеха вызывает buyCurrencySuccess()', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = ByuCurrencyFlow(action)
      const result = { btc: 1, eth: 1, usd: 1 }
      saga.next()
      expect(saga.next(result).value).toEqual(put(buyCurrencySuccess(result)))
    })
    it('в случае ошибки вызывает buyCurrencyFailure()', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = ByuCurrencyFlow(action)
      const error = new Error('Error message')
      saga.next()
      expect(saga.throw(error).value).toEqual(put(buyCurrencyFailure(error)))
    })
  })
  describe('при sellCurrencyRequest', () => {
    it('вызывает sellCurrenc', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = SellCurrencyFlow(action)
      expect(saga.next().value).toEqual(
        call(sellCurrency, action.payload.currencyName, action.payload.value)
      )
    })
    it('в случае успеха вызывает sellCurrencySuccess()', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = SellCurrencyFlow(action)
      const result = { btc: 1, eth: 1, usd: 1 }
      saga.next()
      expect(saga.next(result).value).toEqual(put(sellCurrencySuccess(result)))
    })
    it('в случае ошибки вызывает sellCurrencyFailure()', () => {
      const action = { payload: { currencyName: 'eth', value: 1 } }
      const saga = SellCurrencyFlow(action)
      const error = new Error('Error message')
      saga.next()
      expect(saga.throw(error).value).toEqual(put(sellCurrencyFailure(error)))
    })
  })
  describe('при fetchWalletRequest', () => {
    it('вызывает getWallet', () => {
      const saga = WalletFlow()
      expect(saga.next().value).toEqual(call(getWallet))
    })
    it('в случае успеха вызывает fetchWalletSuccess()', () => {
      const saga = WalletFlow()
      const result = { btc: 1, eth: 1, usd: 1 }
      saga.next()
      expect(saga.next(result).value).toEqual(put(fetchWalletSuccess(result)))
    })
    it('в случае ошибки вызывает  fetchWalletFailure()', () => {
      const saga = WalletFlow()
      const error = new Error('Error message')
      saga.next()
      expect(saga.throw(error).value).toEqual(put(fetchWalletFailure(error)))
    })
  })
})
