import { combineReducers } from 'redux'

import {

  NEARBY_STATIONS_REQUEST,
  NEARBY_STATIONS_SUCCESS,
  NEARBY_STATIONS_ERROR,

  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_ERROR,

} from '../actionTypes';



export const nearbyStations = (state=[], action) => {
  switch (action.type) {
    case NEARBY_STATIONS_REQUEST:
      return state;
    case NEARBY_STATIONS_SUCCESS:
      return action.stations;
    case NEARBY_STATIONS_ERROR:
      return state;
      /* TODO */
    default:
      return state
  }
}

export const userLocation = (state={}, action) => {
  switch (action.type) {
    case USER_LOCATION_REQUEST:
      /* TODO */
      return state;
    case USER_LOCATION_SUCCESS:
      return {
        longitude: action.longitude,
        latitude: action.latitude
      };
    case USER_LOCATION_ERROR:
      /* TODO */
      return state;
    default:
      return state
  }
}


export const app = combineReducers({
  nearbyStations: nearbyStations,
  userLocation: userLocation
})
