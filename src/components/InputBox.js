import React, { PropTypes } from 'react'

export default function InputBox ({ value, onChange, onSubmit }) {
  return (
    <section className='inputBox'>
      <textarea
        value={value}
        onChange={(e) => { onChange(e.target.value) }}
      />
      <button onClick={onSubmit}>
        Send
      </button>
    </section>
  )
}

InputBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
