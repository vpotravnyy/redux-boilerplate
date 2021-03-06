// This script is React enter point - Root container
// If you would like to use some providers / other top-level components - this
// is best place to do it. Router is such example

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import MessengerContainer from '_containers/MessengerContainer'

const store = createStore()

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <MessengerContainer />
      </Provider>
    )
  }
}
