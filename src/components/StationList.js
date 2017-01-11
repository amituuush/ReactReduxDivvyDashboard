import React from 'react'
import StationExcerpt from './StationExcerpt'

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
    <ul>
      { stations && stations.map( (station, index) => {
        return (
          <li key={index}>
            <StationExcerpt 
              stationName={station.properties.stationName}
              availableBikes={station.properties.availableBikes}
              availableDocks={station.properties.availableDocks}
            />
          </li>
        )
      })}
    </ul>
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
      { markup }
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