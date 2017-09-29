import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';

import Main from '../components/Main';

describe('<Main />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders one <Switch /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Switch)).to.have.length(1);
  });

  it('renders three <Route /> components', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Route)).to.have.length(3);
  });
});
