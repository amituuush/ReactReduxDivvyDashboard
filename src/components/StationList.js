import React from 'react'
import StationExcerpt from './StationExcerpt'

const StationList = (props) => {

  return (
    <div className="station-list">
      <ul>
        { props.stations && props.stations.map( (station, index) => {
          return (
            <li key={index}>
              <StationExcerpt station={station}/>
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