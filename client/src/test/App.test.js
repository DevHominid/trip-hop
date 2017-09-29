import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../components/App';
import Header from '../components/Header';
import Main from '../components/Main';

describe('<App />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });

  it('renders one <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('renders one <Main /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Main)).to.have.length(1);
  });
});
