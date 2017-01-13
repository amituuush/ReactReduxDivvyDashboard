import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const StationExcerpt = (props) => {

  const { stationName, availableBikes, availableDocks } = props;
  const totalBikes = availableDocks + availableBikes;

  return (
    <TableRow className="station-excerpt">
      <TableRowColumn className="station-excerpt__name">{stationName}</TableRowColumn>
      <TableRowColumn className="station-excerpt__bikes">{availableBikes}</TableRowColumn>
      <TableRowColumn className="station-excerpt__docks">{availableDocks}</TableRowColumn>
      <TableRowColumn className="station-excerpt__total">{totalBikes}</TableRowColumn>
    </TableRow>
  )
}

StationExcerpt.propTypes = {
  stationName: React.PropTypes.string,
  availableBikes: React.PropTypes.number,
  availableDocks: React.PropTypes.number
};

export default StationExcerpt;
