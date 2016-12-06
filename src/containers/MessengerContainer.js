import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  addMessage,
  removeMessage,
  updateBoxValue
} from '../redux/actions/messageActions'

// Components
import MessageList from '../components/MessageList'
import InputBox from '../components/InputBox'

class MessengerContainer extends Component {
  render () {
    const {
      messages,
      inputBox,
      addMessage,
      removeMessage,
      updateBoxValue
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
  updateBoxValue: PropTypes.func.isRequired
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
    updateBoxValue: value => dispatch(updateBoxValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)
