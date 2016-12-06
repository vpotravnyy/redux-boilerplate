// This script is React enter point - Root container
// If you would like to use some providers / other top-level components - this
// is best place to do it. Router is such example

import React, { Component } from 'react'

export default class Root extends Component {
  render () {
    return (
      <div>
        Yay, I'm rendered by React! ^_^
      </div>
    )
  }
}
