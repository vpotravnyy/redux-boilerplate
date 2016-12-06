import React, { PropTypes } from 'react'

export default function InputBox (props) {
  const {
    value,
    isFetching,
    onChange,
    onSubmit,
    getQuote
  } = props
  return (
    <section className='inputBox'>
      <textarea
        value={value}
        onChange={(e) => { onChange(e.target.value) }}
      />
      <button onClick={onSubmit}>
        Send
      </button>
      <button
        className='getQuoteBtn'
        onClick={getQuote}
        disabled={isFetching}
      >
        {isFetching ? 'Loading...' : 'Get Quote'}
      </button>
    </section>
  )
}

InputBox.propTypes = {
  value: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  getQuote: PropTypes.func.isRequired
}
