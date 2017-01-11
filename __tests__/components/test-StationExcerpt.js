import React from 'react'
import StationExcerpt from '../../src/components/StationExcerpt'
import { mount } from 'enzyme';
import station from '../../data/stationExcerptMock'

describe("Station Excerpt", () => {
  describe("displays bike stats", () => {
 
    const wrapper = mount(
      <StationExcerpt 
        stationName={station.properties.stationName}
        availableBikes={station.properties.availableBikes}
        availableDocks={station.properties.availableDocks}
      />
    )

    it("Should show the correct name", () => {
      const stationName = wrapper.find('.station-excerpt__name').text()
      expect(stationName).toEqual("Test Station Wow");
    });

    it("Should show the correct number of bikes", () => {
      const availableBikes = wrapper.find('.station-excerpt__bikes').text()
      expect(availableBikes).toEqual("10");
    });

    it("Should show the correct number of bikes", () => {
      const availableDocks = wrapper.find('.station-excerpt__docks').text()
      expect(availableDocks).toEqual("15");
    });

  });
});