export function createApiURL(lat, lon, maxStations) {
  return 'http://shrouded-beach-2183.herokuapp.com/stations/nearby?lat=' + lat + '&lon=' + lon + '&max_stations=' + maxStations;
}