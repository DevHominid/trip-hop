import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllTrips from './AllTrips';
import Trip from './Trip';
import PreviousTrips from './PreviousTrips';
import FutureTrips from './FutureTrips';

const Trips = () => (
  <div>
    <Switch>
      <Route exact path='/trips' component={AllTrips}/>
      <Route path='/trips/previous' component={PreviousTrips}/>
      <Route path='/trips/future' component={FutureTrips}/>
      // <Route path='/trips/:number' component={Trip}/>
      // <Route path='/trips/future/:number' component={Trip}/>
    </Switch>
  </div>
);

export default Trips;
