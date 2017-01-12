import nearbyStations from '../../src/reducers/nearbyStations'

describe("reducer initialized", () => {

  it("Should return correct uninitialized state", () => {

  let reducer = nearbyStations(undefined, { type: "unknown" });

    expect(
      reducer
    ).toEqual( {
      stations: [],
      showingNearbyStations: false,
      fetching: false,
      error: false
    })
  });
});