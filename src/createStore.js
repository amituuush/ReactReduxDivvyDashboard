import { createStore } from 'redux'

import { app } from './reducers'

export default () => {
  return createStore(app)
}
