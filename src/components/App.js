import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StationList from './StationList'

import {
  fetchNearbyStations,
  fetchUserLocation
} from '../actionCreators';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUserLocation();
    this.props.fetchNearbyStations();
  }

  render() { 

    const nearbyStations = this.props.nearbyStations;

    return (
      <div className="app">
        <h1>Nearby Stations</h1>
        <StationList stations={nearbyStations}/>
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
