import {
  ACTION
} from '_constants/actions'

export const initialState = 0

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION:
      return state + 1
    default:
      return state
  }
}
