import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../images/alltrips-cover.jpg';

const AllTrips = () => (
  <div>
    <section style={styles.section}>
      <div style={styles.divPast}>
        <Link to='/trips/previous' style={styles.linkPast}>Past</Link>
      </div>
      <div style={styles.divFuture}>
        <Link to='/trips/future' style={styles.linkFuture}>Future</Link>
      </div>
    </section>
  </div>
);

const styles = {
  section: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    flexDirection: 'row'
  },
  divPast: {
    width: '50%',
    height: '100%',
    background: "linear-gradient(0deg, rgba(255,255,255,0.8), rgba(0,0,0,0.8)), url(" + Background + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  divFuture: {
    width: '50%',
    height: '100%',
    background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(255,255,255,0.8)), url(" + Background + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  linkPast: {
    color: '#000',
    textDecoration: 'none',
    border: '1px solid #000',
    fontFamily: 'Maven Pro, sans-serif',
    padding: '20px 25px',
    marginBottom: '5%'
  },
  linkFuture: {
    color: '#fff',
    textDecoration: 'none',
    border: '1px solid #fff',
    fontFamily: 'Maven Pro, sans-serif',
    padding: '20px 25px',
    marginBottom: '5%'
  }
}

export default AllTrips;
