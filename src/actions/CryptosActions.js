import { SHOW_CRYPTOS } from './types'

export const renderCryptos = cryptocurrencies => {
  return {
    type: SHOW_CRYPTOS,
    cryptocurrencies
  }
}
