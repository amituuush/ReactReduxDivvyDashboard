import { createApiURL } from '../helpers'
import fetch from 'isomorphic-fetch';

import {

  NEARBY_STATIONS_REQUEST,
  NEARBY_STATIONS_SUCCESS,
  NEARBY_STATIONS_ERROR,

  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_ERROR,

} from '../actionTypes';

const fetchNearbyStationsFetching = () => {
  return ({
    type: NEARBY_STATIONS_REQUEST
  });
}

const fetchNearbyStationsSuccess = (stations) => {
  return {
    type: NEARBY_STATIONS_SUCCESS,
    stations
  };
}

const fetchNearbyStationsError = (exception) => {
  return {
    type: NEARBY_STATIONS_ERROR,
    exception
  };
}

export const fetchNearbyStations = (lat = '37.774929', lon = '-122.419416', maxStations = 5) => {

  return dispatch => {

    dispatch(fetchNearbyStationsFetching());

    return fetch(createApiURL(lat, lon, maxStations))
      .then(response => response.json())
      .then(json => dispatch(fetchNearbyStationsSuccess(json)))
      .catch(ex => dispatch(fetchNearbyStationsError(ex)))
  }
}

const userLocationFetching = () => {
  return {
    type: USER_LOCATION_REQUEST
  };
}

const userLocationSuccess = (longitude, latitude) => {
  return {
    type: USER_LOCATION_SUCCESS,
    longitude,
    latitude
  };
}

const userLocationError = (exception) => {
  return {
    type: USER_LOCATION_ERROR,
    exception
  };
}

export const fetchUserLocation = () => {
  return dispatch => {      
    dispatch(userLocationFetching());

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function successCallback(position) {

      const { longitude, latitude } = position.coords;
      dispatch(fetchNearbyStations(longitude, latitude));
      dispatch(userLocationSuccess(longitude, latitude))

    }

    function errorCallback(exception) {
      dispatch(userLocationError(exception))
    }
  }
}




