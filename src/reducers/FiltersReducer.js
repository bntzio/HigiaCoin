import { SELECT_FILTER } from './../actions/types'

const INITIAL_STATE = {
  activeFilter: 'Market Cap',
  modalOpen: false,
  modalInfo: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return {
        activeFilter: action.selectedFilter
      }
    default:
      return state
  }
}
