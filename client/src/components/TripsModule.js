import React from 'react';
import TripAPI from '../TripAPI';
import { Link } from 'react-router-dom';
import Background from '../images/topo-map2.png';
import TripRow from './TripRow';

const TripsModule = () => (
  <div style={styles.divBlock}>
    <h2 style={styles.heading}>Recent Trips</h2>
    <TripRow trips={TripAPI.getMostRecent()} />
    <h2 style={styles.heading}>Upcoming Trips</h2>
    <TripRow trips={TripAPI.getMostRecentFuture()} />
  </div>
);

const styles = {
  divBlock: {
    width: '95vw',
    background: "linear-gradient(0deg, rgba(255,255,255,0.0), rgba(255,255,255,0.0)), url(" + Background + ")",
    paddingBottom: '40px',
    paddingTop: '20px',
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    width: '33.3%',
    textAlign: 'center',
    padding: '10px 15px',
    margin: '20px auto 30px auto',
    fontFamily: 'Maven Pro, sans-serif',
    fontWeight: 'normal',
    borderBottom: '1px solid #fff',
    color: '#fff'
  },
};

export default TripsModule;
