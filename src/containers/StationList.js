import React from 'react';
import { connect } from 'react-redux'
import StationList from '../components/StationList'

class StationListContainer extends React.Component {
  static propTypes = {
    stationList: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default conect(mapStateToProps, mapDispatcherToProps)(StationList)