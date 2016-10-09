import quickconnect from 'rtc-quickconnect'

import { SWITCHBOARD_URL } from '../config'

export const appInit = () => {
  return (dispatch, getState) => {
    const signaller = require('../configureSignaller')(dispatch)

    dispatch({
      type: 'SIGNALLER_INIT',
      signaller,
    })

    signaller.announce({ room: 'tchr-client-demo' });

    navigator.getUserMedia(
      { audio: true, video: true },
      (stream) => {
        dispatch({
          type: 'LOCAL_STREAM_STARTED',
          stream,
        })

        quickconnect(SWITCHBOARD_URL, { room: 'conftest' })
          // broadcast our captured media to other participants in the room
          .addStream(stream)
          // when a peer is connected (and active) pass it to us for use
          .on('call:started', function(id, pc, data) {
            console.log('peer connected: ', id);
            console.log(pc.getRemoteStreams());
            // render the remote streams
            dispatch({
              type: 'REMOTE_STREAMS_RESET',
              streams: pc.getRemoteStreams()
            })
          })
          // when a peer leaves, remove teh media
          .on('call:ended', (id) => {
            console.log('peer disconnected: ', id);
            dispatch({
              type: 'REMOTE_STREAMS_RESET',
              streams: getState().remoteStreams.filter(stream => stream.id !== id)
            })
          })
      },
      (err) => {
        console.log(err)
      }
    )
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
