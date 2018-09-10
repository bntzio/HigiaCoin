import { SHOW_CRYPTOS } from './../actions/types'

const INITIAL_STATE = {
  cryptocurrencies: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CRYPTOS:
      return action.cryptocurrencies
    default:
      return state
  }
}
