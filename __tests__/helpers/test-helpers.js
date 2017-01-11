import { createApiURL } from '../../src/helpers'

describe("createApiURL", () => {
  
  const lon = -35;
  const lat = 100;
  const max_stations = 5

  it("Should return a URL formatted correctly, when all attributes are provided", () => {
    const url = createApiURL(lat, lon, max_stations);
    expect (
      url
    ).toEqual('https://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=100&lon=-35&max_stations=5')
  });
})