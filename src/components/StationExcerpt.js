import React from 'react'

const StationExcerpt = (props) => {

  const { stationName, availableBikes, availableDocks } = props;
  const totalBikes = availableDocks + availableBikes;

  return (
    <div className="station-excerpt">
      <h3 className="station-excerpt__name">{stationName}</h3>
      <p>Available Bikes: <span className="station-excerpt__bikes">{availableBikes}</span></p>
      <p>Available Docks: <span className="station-excerpt__docks">{availableDocks}</span></p>
      <p>Total Bikes: <span className="station-excerpt__total">{totalBikes}</span></p>
    </div>
  )
}

StationExcerpt.propTypes = { 
  stationName: React.PropTypes.string,
  availableBikes: React.PropTypes.number,
  availableDocks: React.PropTypes.number
};

export default StationExcerpt;