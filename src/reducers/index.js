import { combineReducers } from 'redux'
import {
  FETCH_NEARBY_STATIONS
} from '../actionTypes';

export const fetchNearbyStations = (state={}, action) => {
  switch (action.type) {
    case FETCH_NEARBY_STATIONS:
      return action.payload;
    default:
      return state
  }
}

export const app = combineReducers({
  fetchNearbyStations,
})
