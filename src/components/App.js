import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, } from '../actionCreators'

class App extends React.Component {
  render() {
    const { dispatchDecrement, dispatchIncrement, value } = this.props

    return <div className="app">
      <h1>{value}</h1>
      <button onClick={dispatchIncrement}>Increment</button>
      <button onClick={dispatchDecrement}>Decrement</button>
    </div>
  }
}

export default connect(
  state => state,
  {
    dispatchDecrement: decrement,
    dispatchIncrement: increment,
  }
)(App)
