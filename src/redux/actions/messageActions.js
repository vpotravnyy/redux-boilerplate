export const updateBoxValue = (value) => {
  return {
    type: 'UPDATE_VALUE',
    value
  }
}

// This is an example of 'thunk' action.
// When we call this action we don't provide message text to be sent with action.
// So action itself have to call 'getState' and find there needed info.
// This is here for demo only. In normal life you should avoid use 'thunk'
// because it's pretty hard to test such actions
export const addMessage = () => {
  return (dispatch, getState) => {
    const { inputBox: {value} } = getState()
    if (value) {
      dispatch({
        type: 'ADD_MESSAGE',
        message: value
      })
    }
  }
}

export const removeMessage = (index) => {
  return {
    type: 'REMOVE_MESSAGE',
    index
  }
}
