import { applyMiddleware, createStore } from 'redux'
import thunkMiddlware from 'redux-thunk'
import createLogger from 'redux-logger'
import { app } from './reducers'

const logger = createLogger();

export default () => {
  return createStore(app, {}, applyMiddleware(thunkMiddlware, logger))
}
