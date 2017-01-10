import axios from 'axios';
import {
  FETCH_NEARBY_STATIONS
} from '../actionTypes';

var API_ROUTE = 'http://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=25&lon=122'

export const fetchNearbyStations = (lat, lon) => ({

  var request = axios.get(`http://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=${lat}&lon=${lon}`);

  return {
    type: FETCH_NEARBY_STATIONS,
    payload: request
  }
})
