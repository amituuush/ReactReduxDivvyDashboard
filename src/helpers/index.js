export function createApiURL(lat, lon, maxStations) {
  return 'https://bay-area-bike-share-api.herokuapp.com/stations/nearby?lat=' + lat + '&lon=' + lon + '&max_stations=' + maxStations;
}