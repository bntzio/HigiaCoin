import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Router } from './src/router'
import reducers from './src/reducers'

const store = createStore(reducers, {})

store.subscribe(() => {
  console.log('🛍️', store.getState())
})

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
