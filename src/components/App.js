import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  fetchNearbyStations,
  fetchUserLocation
} from '../actionCreators';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUserLocation();
    this.props.fetchNearbyStations(this.props.userLocation);
  }

  render() {      
    return (
      <div className="app">
        <h1>Nearby Stations</h1>
      </div>
    )
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
