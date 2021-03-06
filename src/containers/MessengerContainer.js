import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  addMessage,
  removeMessage,
  updateBoxValue,
  getQuote
} from '_actions/messageActions'

// Components
import MessageList from '_components/MessageList'
import InputBox from '_components/InputBox'

class MessengerContainer extends Component {
  render () {
    const {
      messages,
      inputBox,
      addMessage,
      removeMessage,
      updateBoxValue,
      getQuote
    } = this.props

    return (
      <div>
        <header>Messenger</header>
        <main>
          <MessageList
            messages={messages}
            onItemRemove={removeMessage}
          />
          <InputBox
            {...inputBox}
            onChange={updateBoxValue}
            onSubmit={addMessage}
            getQuote={getQuote}
          />
        </main>
      </div>
    )
  }
}

MessengerContainer.propTypes = {
  messages: PropTypes.array,
  inputBox: PropTypes.object,
  addMessage: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
  updateBoxValue: PropTypes.func.isRequired,
  getQuote: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    inputBox: state.inputBox
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addMessage: messageText => dispatch(addMessage(messageText)),
    removeMessage: i => dispatch(removeMessage(i)),
    updateBoxValue: value => dispatch(updateBoxValue(value)),
    getQuote: () => dispatch(getQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)
