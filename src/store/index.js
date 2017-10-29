import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'


export function configureStore(initialState) {

  const reducer = reducers

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [thunkMiddleware]

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  )

  return store
}
