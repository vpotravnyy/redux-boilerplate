// This is enter-point of app. You can import here any polyfills that you want
// to be global. Nothing react-specific shouldn't be here.
// This script renders React enter point in #root

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)
