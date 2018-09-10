import { combineReducers } from 'redux'

import FiltersReducer from './FiltersReducer'
import CryptosReducer from './CryptosReducer'
import SettingsReducer from './SettingsReducer'

export default combineReducers({
  filters: FiltersReducer,
  cryptos: CryptosReducer,
  settings: SettingsReducer
})
