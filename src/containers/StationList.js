import React, { Component } from 'react'
import { connect } from 'react-redux'
import StationExcerpt from '../components/StationExcerpt'
import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui/Table'
import * as actions from '../actionCreators'

class StationList extends Component {

  componentDidMount() {
    this.props.fetchUserLocation();
    this.props.fetchNearbyStations();
  }

  render() {
    let stationList;

    if (this.props.stationsFetching) {
      stationList = (
        <TableRow className="loading-spinner">
          <TableRowColumn>Loading...</TableRowColumn>
        </TableRow>
      );
    }
    else if (this.props.stationsError) {
      stationList = (
        <TableRow className="loading-error">
          <TableRowColumn>{this.props.stationsError}</TableRowColumn>
        </TableRow>
      );
    } else if (this.props.stations) {
      stationList = this.props.stations.map((station, index) => {
          return (
              <StationExcerpt
                stationName={station.properties.stationName}
                availableBikes={station.properties.availableBikes}
                availableDocks={station.properties.availableDocks}
                key={index}
              />
          );
        })
      }

    return (
      <div className="station-list">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Station Name</TableHeaderColumn>
              <TableHeaderColumn>Available Bikes</TableHeaderColumn>
              <TableHeaderColumn>Available Docks</TableHeaderColumn>
              <TableHeaderColumn>Total Bikes</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            { stationList }
          </TableBody>
        </Table>
      </div>
    )
  }
}


StationList.propTypes = {
  stationsFetching: React.PropTypes.bool,
  stationsError: React.PropTypes.string,
  stations: React.PropTypes.array
};

StationList.defaultProps = { stations: [] };

function mapStateToProps(state) {
  return {
    stationsFetching: state.nearbyStations.fetching,
    stationsError: state.nearbyStations.error.message,
    stations: state.nearbyStations.stations
  }
}

export default connect(mapStateToProps, actions)(StationList);
