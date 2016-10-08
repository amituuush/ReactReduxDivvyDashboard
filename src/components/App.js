import React from 'react'
import { connect } from 'react-redux'

import { appInit, appTeardown, } from '../actions'
import Chat from './Chat'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatchAppInit()
  }

  componentWillUnmount() {
    this.props.dispatchAppTeardown()
  }

  render() {
    const { users } = this.props

    return <div className="app">
      <h1>Users online</h1>
      {users.map(user => <h3 key={user.id}>{user.id}</h3>)} 
      <Chat />
    </div>
  }
}

export default connect(
  state => state,
  {
    dispatchAppInit: appInit,
    dispatchAppTeardown: appTeardown,
  }
)(App)
