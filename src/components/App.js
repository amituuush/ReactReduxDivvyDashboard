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
          title="Bay Area Bike Share Nearby Stations"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <StationList />
      </div>
    )
  }
}

export default connect(null, null)(App);
