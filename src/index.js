import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from './components/Root'
import createStore from './createStore'

import './index.css'

ReactDOM.render(
  <Provider store={createStore()}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
