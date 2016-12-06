import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  fireAction
} from '_actions/actions'

// Components
import Comp from '_components/Comp'

class Container extends Component {
  render () {
    const {
      value,
      fireAction
    } = this.props

    return (
      <div onClick={fireAction}>
        <Comp value={value} />
      </div>
    )
  }
}

Container.propTypes = {
  value: PropTypes.any,
  fireAction: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    value: state.reducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fireAction: () => dispatch(fireAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
