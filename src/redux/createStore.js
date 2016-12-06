// This file exports function that will create Redux store.
// It will apply all middlewares, pick up our reducers tree and
// create store for us. It also may take custom initial tree, which may be useful
// for testing purposes

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './reducers'

const middlewaresChain = applyMiddleware(thunkMiddleware, apiMiddleware)
const devtoolsInterceptor = window.devToolsExtension ? window.devToolsExtension() : f => f

const finalCreateStore = compose(middlewaresChain, devtoolsInterceptor)(createStore)

export default function (customInitialState) {
  const store = finalCreateStore(rootReducer, customInitialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
