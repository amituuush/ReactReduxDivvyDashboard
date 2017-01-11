import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import App from './App'

export default () => { 
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  )
}
