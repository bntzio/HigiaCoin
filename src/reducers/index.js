import { combineReducers } from 'redux'

import FiltersReducer from './FiltersReducer'
import CryptosReducer from './CryptosReducer'

export default combineReducers({
  filters: FiltersReducer,
  cryptos: CryptosReducer
})
