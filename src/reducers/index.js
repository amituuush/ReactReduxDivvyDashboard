import { combineReducers } from 'redux'

import nearbyStations from './nearbyStations'
import userLocation from './userLocation'

export const app = combineReducers({
  nearbyStations: nearbyStations,
  userLocation: userLocation
})
