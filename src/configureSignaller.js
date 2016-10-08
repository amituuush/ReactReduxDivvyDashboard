const messenger = require('rtc-switchboard-messenger')
const RtcSignaller = require('rtc-signaller')

const { peerArrival, peerExit, receiveMessage } = require('./actions')

const SWITCHBOARD_URL = 'http://tchr-switchboard.herokuapp.com'
// const SWITCHBOARD_URL = 'http://localhost:5000'

module.exports = (dispatch) => {
  const signaller = RtcSignaller(messenger(SWITCHBOARD_URL))

  // Handle a new peer arrival
  signaller.on('peer:announce', function(peer) {
    dispatch(peerArrival(peer))
  });

  // Handle peer exiting
  signaller.on('message:peerleave', function(peer) {
    console.log(peer)
    dispatch(peerExit(peer))
  });

  signaller.on('message:usermessage', function(message) {
    dispatch(receiveMessage(message))
  });

  return signaller
}