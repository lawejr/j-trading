import currency from '../currency'
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  fetchEthSuccess,
  selectOffset
} from '../../actions/currency'

describe('Сurrency reducer', () => {
  describe('action fetchBtcRequest', () => {
    it('изменяет isBtcLoading на true', () => {
      const next = currency({ isBtcLoading: false }, fetchBtcRequest())
      expect(next.isBtcLoading).toBeTruthy()
    })
  })

  describe('action fetchEthRequest', () => {
    it('изменяет isEthLoading на true', () => {
      const next = currency({ isEthLoading: false }, fetchEthRequest())
      expect(next.isEthLoading).toBeTruthy()
    })
  })

  describe('action fetchBtcSuccess', () => {
    const payload = [1, 2, 3]
    it('изменяет isBtcLoading на false', () => {
      const next = currency({ isBtcLoading: true }, fetchBtcSuccess(payload))
      expect(next.isBtcLoading).toBeFalsy()
    })
    it('заполняет данными поле btc', () => {
      const next = currency({ btc: [] }, fetchBtcSuccess(payload))
      expect(next.btc).toEqual(payload)
    })
  })

  describe('action fetchEthSuccess', () => {
    const payload = [1, 2, 3]
    it('изменяет isEthLoading на false', () => {
      const next = currency({ isEthLoading: true }, fetchEthSuccess(payload))
      expect(next.isEthLoading).toBeFalsy()
    })
    it('заполняет данными поле eth', () => {
      const next = currency({ eth: [] }, fetchEthSuccess(payload))
      expect(next.eth).toEqual(payload)
    })
  })

  describe('action fetchBtcFailure', () => {
    it('изменяет isBtcLoading на false', () => {
      const next = currency({ isBtcLoading: true }, fetchBtcFailure())
      expect(next.isBtcLoading).toBeFalsy()
    })
  })
  describe('action fetchEthFailure', () => {
    it('изменяет isEthLoading на false', () => {
      const next = currency({ isEthLoading: true }, fetchEthFailure())
      expect(next.isEthLoading).toBeFalsy()
    })
  })
  describe('action selectOffset', () => {
    const payload = '1d'
    it('изменяет offset переданным значением', () => {
      const next = currency({ offset: '4h' }, selectOffset(payload))
      expect(next.offset).toEqual(payload)
    })
  })
})
