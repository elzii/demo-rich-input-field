import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './store'


import './index.css'
import App from './App'

// Inject Tap Plugin
const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

// Initial State
const initialState = typeof window !== 'undefined'
  ? window.__initialState && window.__initialState__
  : {}

// Build store
export const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)