
export const appInit = () => {
  return (dispatch) => {
    const signaller = require('../configureSignaller')(dispatch)

    dispatch({
      type: 'SIGNALLER_INIT',
      signaller,
    })

    signaller.announce({ room: 'tchr-client-demo' });

    setTimeout(() => signaller.send('/greet', 'hiyooooo'), 2000);
  }
}

export const peerArrival = (peer) => ({
  type: 'PEER_ARRIVAL',
  peer,
})

export const peerExit = (peer) => ({
  type: 'PEER_EXIT',
  peer,
})

export const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  message,
})

export const sendMessage = (messageContent) => {
  return (dispatch, getState) => {
    const { signaller } = getState()
    const message = {
      content: messageContent,
      userId: signaller.id
    }

    signaller.send('/usermessage', message)

    dispatch(receiveMessage(message))
  }
}
