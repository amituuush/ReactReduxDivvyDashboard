import userLocation from '../../src/reducers/userLocation'

describe("reducer initialized", () => {

  const reducer = userLocation(undefined, { action: 'dsa' });

  it("Should return correct uninitialized state", () => {
    expect(
      reducer
    ).toEqual( {} )
  });
});