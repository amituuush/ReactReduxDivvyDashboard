import React from 'react'
import { connect } from 'react-redux'

import ChatForm from './ChatForm'

const Message = ({ userId, content }) => {
  return <p>{userId}: {content}</p>
}

const Chat = ({ messages }) => {
  return <div className="chat">
    {messages.map((message, index) => <Message {...message} key={index} />)}
    <ChatForm />
  </div>
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Chat)
