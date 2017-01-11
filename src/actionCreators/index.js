import axios from 'axios';
import createApiURL from '../helpers'
import {
  FETCH_NEARBY_STATIONS,
  FETCH_USER_LOCATION
} from '../actionTypes';

export const fetchNearbyStations = (lat = 37.774929, lon = -122.419416, maxStations = 5) => {

  var request = axios.get(createApiURL(lat, lon, maxStations));

  return {
    type: FETCH_NEARBY_STATIONS,
    payload: request
  }
}

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
