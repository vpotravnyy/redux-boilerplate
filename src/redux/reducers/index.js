import { combineReducers } from 'redux'
import messages from './messages'
import inputBox from './inputBox'

const rootReducer = combineReducers({
  messages,
  inputBox
})

export default rootReducer
