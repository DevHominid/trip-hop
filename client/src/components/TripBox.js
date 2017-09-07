import React from 'react';
import { Link } from 'react-router-dom';

const TripBox = ({ status, number, img }) => (
  <Link to={`/trips/${status}/${number}`} key={number}>
    <img src={img} alt='trip' style={styles.img} />
  </Link>
);

const styles = {
  img: {
    width: '200px',
    height: '150px'
  }
}

export default TripBox;
