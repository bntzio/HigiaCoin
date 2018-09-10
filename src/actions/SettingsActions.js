import { TOGGLE_DARK_MODE } from './types'

export const toggleDarkMode = darkModeEnabled => {
  return {
    type: TOGGLE_DARK_MODE,
    darkModeEnabled
  }
}
