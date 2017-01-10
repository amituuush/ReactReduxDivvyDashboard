import React from 'react'
import { connect } from 'react-redux'
import {
  fetchNearbyStations,
  fetchUserLocation
} from '../actionCreators';

import { increment, decrement, } from '../actionCreators'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUserLocation();
    this.props.fetchNearbyStations(this.props.userLocation);
  }

  render() {

  console.log(this.props.nearbyStations);
    return <div className="app">
      <h1>Nearby Stations</h1>

    </div>
  }
}


function mapStateToProps(state) {
  return {
    nearbyStations: state.nearbyStations,
    userLocation: state.userLocation
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNearbyStations, fetchUserLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
