import React, { PropTypes } from 'react'

function convertNewlineToBreak (string) {
  return string.split('\n').map(line => (
    <span>
      {line}
      <br />
    </span>
  ))
}

export default function MessageItem ({ children, onRemove }) {
  return (
    <article>
      {convertNewlineToBreak(children)}
      <button onClick={onRemove}>
        Remove
      </button>
    </article>
  )
}

MessageItem.propTypes = {
  children: PropTypes.string,
  onRemove: PropTypes.func.isRequired
}
