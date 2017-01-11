import React from 'react'
import { connect } from 'react-redux'
import StationListContainer from '../containers/StationListContainer'

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
    return (
      <div className="app">
        <h1>Bay Area Bike Share Nearby Stations</h1>
        <StationListContainer />
      </div>
    )
  }
}

export default connect(null, null)(App);
