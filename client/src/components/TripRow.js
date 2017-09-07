import React from 'react';
import { Link } from 'react-router-dom';
import TripBox from './TripBox';

const TripRow = ({trips}) => {
  const listItems = trips.map((t) =>
    <TripBox
      status={t.status}
      number={t.number}
      img = {t.img}
    />
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
  }
};

export default TripRow;
