import axios from 'axios';
import {
  FETCH_NEARBY_STATIONS,
  FETCH_USER_LOCATION
} from '../actionTypes';

var API_ROUTE = 'http://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=25&lon=122'

export const fetchNearbyStations = (lat, lon) => ({

  var request = axios.get(`http://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=${lat}&lon=${lon}`);

  return {
    type: FETCH_NEARBY_STATIONS,
    payload: request
  }
})

export const fetchUserLocation = () => {
  if(navigator.location) {
    var successCallback = (position) => {

      let { longitude, latitude } = position.coords;

      return {
        type: FETCH_USER_LOCATION,
        longitude,
        latitude
      }
    }

    var errorCallback = () => {
      return {
        type: FETCH_USER_LOCATION,
        longitude: -87,
        latitude: 41
      }
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
}
