import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Shell extends Component {
  render () {
    const {
      message
    } = this.props

    return (
      <div>
        <header>Header</header>
        <main>
          <article>
            {message}
          </article>
        </main>
      </div>
    )
  }
}

Shell.propTypes = {
  message: PropTypes.string
}

function mapStateToProps (state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Shell)
