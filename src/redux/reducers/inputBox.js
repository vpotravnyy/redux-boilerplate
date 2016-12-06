export const initialState = {
  value: ''
}

export default function inputBox (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        value: action.value
      }
    case 'ADD_MESSAGE':
      return initialState
    default:
      return state
  }
}
