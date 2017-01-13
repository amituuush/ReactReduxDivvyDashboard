import React from 'react'
import StationExcerpt from './StationExcerpt'
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} from 'material-ui/Table'

const renderError = (exception) => {
  return (
    <p className="loading-error">
      {exception}
    </p>
  )
}

const renderLoadingSpinner = () => {
  return (
    <p className="loading-spinner">
      Loading...
    </p>
  )
}

const renderStationList = (stations) => {
  return (
    <div>
      { stations && stations.map( (station, index) => {
        return (
            <StationExcerpt
              stationName={station.properties.stationName}
              availableBikes={station.properties.availableBikes}
              availableDocks={station.properties.availableDocks}
              key={index}
            />
        )
      })}
    </div>
  )
}

const StationList = (props) => {

  let markup;

  if(props.stationsFetching) {
    markup = renderLoadingSpinner();
  } else if(props.stationsError) {
    markup = renderError(props.stationsError);
  } else if((props.stations)) {
    markup = renderStationList(props.stations);
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
          { markup }
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

export default StationList;
