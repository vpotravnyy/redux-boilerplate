import {
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from '_constants/actions'
import { save, load } from '_helpers/localStorage'

const LOCAL_STORAGE_KEY = 'messages'
const loadMessages = load.bind(null, LOCAL_STORAGE_KEY)
const saveMessages = save.bind(null, LOCAL_STORAGE_KEY)

export const initialState = loadMessages() || []

export default function messages (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return saveMessages([
        ...state,
        action.message
      ])
    case REMOVE_MESSAGE:
      return saveMessages([
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ])
    default:
      return state
  }
}
