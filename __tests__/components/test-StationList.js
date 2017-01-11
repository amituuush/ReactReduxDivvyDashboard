// A Test for Station List
import React from 'react'
import ReactDOM from 'react-dom';
import StationList from '../../src/components/StationList'
import StationExcerpt from '../../src/components/StationExcerpt'
import { shallow } from 'enzyme'
import station from '../../data/stationExcerptMock'

describe("Station List", () => {

  let wrapper;

  describe("Station List is doesn't get any stations to show. :(", () => {

    beforeEach( () => {
      wrapper = shallow(<StationList stations={[]} />);
    });

    it("Shouldn't show any spaces.", () => {
      expect(
        wrapper.find('li').length
      ).toBe(0);
    });
  });

  describe("Station List is populated with stations", () => {

    beforeEach( () => {
      wrapper = shallow(<StationList stations={[station, station, station]} />);
    });

    it("Should show the correct number of stations", () => {
      expect(
        wrapper.find('li').length
      ).toBe(3);      
    });
  });
});
