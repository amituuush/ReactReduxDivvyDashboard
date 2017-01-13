import React from 'react'
import { connect } from 'react-redux'
import StationExcerpt from '../components/StationExcerpt'
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} from 'material-ui/Table'

// const renderError = (exception) => {
//   return (
//     <p className="loading-error">
//       {exception}
//     </p>
//   )
// }
//
// const renderLoadingSpinner = () => {
//   return (
//     <p className="loading-spinner">
//       Loading...
//     </p>
//   )
// }
//
// const renderStationList = (stations) => {
//   return (
//     <div>
//       { stations && stations.map( (station, index) => {
//         return (
//             <StationExcerpt
//               stationName={station.properties.stationName}
//               availableBikes={station.properties.availableBikes}
//               availableDocks={station.properties.availableDocks}
//               key={index}
//             />
//         )
//       })}
//     </div>
//   )
// }

const StationList = (props) => {
  console.log(props);
  const { stationsFetching, stationsError, stations } = this.props;
  let stationList;

  if (stationsFetching) {
    stationList = (
      <p className="loading-spinner">
        Loading...
      </p>
    );
  }
  else if (stationsError) {
    stationList = (
      <p className="loading-error">
        {props.stationsError}
      </p>
    );
  } else if (stations) {
    stationList = stations.map((station, index) => {
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

export default connect(mapStateToProps)(StationList);
