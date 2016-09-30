import React from 'react'
import { connect } from 'react-redux'

import { decrement, increment } from '../actions'

const App = ({ value, increment, decrement }) => {
  return <div className="app">
    <h1>{value}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
}

export default connect(
  state => state,
  { increment, decrement }
)(App)