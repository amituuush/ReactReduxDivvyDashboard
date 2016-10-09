import React from 'react'
import { connect } from 'react-redux'

const VideoStream = ({ muted=false, stream }) => {
  const src = window.URL.createObjectURL(stream)
  return <video src={src} autoPlay={true} muted={muted}/>
}

const Room = ({ localStream=null, remoteStreams=[] }) => {
  return <div className="room">
    {localStream && <VideoStream muted={true} stream={localStream} />}
    {remoteStreams.map(stream => <VideoStream key={stream.id} stream={stream} />)}
  </div>
}

const mapStateToProps = ({ localStream, remoteStreams }) => ({
  localStream,
  remoteStreams,
})

export default connect(mapStateToProps)(Room)
