import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllTrips from './AllTrips';
import Trip from './Trip';

const Trips = () => (
  <div>
    <h2>This is trips page!</h2>
    <Switch>
      <Route exact path='/trips' component={AllTrips}/>
      <Route path='/trips/:number' component={Trip}/>
    </Switch>
  </div>
);

export default Trips;
