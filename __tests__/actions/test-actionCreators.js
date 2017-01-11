import { fetchNearbyStations, fetchUserLocation } from '../../src/actionCreators'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import {

  NEARBY_STATIONS_REQUEST,
  NEARBY_STATIONS_SUCCESS,
  NEARBY_STATIONS_ERROR,

  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_ERROR,

} from '../../src/actionTypes';

const mockStore = configureMockStore([thunk])

describe("Async fetch station details from the server.", () => {

  afterEach( () => {
    nock.cleanAll();
  });

  it("Dispatches FETCH_STATIONS_SUCCESS when the station data is successfully retrieved.", () => {

    // Set up nock with the example data.

    nock('https://shrouded-beach-2183.herokuapp.com')
      .get('/stations/nearby?lat=37.774929&lon=-122.419416&max_stations=5').reply(200, []);

    // create a mock store

    const store = mockStore({ todos: [] })

    // Verify the expected actions were fired, in the correct order.

    const expectedActions = [
      { type: NEARBY_STATIONS_REQUEST },
      { type: NEARBY_STATIONS_SUCCESS, stations: [] }
    ]

    return store.dispatch(fetchNearbyStations())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })



  });
});