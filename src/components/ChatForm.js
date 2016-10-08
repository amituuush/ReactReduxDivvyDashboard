import React from 'react'
import { connect } from 'react-redux'

import { sendMessage } from '../actions'

class ChatForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { content: '' }
  } 

  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatchSendMessage(this.state.content)
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
      <input
          onChange={this.handleContentChange}
          type="text"
          value={this.props.content} />
      <input type="submit" value="Send" />
    </form>
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  dispatchSendMessage: sendMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatForm)
