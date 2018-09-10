import { SHOW_CRYPTOS, LOADING_CRYPTOS, SHOW_MODAL, HIDE_MODAL } from './types'

export const renderCryptos = cryptocurrencies => {
  return {
    type: SHOW_CRYPTOS,
    cryptocurrencies
  }
}

export const cryptosAreLoading = loading => {
  return {
    type: LOADING_CRYPTOS,
    loading
  }
}

export const showCryptoModal = payload => {
  return {
    type: SHOW_MODAL,
    payload
  }
}

export const hideCryptoModal = () => {
  return {
    type: HIDE_MODAL
  }
}
