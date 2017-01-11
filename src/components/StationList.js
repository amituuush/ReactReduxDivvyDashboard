import React from 'react'
import StationExcerpt from './StationExcerpt'

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
            <StationExcerpt stationName={station.properties.stationName} availableBikes={station.properties.availableBikes} availableDocks={station.properties.availableDocks}/>
          </li>
        )
      }) }
    </ul>
  )
}

const StationList = (props) => {

  return (
    <div className="station-list">
      { props.stations.fetching ? renderLoadingSpinner(): renderStationList(props.stations) }
    </div>
  )
}

StationList.propTypes = { 
  stationsFetching: React.PropTypes.bool,
  stations: React.PropTypes.array 
};
StationList.defaultProps = { stations: [] };

export default StationList;