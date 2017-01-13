import React from 'react'
import { connect } from 'react-redux'
import StationList from '../containers/StationList'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

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
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>Bay Area Bike Share Nearby Stations</h1>
        <StationList />
      </div>
    )
  }
}

export default connect(null, null)(App);
