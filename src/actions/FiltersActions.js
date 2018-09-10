import { SELECT_FILTER } from './types'

export const selectFilter = filter => {
  return {
    type: SELECT_FILTER,
    selectedFilter: filter
  }
}
