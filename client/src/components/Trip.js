import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';

const Trip = (props) => {
  const trip = TripAPI.get(
    parseInt(props.match.params.number, 10)
  );
  if (!trip) {
    return <div>Sorry, but the trip was not found</div>
  }

  return (
    <div>
      <h1>{trip.title}</h1>
      <h2>{trip.date}</h2>
      <img src={trip.img} alt='trip image'/>
      <h4>{trip.location}</h4>
      <h4>{trip.type}</h4>
      <p>{trip.notes}</p>
      <Link to={`/trips/${trip.status}`}>Back</Link>
    </div>
  )
};

export default Trip;
