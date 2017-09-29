import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../components/Header';

describe('<Header />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).to.equal(1);
  });
});
