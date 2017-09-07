import React from 'react';
import { Link } from 'react-router-dom';

const TripRow = ({trips}) => {
  const listItems = trips.map((t) =>
    <Link to={`/trips/${t.status}/${t.number}`} key={t.number}>
      <img src={t.img} alt='trip' style={styles.img} />
    </Link>
  );
  return (
    <div style={styles.row}>{listItems}</div>
  );
};

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  img: {
    width: '200px',
    height: '150px'
  }
};

export default TripRow;
