import {
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from '../../constants/actions'

export const initialState = []

export default function messages (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        action.message
      ]
    case REMOVE_MESSAGE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
