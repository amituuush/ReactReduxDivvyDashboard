import React from 'react'
import { connect } from 'react-redux'
import StationList from './StationList'

import {
  fetchNearbyStations,
  fetchUserLocation
} from '../actionCreators';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserLocation());
    this.props.dispatch(fetchNearbyStations());
  }

  render() { 

    const nearbyStations = this.props.nearbyStations.stations;
    const fetchingStations = this.props.nearbyStations.fetching;

    return (
      <div className="app">
        <h1>Nearby Stations</h1>
        <StationList 
          stations={nearbyStations}
          stationsFetching={fetchingStations}
        />
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

export default connect(mapStateToProps, null)(App);
