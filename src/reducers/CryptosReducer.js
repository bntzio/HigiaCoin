import {
  SHOW_CRYPTOS,
  LOADING_CRYPTOS,
  SHOW_MODAL,
  HIDE_MODAL
} from './../actions/types'

const INITIAL_STATE = {
  cryptocurrencies: [],
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CRYPTOS:
      return action.cryptocurrencies
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalInfo: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalInfo: null
      }
    case LOADING_CRYPTOS:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}
