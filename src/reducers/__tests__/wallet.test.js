import wallet from '../wallet'
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure
} from '../../actions/wallet'
import {
  buyCurrencySuccess,
  sellCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyFailure
} from '../../actions/currency'

describe('Wallet reducer', () => {
  describe('action fetchWalletRequest', () => {
    it('изменяет isLoading на true', () => {
      const next = wallet({ isLoading: false }, fetchWalletRequest())
      expect(next.isLoading).toBeTruthy()
    })
    it('очищает error', () => {
      const next = wallet({ error: 'error!!' }, fetchWalletRequest())
      expect(next.error).toBeNull()
    })
  })
  describe('action fetchWalletSuccess', () => {
    const payload = {
      data: {
        result: {
          btc: 12,
          eth: 0.5,
          usd: 10000
        }
      }
    }
    it('изменяет isLoading на false', () => {
      const next = wallet({ isLoading: true }, fetchWalletSuccess(payload))
      expect(next.isLoading).toBeFalsy()
    })
    it('очищает error', () => {
      const next = wallet({ error: 'error!' }, fetchWalletSuccess(payload))
      expect(next.error).toBeNull()
    })
    it('заполняет данными coins.btc', () => {
      const next = wallet({ coins: { btc: 0 } }, fetchWalletSuccess(payload))
      expect(next.coins.btc).toEqual(payload.data.result.btc)
    })
    it('заполняет данными coins.eth', () => {
      const next = wallet({ coins: { eth: 0 } }, fetchWalletSuccess(payload))
      expect(next.coins.eth).toEqual(payload.data.result.eth)
    })
    it('заполняет данными coins.usd', () => {
      const next = wallet({ coins: { usd: 0 } }, fetchWalletSuccess(payload))
      expect(next.coins.usd).toEqual(payload.data.result.usd)
    })
  })
  describe('action fetchWalletFailure', () => {
    const payload = new Error('warn')
    it('изменяет isLoading на false', () => {
      const next = wallet({ isLoading: true }, fetchWalletFailure(payload))
      expect(next.isLoading).toBeFalsy()
    })
    it('заполняет данными error', () => {
      const next = wallet({ error: null }, fetchWalletFailure(payload))
      expect(next.error).toEqual(payload)
    })
  })
  describe('action buyCurrencySuccess', () => {
    const payload = {
      data: {
        btc: 12,
        eth: 0.5,
        usd: 10000
      }
    }
    it('заполняет данными coins.btc', () => {
      const next = wallet({ coins: { btc: 0 } }, buyCurrencySuccess(payload))
      expect(next.coins.btc).toEqual(payload.data.btc)
    })
    it('заполняет данными coins.eth', () => {
      const next = wallet({ coins: { eth: 0 } }, buyCurrencySuccess(payload))
      expect(next.coins.eth).toEqual(payload.data.eth)
    })
    it('заполняет данными coins.usd', () => {
      const next = wallet({ coins: { usd: 0 } }, buyCurrencySuccess(payload))
      expect(next.coins.usd).toEqual(payload.data.usd)
    })
  })
  describe('action buyCurrencyFailure', () => {
    const payload = new Error('warn')
    it('заполняет данными error', () => {
      const next = wallet({ error: null }, buyCurrencyFailure(payload))
      expect(next.error).toEqual(payload)
    })
  })
  describe('action sellCurrencySuccess', () => {
    const payload = {
      data: {
        btc: 12,
        eth: 0.5,
        usd: 10000
      }
    }
    it('заполняет данными coins.btc', () => {
      const next = wallet({ coins: { btc: 0 } }, sellCurrencySuccess(payload))
      expect(next.coins.btc).toEqual(payload.data.btc)
    })
    it('заполняет данными coins.eth', () => {
      const next = wallet({ coins: { eth: 0 } }, sellCurrencySuccess(payload))
      expect(next.coins.eth).toEqual(payload.data.eth)
    })
    it('заполняет данными coins.usd', () => {
      const next = wallet({ coins: { usd: 0 } }, sellCurrencySuccess(payload))
      expect(next.coins.usd).toEqual(payload.data.usd)
    })
  })
  describe('action sellCurrencyFailure', () => {
    const payload = new Error('warn')
    it('заполняет данными error', () => {
      const next = wallet({ error: null }, sellCurrencyFailure(payload))
      expect(next.error).toEqual(payload)
    })
  })
})
