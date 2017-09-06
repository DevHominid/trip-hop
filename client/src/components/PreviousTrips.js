import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPreviousTrips from './AllPreviousTrips';
import Trip from './Trip';

const PreviousTrips = () => (
  <div>
    <Switch>
      <Route exact path='/trips/previous' component={AllPreviousTrips}/>
      <Route path='/trips/previous/:number' component={Trip}/>
    </Switch>
  </div>
);

export default PreviousTrips;
