import {

  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_ERROR,

} from '../actionTypes';

const userLocation = (state={}, action) => {
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

export default userLocation;