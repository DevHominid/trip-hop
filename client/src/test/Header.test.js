import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

describe('<Header />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders three <Link /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Link)).to.have.length(3);
  })
});
