import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllFutureTrips from './AllFutureTrips';
import Trip from './Trip';

const FutureTrips = () => (
  <div>
    <Switch>
      <Route exact path='/trips/future' component={AllFutureTrips}/>
      <Route path='/trips/future/:number' component={Trip}/>
    </Switch>
  </div>
);

export default FutureTrips;
