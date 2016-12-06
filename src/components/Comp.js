import React, { PropTypes } from 'react'

export default function Comp (props) {
  return (
    <div>Component. Value = {props.value}</div>
  )
}

Comp.propTypes = {
  value: PropTypes.any
}
