export const initialState = {
  value: '',
  isFetching: false
}

export default function inputBox (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.value
      }
    case 'GET_QUOTE_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'GET_QUOTE_SUCCESS':
      return {
        ...state,
        value: action.payload.quote,
        isFetching: false
      }
    case 'GET_QUOTE_FAILURE':
      return {
        ...state,
        isFetching: false
      }
    case 'ADD_MESSAGE':
      return initialState
    default:
      return state
  }
}
