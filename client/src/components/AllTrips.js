import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';

const AllTrips = () => (
  <div>
    <ul>
      {
        TripAPI.all().map(t => (
          <li key={t.number}>
            <Link to={`/trips/${t.number}`}>{t.title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default AllTrips;
