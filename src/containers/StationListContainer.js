import { connect } from 'react-redux'
import StationList from '../components/StationList'

function mapStateToProps(state) {
  return {
    stationsFetching: state.nearbyStations.fetching,
    stationsError: state.nearbyStations.error.message,
    stations: state.nearbyStations.stations
  }
}

export default connect(mapStateToProps, null)(StationList)