import { combineReducers } from 'redux'

import {

  NEARBY_STATIONS_REQUEST,
  NEARBY_STATIONS_SUCCESS,
  NEARBY_STATIONS_ERROR,

  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_ERROR,

} from '../actionTypes';

export const nearbyStations = (state={
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

export const userLocation = (state={}, action) => {
  switch (action.type) {
    case USER_LOCATION_REQUEST:
      return Object.assign({}, state, {
        position: {
          latitude: action.latitude,
          longitude: action.longitude
        },
        fetching: false
      });
    case USER_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        position: {
          latitude: action.latitude,
          longitude: action.longitude
        },
        fetching: false
      });
    case USER_LOCATION_ERROR:
      return Object.assign({}, state, {
        position: false,
        fetching: false
      });
    default:
      return state
  }
}


export const app = combineReducers({
  nearbyStations: nearbyStations,
  userLocation: userLocation
})
