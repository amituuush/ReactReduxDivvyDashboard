import {
  NEARBY_STATIONS_REQUEST,
  NEARBY_STATIONS_SUCCESS,
  NEARBY_STATIONS_ERROR
} from '../actionTypes';

const nearbyStations = (state={
  stations: [],
  showingNearbyStations: false,
  fetching: false,
  error: false
}, action) => {
  switch (action.type) {
    case NEARBY_STATIONS_REQUEST:
      return Object.assign({}, state, {
        stations: [],
        fetching: true,
        error: false        
      });
    case NEARBY_STATIONS_SUCCESS:
      return Object.assign({}, state, {
        stations: action.stations,
        fetching: false,
        error: false
      });
    case NEARBY_STATIONS_ERROR:
      return Object.assign({}, state, {
        stations: [],
        fetching: false,
        error: action.exception
      });
    default:
      return state
  }
}

export default nearbyStations;