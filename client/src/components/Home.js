import React from 'react';
import TripAPI from '../TripAPI';
import IndexCover from './IndexCover';
import TripsModule from './TripsModule';

const Home = () => (
  <div>
    <IndexCover />
    <section>
      <TripsModule />
    </section>
  </div>
);

export default Home;
