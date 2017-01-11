import { applyMiddleware, createStore } from 'redux'
import thunkMiddlware from 'redux-thunk'
import { app } from './reducers'

export default () => {
  return createStore(app, {}, applyMiddleware(thunkMiddlware))
}
