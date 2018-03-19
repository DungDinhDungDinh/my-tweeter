import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'react-bootstrap';

import LandingPage from '../LandingPage';

describe('LandingPage test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });
  it('should return Grid', () => {
    expect(wrapper.find(Grid).length).toEqual(1);
  });
});