import { combineReducers } from 'redux'
import {
  FETCH_NEARBY_STATIONS,
  FETCH_USER_LOCATION
} from '../actionTypes';

export const fetchNearbyStations = (state={}, action) => {
  switch (action.type) {
    case FETCH_NEARBY_STATIONS:
      return action.payload;
    default:
      return state
  }
}

export const fetchUserLocation = (state={}, action) => {
  switch (action.type) {
    case FETCH_USER_LOCATION:
      return {
        longitude: action.longitude,
        latitude: action.latitude
      };
    default:
      return state
  }
}


export const app = combineReducers({
  nearbyStations: fetchNearbyStations,
  userLocation: fetchUserLocation
})
