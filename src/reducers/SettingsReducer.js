import { TOGGLE_DARK_MODE } from './../actions/types'

const INITIAL_STATE = {
  darkModeEnabled: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        darkModeEnabled: !action.darkModeEnabled
      }
    default:
      return state
  }
}
