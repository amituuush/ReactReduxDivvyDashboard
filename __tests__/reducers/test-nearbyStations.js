import nearbyStations from '../../src/reducers/nearbyStations'
import { fetchNearbyStationsSuccess, fetchNearbyStationsFetching, fetchNearbyStationsError } from '../../src/actionCreators'
import stationData from '../../data/stationExcerptMock'

describe("nearbyStations Reducer", () => {

  let state = false;

  describe("state initialized", () => {

    it("Should return correct uninitialized state", () => {

      state = nearbyStations(undefined, { type: "unknown" });

      expect(
        state
      ).toEqual( {
        stations: [],
        fetching: false,
        error: false
      })
    });

    describe("Fetching action dispatched", () => {

      it("Should return correct state with fetching set.", () => {

        const actionFetching = fetchNearbyStationsFetching();
        state = nearbyStations(state, actionFetching);

        expect(
          state
        ).toEqual( {
          stations: [],
          fetching: true,
          error: false  
        })
      });
    

      describe("Error action dispatched", () => {

        it("Should return correct state with error set.", () => {

          const error = {message: "test error message"}
          const actionError = fetchNearbyStationsError(error)
          state = nearbyStations(state, actionError);

          expect(
            state
          ).toEqual( {
            stations: [],
            fetching: false,
            error: error
          })
        });


        describe("Fetching action dispatched", () => {

          it("Should return correct state with fetching set.", () => {

            const actionFetching = fetchNearbyStationsFetching()
            state = nearbyStations(state, actionFetching);

            expect(
              state
            ).toEqual( {
              stations: [],
              fetching: true,
              error: false
            })
          });
        

          describe("Success action dispatched", () => {

            it("Should return correct state with stations saved.", () => {

              const stations = [stationData, stationData, stationData]
              const successAction = fetchNearbyStationsSuccess(stations) // Received three stations.
              state = nearbyStations(state, successAction);

              expect(
                state
              ).toEqual( {
                stations: stations,
                fetching: false,
                error: false
              })
            });
          });
        });
      });
    });
  });
});

