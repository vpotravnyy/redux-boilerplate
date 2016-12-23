import {
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from '_constants/actions'
import { save, load } from '_helpers/localStorage'

const LOCAL_STORAGE_KEY = 'messages'

export const initialState = load(LOCAL_STORAGE_KEY) || []

export default function messages (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return save(LOCAL_STORAGE_KEY, [
        ...state,
        action.message
      ])
    case REMOVE_MESSAGE:
      return save(LOCAL_STORAGE_KEY, [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ])
    default:
      return state
  }
}
