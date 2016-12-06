import React, { PropTypes } from 'react'
import MessageItem from './MessageItem'

export default function MessageList ({ messages, onItemRemove }) {
  return (
    <section className='messageList'>
      {messages.map((message, i) => (
        <MessageItem key={i} onRemove={onItemRemove.bind(null, i)}>
          {message}
        </MessageItem>
      ))}
    </section>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array,
  onItemRemove: PropTypes.func.isRequired
}
