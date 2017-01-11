import React from 'react'
import StationExcerpt from './StationExcerpt'

const StationList = (props) => {

  return (
    <div className="station-list">
      <ul>
        { props.stations && props.stations.map( (station, index) => {
          return (
            <li key={index}>
              <StationExcerpt stationName={station.properties.name} availableBikes={station.properties.availableBikes} availableDocks={station.properties.availableDocks}/>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

StationList.propTypes = { stations: React.PropTypes.array };
StationList.defaultProps = { stations: [] };

export default StationList;