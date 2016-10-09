import { combineReducers } from 'redux'

export const signaller = (state=null, action) => {
  switch (action.type) {
    case 'SIGNALLER_INIT':
      return action.signaller
    default:
      return state
  }
}

export const messages = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return state.concat(action.message)
    default:
      return state
  }
}

export const users = (state=[], action) => {
  switch (action.type) {
    case 'PEER_ARRIVAL':
      return state.concat(action.peer)
    case 'PEER_EXIT':
      return state.filter(user => user.id !== action.peer.id)
    default:
      return state
  }
}

export const localStream = (state=null, action) => {
  switch (action.type) {
    case 'LOCAL_STREAM_STARTED':
      return action.stream
    default:
      return state
  }
}

export const remoteStreams = (state=[], action) => {
  switch (action.type) {
    case 'REMOTE_STREAMS_RESET':
      return action.streams
    default:
      return state
  }
}

export const app = combineReducers({
  localStream,
  remoteStreams,
  messages,
  signaller,
  users,
})
