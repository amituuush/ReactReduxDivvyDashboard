import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import '../index.css'

const StationExcerpt = (props) => {

  const { stationName, availableBikes, availableDocks } = props;
  const totalBikes = availableDocks + availableBikes;

  return (
    <TableRow className="station-excerpt">
      <TableRowColumn
        className="station-excerpt__name" >
          {stationName}
      </TableRowColumn>
      <TableRowColumn
        className="station-excerpt__bikes"
        style={{ textAlign: 'center'}} >
          {availableBikes}
      </TableRowColumn>
      <TableRowColumn
        className="station-excerpt__docks"
        style={{ textAlign: 'center'}} >
          {availableDocks}
      </TableRowColumn>
      <TableRowColumn
        className="station-excerpt__total"
        style={{ textAlign: 'center'}} >
          {totalBikes}
      </TableRowColumn>
    </TableRow>
  )
}

StationExcerpt.propTypes = {
  stationName: React.PropTypes.string,
  availableBikes: React.PropTypes.number,
  availableDocks: React.PropTypes.number
};

export default StationExcerpt;
