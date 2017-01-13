import React from 'react'
import StationList from '../containers/StationList'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const App = () => (
  <div className="app">
    <AppBar
      title="Bay Area Bike Share Nearby Stations"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <StationList />
  </div>
);

export default App;
