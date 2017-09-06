import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';

const TripsModule = () => (
  <div style={styles.divBlock}>
    <h2 style={styles.heading}>Recent Trips</h2>
    <div style={styles.row}>
      {
        TripAPI.getMostRecent().map(t => (
          <Link to={`/trips/${t.status}/${t.number}`} key={t.number}>
            <img src={t.img} alt='trip' style={styles.img} />
          </Link>
        ))
      }
    </div>
    <h2 style={styles.heading}>Upcoming Trips</h2>
    <div style={styles.row}>
      {
        TripAPI.getMostRecentFuture().map(t => (
          <Link to={`/trips/${t.status}/${t.number}`} key={t.number}>
            <img src={t.img} alt='trip' style={styles.img} />
          </Link>
        ))
      }
    </div>
  </div>
);

const styles = {
  divBlock: {
    width: '80%',
    paddingBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    width: '50%',
    textAlign: 'center',
    padding: '15px 10px',
    margin: '50px auto 30px auto',
    fontFamily: 'Maven Pro, sans-serif',
    fontWeight: 'normal',
    border: '1px solid #0A0908'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    width: '200px',
    height: '150px'
  }
}

export default TripsModule;
